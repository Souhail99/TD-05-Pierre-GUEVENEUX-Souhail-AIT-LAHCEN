contract('ERC20TD', function ([ creator, other ]) {

    const NAME = 'SimpleToken';
    const SYMBOL = 'SIM';
    const TOTAL_SUPPLY = new BN('10000000000000000000000');
  
    beforeEach(async function () {
      this.token = await SimpleToken.new(NAME, SYMBOL, TOTAL_SUPPLY, { from: creator });
    });
  
    it('retrieve returns a value previously stored', async function () {
      // Use large integer comparisons
      expect(await this.token.totalSupply()).to.be.bignumber.equal(TOTAL_SUPPLY);
    });
  
    it('has a name', async function () {
      expect(await this.token.name()).to.be.equal(NAME);
    });
  
    it('has a symbol', async function () {
      expect(await this.token.symbol()).to.be.equal(SYMBOL);
    });
  
    it('assigns the initial total supply to the creator', async function () {
      expect(await this.token.balanceOf(creator)).to.be.bignumber.equal(TOTAL_SUPPLY);
    });
  });