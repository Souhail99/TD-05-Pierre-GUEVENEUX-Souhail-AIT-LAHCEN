const Str = require('@supercharge/strings')
// const BigNumber = require('bignumber.js');

var TDErc20 = artifacts.require("ERC20TD.sol");
var evaluator = artifacts.require("Evaluator.sol");


module.exports = (deployer, network, accounts) => {
    deployer.then(async () => {
        //await deployTDToken(deployer, network, accounts);
        
        //await deployEvaluator(deployer, network, accounts); 
        //await getpoints(deployer, network, accounts)
        //await testexs(deployer, network, accounts);
       // await setPermissionsAndRandomValues(deployer, network, accounts); 
       // await deployRecap(deployer, network, accounts); 
    });
};

async function deployTDToken(deployer, network, accounts) {
	TDToken = await TDErc20.new("_U8Jb","_U8Jb",web3.utils.toBN("739841583000000000000000000"))
   
}

async function deployEvaluator(deployer, network, accounts) {
	Evaluator = await evaluator.new(TDToken.address)
}

async function setPermissionsAndRandomValues(deployer, network, accounts) {
	await TDToken.setTeacher(Evaluator.address, true)
	randomSupplies = []
	randomTickers = []
	for (i = 0; i < 20; i++)
		{
		randomSupplies.push(Math.floor(Math.random()*1000000000))
		randomTickers.push(Str.random(5))
		// randomTickers.push(web3.utils.utf8ToBytes(Str.random(5)))
		// randomTickers.push(Str.random(5))
		}

	console.log(randomTickers)
	console.log(randomSupplies)
	// console.log(web3.utils)
	// console.log(type(Str.random(5)0)
	await Evaluator.setRandomTickersAndSupply(randomSupplies, randomTickers);
}

async function deployRecap(deployer, network, accounts) {
	console.log("TDToken " + TDToken.address)
	console.log("Evaluator " + Evaluator.address)
}


async function testexs(deployer, network, accounts){
    assignedTicker = await Evaluator.assignedTicker(accounts[0]);
    console.log(assignedTicker)
    sup = new web3.utils.BN(await Evaluator.assignedSupply(accounts[0]));
    console.log(sup)
    ctrt = await TDErc20.new(assignedTicker,assignedTicker,sup.toString(),{from:accounts[0]});
    getBalance= await TDToken.balanceOf(accounts[0]) 
    console.log("balance",getBalance.toString())
}
async function getpoints(deployer, network, accounts){
    
await Evaluator.ex2_testErc20TickerAndSupply()
}