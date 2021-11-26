pragma solidity ^0.6.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IExerciceSolution is IERC20
{
  function balanceOf(address _owner) public view returns (uint256 balance)
{
  return this.balance
}
function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }
function _approve(address owner,address spender,uint256 amount) internal virtual {
      require(owner != address(0), "ERC20: approve from the zero address");
      require(spender != address(0), "ERC20: approve to the zero address");

      _allowances[owner][spender] = amount;
      emit Approval(owner, spender, amount);
  }

function approve(address spender, uint256 amount) public virtual override returns (bool) {
  _approve(_msgSender(), spender, amount);
  return true;
}

  function symbol() external view returns (string memory);
    
  function getToken() external returns (bool);

  function buyToken() external payable returns (bool);

  function isCustomerWhiteListed(address customerAddress) external returns (bool);

  function customerTierLevel(address customerAddress) external returns (uint256);
}
