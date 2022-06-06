// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;
pragma abicoder v2;

// import 'hardhat/console.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/security/Pausable.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/utils/Address.sol';


import './IContractInterface721.sol';
import "./IERC721Tradable.sol";

contract Market is ReentrancyGuard, Ownable, Pausable {

    uint8 public constant STATUS_OPEN = 0;
    uint8 public constant STATUS_ACCEPTED = 1;
    uint8 public constant STATUS_CANCELLED = 2;

    struct Offer {
        uint256 offerId;
        uint256 tokenId;
        IERC721 nft;
        uint8 method;
        uint256 price;
        uint256 startTime;
        uint256 endTime;
        address user;
        address acceptUser;
        uint8 status;
    }

    struct BookInfo {
        address user;
        uint256 price;
    }

    // events
    event UpdateDeployer(address deployer);

    event EvNewOffer(
        address indexed user,
        IERC721 indexed nft,
        uint256 indexed tokenId,
        uint8 method,
        uint256 price,
        uint256 startTime,
        uint256 endTime,
        uint8 status,
        uint256 id
    );

    event PlaceBid(
        uint256 id, 
        address user,
        uint256 price
    );

    event AuctionResult(
        address user,
        uint256 price,
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
    mapping(uint256 => BookInfo[]) private bookInfo;
    mapping(IERC721 => bool) public nftBlacklist;

    address private deployer;
    /*
     * check if the collection has already been added to this factory
     */
    mapping(address => bool) collectionOccupation;

    /*
     * array of collection addresses
     */
    address[] private collections;

    receive() external payable {}
    fallback() external payable {}

    // settings
    constructor(
        address feeAddress_
    ) {
        feeAddress = feeAddress_;

        // take id(0) as placeholder
        offers.push(
            Offer({
                offerId: 0,
                tokenId: 0,
                price: 0,
                nft: IERC721(address(0)),
                method: 0,
                startTime: 0,
                endTime: 0,
                user: address(0),
                acceptUser: address(0),
                status: STATUS_CANCELLED
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

    /*
     * @dev this function updates the deployer for ERC721
     * @param deployer - deployer for ERC721
     */

    function updateDeployer(
        address _deployer
    ) public onlyOwner {
        deployer = _deployer;
        emit UpdateDeployer(deployer);
    }

    /*
     * @dev this function retrieves array of all collections registered to the factory
     */
    function getCollections()
        public
        view
        returns (address[] memory)
    {
        return collections;
    }

    function getRecentCollection() public view returns (address) {
        require(collections.length > 0, 'No collections');
        return collections[collections.length - 1];
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

    function createCollection(string memory _name, string memory _symbol, string memory _uri) external {
        address newContract = IContractInterface721(deployer).createContract(_name, _symbol, _uri, address(this));
        require(collectionOccupation[newContract] == false);
        collections.push(newContract);
        collectionOccupation[newContract] = true;

        Ownable(newContract).transferOwnership(msg.sender);
        // return newContract;
    }

    function mintTo(address collectionAddr, address _to, string memory uri) external onlyOwner {
        require(collectionOccupation[collectionAddr] == true);
        IERC721Tradable(collectionAddr).mintTo(_to, uri);
    }

    function transferMoney(address _account, uint256 _amount) external onlyOwner {
        payable(_account).transfer(_amount);
    }

    function getTokenId(address collectionAddr) external view onlyOwner returns (uint256) {
        return IERC721Tradable(collectionAddr).getTokenId();
    }

    function offerSell(
        IERC721 nft,
        uint256 tokenId,
        uint8 method,
        uint256 price,
        uint256 duration
    ) external nonReentrant whenNotPaused _nftAllowed(nft) {
        uint256 startTime;
        uint256 endTime;
        if (method == 0) {
            startTime = 0;
            endTime = 0;
            offers.push(
                Offer({
                    offerId: offers.length,
                    tokenId: tokenId,
                    nft: nft,
                    method: 0,
                    price: price,
                    startTime: 0,
                    endTime: 0,
                    user: msg.sender,
                    acceptUser: address(0),
                    status: STATUS_OPEN
                })
            );
        } else {
            startTime = block.timestamp;
            endTime = startTime + duration;
            offers.push(
                Offer({
                    offerId: offers.length,
                    tokenId: tokenId,
                    nft: nft,
                    method: 1,
                    price: price,
                    startTime: startTime,
                    endTime: endTime,
                    user: msg.sender,
                    acceptUser: address(0),
                    status: STATUS_OPEN
                })
            );
        }

        uint256 id = offers.length - 1;
        emit EvNewOffer(msg.sender, nft, tokenId, method, price, startTime, endTime, STATUS_OPEN, id);

        require(getTokenOwner(id) == msg.sender, 'sender should own the token');
        require(isTokenApproved(id, msg.sender), 'token is not approved');
        _closeSellOfferFor(nft, tokenId);
        tokenSellOffers[nft][tokenId] = id;
    }

    function acceptSell(uint256 id) external payable nonReentrant _offerExists(id) _offerOpen(id) _notBlacklisted(id) whenNotPaused {
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
    }

    function placeBid(uint256 id) external payable nonReentrant _offerExists(id) _offerOpen(id) _notBlacklisted(id) whenNotPaused {
        Offer storage _offer = offers[id];
        require(getTokenOwner(id) == _offer.user, 'token not owned by the seller anymore');
        require(isTokenApproved(id, _offer.user), 'token is not approved');
        require(msg.value >= _offer.price, 'send more money');

        BookInfo[] storage bi = bookInfo[id];
        BookInfo memory newBI = BookInfo(msg.sender, msg.value);
        bi.push(newBI);

        emit PlaceBid(id, msg.sender, msg.value);
    }

    /**
     * @dev this function puts an end to timed-auction sale
     * @param id - index of the sale of timed-auction
     */
    function finalizeAuction(uint256 id) external nonReentrant _offerExists(id) _offerOpen(id) _notBlacklisted(id) whenNotPaused onlyOwner {

        Offer storage _offer = offers[id];
        require(getTokenOwner(id) == _offer.user, 'token not owned by the seller anymore');
        require(isTokenApproved(id, _offer.user), 'token is not approved');

        require(_offer.startTime <= block.timestamp, "sale not started yet");
        // finalize timed-auction anytime by owner of this factory contract.
        require(_offer.method == 1, "bid not for timed-auction sale");

        BookInfo[] storage bi = bookInfo[id];

        // winning to the highest bid
        if (bi.length > 0) {
            uint256 loop;
            uint256 maxPrice = bi[0].price;
            uint256 bookId = 0;

            for (loop = 0; loop < bi.length; loop++) {
                BookInfo memory biItem = bi[loop];
                if (maxPrice < biItem.price) {
                    maxPrice = biItem.price;
                    bookId = loop;
                }
            }
            trade(id, bookId);

            _offer.status = STATUS_ACCEPTED;
            _offer.acceptUser = bi[bookId].user;
            _offer.price = bi[bookId].price;

            emit AuctionResult(
                bi[bookId].user,
                bi[bookId].price,
                id
            );
            _unlinkSellOffer(_offer);
        }
    }

    function cancelSell(uint256 id) external nonReentrant _offerExists(id) _offerOpen(id) _offerOwner(id) whenNotPaused {
        Offer storage _offer = offers[id];
        _offer.status = STATUS_CANCELLED;
        emit EvCancelOffer(id);
        _unlinkSellOffer(_offer);
    }

    function trade(uint256 id, uint256 bookId) internal {
        require(isValidSell(id), "sale is not valid");
        Offer storage _offer = offers[id];
        BookInfo[] storage bi = bookInfo[id];

        uint256 loop;
        for (loop = 0; loop < bi.length; loop++) {
            BookInfo memory biItem = bi[loop];
            if (loop == bookId) {
                _offer.nft.safeTransferFrom(_offer.user, biItem.user, _offer.tokenId);
                _distributePayment(biItem.price, _offer.user);
            } else {
                _transfer(biItem.user, biItem.price);
            }
        }
    }
    // function cancelBuy(uint256 id) external nonReentrant _offerExists(id) _offerOpen(id) _offerOwner(id) whenNotPaused {
    //     Offer storage _offer = offers[id];
    //     _offer.status = STATUS_CANCELLED;
    //     _transfer(msg.sender, _offer.price);
    //     emit EvCancelOffer(id);
    //     _unlinkBuyOffer(_offer);
    // }

    // function _acceptBuy(uint256 id) internal {
    //     // caller is seller
    //     Offer storage _offer = offers[id];
    //     require(msg.value == 0, 'thank you but seller should not pay');

    //     require(getTokenOwner(id) == msg.sender, 'only owner can call');
    //     require(isTokenApproved(id, msg.sender), 'token is not approved');

    //     _offer.nft.safeTransferFrom(msg.sender, _offer.user, _offer.tokenId);
    //     _distributePayment(_offer.price, msg.sender);

    //     _offer.status = STATUS_ACCEPTED;
    //     _offer.acceptUser = msg.sender;
    //     emit EvAcceptOffer(id, msg.sender, _offer.price);
    //     _unlinkBuyOffer(_offer);
    //     _closeSellOfferFor(_offer.nft, _offer.tokenId);

    //     // bookkeeper.recordVolume(_offer.user, _offer.price);
    //     // bookkeeper.recordVolume(msg.sender, _offer.price);
    // }

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

    function _unlinkSellOffer(Offer storage o) internal {
        tokenSellOffers[o.nft][o.tokenId] = 0;
    }

    // helpers

    function getOfferSize() public view returns (uint256) {
        return offers.length;
    }

    function getBidOffersDump(uint256 startIdx, uint256 count)
        external
        view
        returns (Offer[] memory)
    {
        uint256 i;
        uint256 endIdx = startIdx + count;

        uint256 realCount = 0;
        for (i = startIdx; i < endIdx; i++) {
            if (i >= offers.length) break;
            if (offers[i].method != 1 || !isValidSell(i)) continue;

            realCount++;
        }

        Offer[] memory ret = new Offer[](realCount);

        uint256 nPos = 0;
        for (i = startIdx; i < endIdx; i++) {
            if (i >= offers.length) break;

            if (offers[i].method != 1 || !isValidSell(i)) continue;

            ret[nPos] = offers[i];
            nPos++;
        }

        return ret;
    }

    function isValidSell(uint256 id) public view returns (bool) {
        if (id >= offers.length) {
            return false;
        }

        Offer storage _offer = offers[id];
        // try to not throw exception
        return
            _offer.status == STATUS_OPEN &&
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