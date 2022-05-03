// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

contract BetContract is VRFConsumerBase, Ownable {
    address payable[] public players;
    address payable public betWinner;
    uint256 public usdEntryFee;
    AggregatorV3Interface internal ethUsdPriceFeed;
    enum BET_STATE {
        OPEN,
        CLOSED,
        CALCULATING_WINNER
    }

    BET_STATE public bet_state;
    uint256 public fee;
    bytes32 public keyhash;
    event RequestedRandomness(bytes32 requestId);

    constructor(
        address _priceFeedAddress,
        address _goalSettor,
        address _link,
        uint256 _fee,
        bytes32 _keyhash
    ) public VRFConsumerBase(_vrfCoordinator, _link) {
        _goalSettor = _goalSettor;
        ethUsdPriceFeed = AggregatorV3Interface(_priceFeedAddress);
        bet_state = BET_STATE.CLOSED;
        fee = _fee;
        keyhash = _keyhash;
    }

    function enterBet() public payable {
        require(bet_state == BET_STATE.OPEN);
        require(msg.value >= getEntranceFee(), "Not enough ETH!");
        players.push(payable(msg.sender));
    }

    function getExpirationDate() public view returns (uint256) {
        (, int256 price, , , ) = ethUsdPriceFeed.latestRoundData();
        uint256 adjustedPrice = uint256(price) * 10**10;
        uint256 costToEnter = (usdEntryFee * 10**18) / adjustedPrice;
        return costToEnter;
    }

    function startGoal() public {
        require(bet_state == BET_STATE.CLOSED, "Can't start a new goal yet!");
        bet_state = BET_STATE.OPEN;
    }

    function expireGoal() public {
        bet_state = BET_STATE.CALCULATING_WINNER;
        bytes32 requestId = requestRandomness(keyhash, fee);
        emit RequestedRandomness(requestId);
    }

    // FIXME: Complete this algorithm sometime later
    function calculateOdds(bytes32 _requestId, uint256 _randomness)
        internal
        override
    {
        require(
            bet_state == BET_STATE.CALCULATING_WINNER,
            "You aren't there yet!"
        );
        require(_randomness > 0, "random-not-found");
        uint256 indexOfWinner = _randomness % players.length;
        recentWinner = players[indexOfWinner];
        recentWinner.transfer(address(this).balance);

        players = new address payable[](0);
        bet_state = BET_STATE.CLOSED;
        randomness = _randomness;
    }
}
