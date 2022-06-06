// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;
pragma abicoder v2;

// import 'hardhat/console.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/security/Pausable.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/utils/Address.sol';

contract Market is ReentrancyGuard, Ownable, Pausable {
    uint8 public constant SIDE_SELL = 1;
    uint8 public constant SIDE_BUY = 2;

    uint8 public constant STATUS_OPEN = 0;
    uint8 public constant STATUS_ACCEPTED = 1;
    uint8 public constant STATUS_CANCELLED = 2;

    struct Offer {
        uint256 tokenId;
        uint256 price;
        IERC721 nft;
        address user;
        address acceptUser;
        uint8 status;
        uint8 side;
    }

    // events

    event EvNewOffer(
        address indexed user,
        IERC721 indexed nft,
        uint256 indexed tokenId,
        uint256 price,
        uint8 side,
        uint256 id
    );

    event EvCancelOffer(uint256 indexed id);
    event EvAcceptOffer(uint256 indexed id, address indexed user, uint256 price);

    event EvSettingsUpdated(address feeAddress);
    event EvNFTBlacklistUpdate(IERC721 nft, bool blacklisted);

    // variables

    address public feeAddress;

    Offer[] public offers;
    mapping(IERC721 => mapping(uint256 => uint256)) public tokenSellOffers; // nft => tokenId => id
    mapping(address => mapping(IERC721 => mapping(uint256 => uint256))) public userBuyOffers; // user => nft => tokenId => id
    mapping(IERC721 => bool) public nftBlacklist;

    // settings
    constructor(
        address feeAddress_
    ) {
        feeAddress = feeAddress_;

        // take id(0) as placeholder
        offers.push(
            Offer({
                tokenId: 0,
                price: 0,
                nft: IERC721(address(0)),
                user: address(0),
                acceptUser: address(0),
                status: STATUS_CANCELLED,
                side: 0
            })
        );
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function updateSettings(
        address feeAddress_
    ) public onlyOwner {
        feeAddress = feeAddress_;

        emit EvSettingsUpdated(feeAddress);
    }

    function blacklistNFT(IERC721[] calldata nfts) public onlyOwner {
        for (uint256 i = 0; i < nfts.length; i++) {
            nftBlacklist[nfts[i]] = true;
            emit EvNFTBlacklistUpdate(nfts[i], true);
        }
    }

    function unblacklistNFT(IERC721[] calldata nfts) public onlyOwner {
        for (uint256 i = 0; i < nfts.length; i++) {
            delete nftBlacklist[nfts[i]];
            emit EvNFTBlacklistUpdate(nfts[i], false);
        }
    }

    // user functions

    function offer(
        uint8 side,
        IERC721 nft,
        uint256 tokenId,
        uint256 price
    ) public payable nonReentrant whenNotPaused _nftAllowed(nft) {
        if (side == SIDE_BUY) {
            _offerBuy(nft, tokenId);
        } else if (side == SIDE_SELL) {
            _offerSell(nft, tokenId, price);
        } else {
            revert('impossible');
        }
    }

    function accept(uint256 id)
        public
        payable
        nonReentrant
        _offerExists(id)
        _offerOpen(id)
        _notBlacklisted(id)
        whenNotPaused
    {
        Offer storage _offer = offers[id];
        if (_offer.side == SIDE_BUY) {
            _acceptBuy(id);
        } else {
            _acceptSell(id);
        }
    }

    function cancel(uint256 id)
        public
        nonReentrant
        _offerExists(id)
        _offerOpen(id)
        _offerOwner(id)
        whenNotPaused
    {
        Offer storage _offer = offers[id];
        if (_offer.side == SIDE_BUY) {
            _cancelBuy(id);
        } else {
            _cancelSell(id);
        }
    }

    function multiCancel(uint256[] calldata ids) public {
        for (uint256 i = 0; i < ids.length; i++) {
            cancel(ids[i]);
        }
    }

    function _offerSell(
        IERC721 nft,
        uint256 tokenId,
        uint256 price
    ) internal {
        require(msg.value == 0, 'thank you but seller should not pay');
        require(price > 0, 'price > 0');
        offers.push(
            Offer({
                tokenId: tokenId,
                price: price,
                nft: nft,
                user: msg.sender,
                acceptUser: address(0),
                status: STATUS_OPEN,
                side: SIDE_SELL
            })
        );

        uint256 id = offers.length - 1;
        emit EvNewOffer(msg.sender, nft, tokenId, price, SIDE_SELL, id);

        require(getTokenOwner(id) == msg.sender, 'sender should own the token');
        require(isTokenApproved(id, msg.sender), 'token is not approved');
        _closeSellOfferFor(nft, tokenId);
        tokenSellOffers[nft][tokenId] = id;
    }

    function _offerBuy(IERC721 nft, uint256 tokenId) internal {
        uint256 price = msg.value;
        require(price > 0, 'buyer should pay');
        offers.push(
            Offer({
                tokenId: tokenId,
                price: price,
                nft: nft,
                user: msg.sender,
                acceptUser: address(0),
                status: STATUS_OPEN,
                side: SIDE_BUY
            })
        );
        uint256 id = offers.length - 1;
        emit EvNewOffer(msg.sender, nft, tokenId, price, SIDE_BUY, id);
        _closeUserBuyOffer(userBuyOffers[msg.sender][nft][tokenId]);
        userBuyOffers[msg.sender][nft][tokenId] = id;
    }

    function _acceptBuy(uint256 id) internal {
        // caller is seller
        Offer storage _offer = offers[id];
        require(msg.value == 0, 'thank you but seller should not pay');

        require(getTokenOwner(id) == msg.sender, 'only owner can call');
        require(isTokenApproved(id, msg.sender), 'token is not approved');

        _offer.nft.safeTransferFrom(msg.sender, _offer.user, _offer.tokenId);
        _distributePayment(_offer.price, msg.sender);

        _offer.status = STATUS_ACCEPTED;
        _offer.acceptUser = msg.sender;
        emit EvAcceptOffer(id, msg.sender, _offer.price);
        _unlinkBuyOffer(_offer);
        _closeSellOfferFor(_offer.nft, _offer.tokenId);

        // bookkeeper.recordVolume(_offer.user, _offer.price);
        // bookkeeper.recordVolume(msg.sender, _offer.price);
    }

    function _acceptSell(uint256 id) internal {
        // caller is buyer
        Offer storage _offer = offers[id];
        require(getTokenOwner(id) == _offer.user, 'token not owned by the seller anymore');
        require(isTokenApproved(id, _offer.user), 'token is not approved');
        require(msg.value >= _offer.price, 'send more money');

        _offer.nft.safeTransferFrom(_offer.user, msg.sender, _offer.tokenId);
        _distributePayment(msg.value, _offer.user);

        _offer.status = STATUS_ACCEPTED;
        _offer.acceptUser = msg.sender;
        _offer.price = msg.value;
        emit EvAcceptOffer(id, msg.sender, msg.value);
        _unlinkSellOffer(_offer);

        // bookkeeper.recordVolume(_offer.user, msg.value);
        // bookkeeper.recordVolume(msg.sender, msg.value);
    }

    function _cancelSell(uint256 id) internal {
        Offer storage _offer = offers[id];
        _offer.status = STATUS_CANCELLED;
        emit EvCancelOffer(id);
        _unlinkSellOffer(_offer);
    }

    function _cancelBuy(uint256 id) internal {
        Offer storage _offer = offers[id];
        _offer.status = STATUS_CANCELLED;
        _transfer(msg.sender, _offer.price);
        emit EvCancelOffer(id);
        _unlinkBuyOffer(_offer);
    }

    // modifiers

    modifier _offerExists(uint256 id) {
        require(id > 0 && id < offers.length, 'offer does not exist');
        _;
    }

    modifier _offerOpen(uint256 id) {
        require(offers[id].status == STATUS_OPEN, 'offer should be open');
        _;
    }

    modifier _offerOwner(uint256 id) {
        require(offers[id].user == msg.sender, 'call should own the offer');
        _;
    }

    modifier _notBlacklisted(uint256 id) {
        Offer storage _offer = offers[id];
        require(!nftBlacklist[_offer.nft], 'NFT in blacklist');
        _;
    }

    modifier _nftAllowed(IERC721 nft) {
        require(!nftBlacklist[nft], 'NFT in blacklist');
        _;
    }

    // internal helpers

    function _sendValue(address to, uint256 amount) internal {
        if (amount > 0) {
            Address.sendValue(payable(to), amount);
        }
    }

    function _transfer(address to, uint256 amount) internal {
        if (amount > 0) {
            payable(to).transfer(amount);
        }
    }

    function _distributePayment(uint256 totalAmount, address seller) internal {
        // uint256 feeRate = feeController.feeRate(seller);
        uint256 fee = (totalAmount * 2) / 100; // fee is 2%
        _sendValue(feeAddress, fee);
        _transfer(seller, totalAmount - fee);
    }

    function _closeSellOfferFor(IERC721 nft, uint256 tokenId) internal {
        uint256 id = tokenSellOffers[nft][tokenId];
        if (id == 0) return;

        // closes old open sell offer
        Offer storage _offer = offers[id];
        _offer.status = STATUS_CANCELLED;
        tokenSellOffers[_offer.nft][_offer.tokenId] = 0;
        emit EvCancelOffer(id);
    }

    function _closeUserBuyOffer(uint256 id) internal {
        Offer storage o = offers[id];
        if (id > 0 && o.status == STATUS_OPEN && o.side == SIDE_BUY) {
            o.status = STATUS_CANCELLED;
            _transfer(o.user, o.price);
            _unlinkBuyOffer(o);
            emit EvCancelOffer(id);
        }
    }

    function _unlinkBuyOffer(Offer storage o) internal {
        userBuyOffers[o.user][o.nft][o.tokenId] = 0;
    }

    function _unlinkSellOffer(Offer storage o) internal {
        tokenSellOffers[o.nft][o.tokenId] = 0;
    }

    // helpers

    function isValidSell(uint256 id) public view returns (bool) {
        if (id >= offers.length) {
            return false;
        }

        Offer storage _offer = offers[id];
        // try to not throw exception
        return
            _offer.status == STATUS_OPEN &&
            _offer.side == SIDE_SELL &&
            isTokenApproved(id, _offer.user) &&
            (_offer.nft.ownerOf(_offer.tokenId) == _offer.user);
    }

    function isTokenApproved(uint256 id, address owner) public view returns (bool) {
        Offer storage _offer = offers[id];
        return
            _offer.nft.getApproved(_offer.tokenId) == address(this) ||
            _offer.nft.isApprovedForAll(owner, address(this));
    }

    function getTokenOwner(uint256 id) public view returns (address) {
        Offer storage _offer = offers[id];
        return _offer.nft.ownerOf(_offer.tokenId);
    }
}