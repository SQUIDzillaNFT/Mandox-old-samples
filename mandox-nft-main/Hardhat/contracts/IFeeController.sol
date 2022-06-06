// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;
pragma abicoder v2;

interface IFeeController {
    function rateBase() external view returns (uint256);

    function feeRate(address user) external view returns (uint256);

    function getLevel(address user) external view returns (uint256);
}