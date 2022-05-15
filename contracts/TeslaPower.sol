// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract TeslaPower {

  uint256 private horsePower;

  event horsePowerChanged(uint256 newValue);

  function setHorsePower(uint256 newHorsePower) public {
    horsePower = newHorsePower;
    emit horsePowerChanged(newHorsePower);
  }

  function retrieveHorsePower() public view returns(uint256) {
    return horsePower;
  }
}