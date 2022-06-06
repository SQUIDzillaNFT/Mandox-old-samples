// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;
pragma abicoder v2;

import '@openzeppelin/contracts/access/AccessControl.sol';
import './IBookkeeper.sol';

contract Bookkeeper is AccessControl, IBookkeeper {
    bytes32 public constant RECORDER_ROLE = keccak256('RECORDER_ROLE');
    uint256 public constant DAY_IN_SECONDS = 24 * 60 * 60;

    mapping(address => mapping(uint256 => uint256)) userVolumes; // user => date => volume sum

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }


    modifier onlyRecorder() {
        require(hasRole(RECORDER_ROLE, msg.sender), 'RECORDER only');
        _;
    }

    function getDate() public view returns (uint256) {
        return block.timestamp / DAY_IN_SECONDS;
    }

    function getVolume(address user, uint256 date) external view override returns (uint256) {
        return userVolumes[user][date];
    }

    function recordVolume(address user, uint256 amount) external override onlyRecorder {
        uint256 date = getDate();
        userVolumes[user][date] += amount;
    }
}