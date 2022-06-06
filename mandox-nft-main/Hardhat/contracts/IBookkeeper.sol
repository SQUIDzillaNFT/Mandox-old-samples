// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;
pragma abicoder v2;

interface IBookkeeper {
    // date = days since unix epoch
    function getVolume(address user, uint256 date) external view returns (uint256);

    function recordVolume(address user, uint256 amount) external;
}