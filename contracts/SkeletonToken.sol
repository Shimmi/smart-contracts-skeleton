pragma solidity ^0.4.18;


import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/token/StandardToken.sol";


/**
 * @title Skeleton Token
 * @dev An ERC20 token with some Zeppelin sugar.
 */
contract SkeletonToken is StandardToken {
    using SafeMath for uint256;

    /* solium-disable-next-line */
    string public constant name = "Skeleton Token";
    /* solium-disable-next-line */
    string public constant symbol = "SKT";
    /* solium-disable-next-line */
    uint256 public constant decimals = 18;
    /* solium-disable-next-line */
    uint256 public constant cap = 100000000 * (10 ** decimals);
}
