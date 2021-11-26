pragma solidity ^0.6.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Tkn is ERC20 {
    constructor (string memory name, string memory symbol, uint256 totalSupply ) public ERC20(name,symbol)
    {
        _mint(msg.sender,totalSupply);
    }
    function getToken() public returns(bool) {
        _mint(msg.sender,1);
        require (isCustomerWhiteListed(msg.sender) == true);
        
        return true;
    }
    function isCustomerWhiteListed(address customerAddress) public returns (bool)
    {
        return true;
    }
    function customerTierLevel(address ad) public returns(uint256) {
        return 2;
    }
    function buyToken()public payable returns(bool){
        require(customerTierLevel(msg.sender)==2);
        _mint(msg.sender,msg.value*2);
        return true;
    }
    

}