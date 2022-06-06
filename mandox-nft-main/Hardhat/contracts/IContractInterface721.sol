// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IContractInterface721 {
    /**
     * event when an ERC721 contract is created
     */
    event CreatedERC721TradableContract(address indexed factory, address indexed newContract);

    /**
     * this function is called to create an ERC721 contract.
     */
    function createContract(
        string memory _name,
        string memory _symbol,
        string memory _uri,
        address factory
    ) external returns (address);

}
