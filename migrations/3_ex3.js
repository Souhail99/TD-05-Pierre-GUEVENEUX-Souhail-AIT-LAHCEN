const ERC20Token = artifacts.require('ERC20Tkn.sol');
const Str = require('@supercharge/strings')
// const BigNumber = require('bignumber.js');

var TDErc20 = artifacts.require("ERC20TD.sol");
var evaluator = artifacts.require("Evaluator.sol");
module.exports = async function (deployer) {
    await deployer.deploy(ERC20Token,"VK0nz","VK0nz",web3.utils.toBN("473268855000000000000000000"));
};


async function deployEvaluator(deployer, network, accounts) {
	Evaluator = await evaluator.new(ERC20Token.address)
}
async function testex6(deployer, network, accounts){
await Evaluator.ex6_testAllowListing()

}