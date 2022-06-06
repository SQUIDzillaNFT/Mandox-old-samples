const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const { BN, constants, expectEvent, expectRevert } = require('openzeppelin-test-helpers');
const { experimentalAddHardhatNetworkMessageTraceHook } = require("hardhat/config");

describe("Market", function () {
  it("buyer should pay ETH when buying NFT", async function () {
    const [owner, owner1] = await ethers.getSigners();
    const provider = waffle.provider;

    // let balance1 = await provider.getBalance(owner.address);
    // let balance2 = await provider.getBalance(owner1.address);

    const Market = await ethers.getContractFactory("Market");
    const market = await Market.deploy(owner.address);
    await market.deployed();

    const TestTokens = await ethers.getContractFactory("NFT");
    const testtoken = await TestTokens.deploy(market.address);
    await testtoken.deployed();

    console.log('testtoken address', testtoken.address);

    const createTx = await testtoken.connect(owner).createToken('https://ipfs.moralis.io:2053/ipfs/QmW6JZWTEat4h6wKADqeCpRqkNQPHFaTR1CqVq1vfictai/metadata/10.json');
    await createTx.wait();

    console.log('owner of NFT', await testtoken.ownerOf(1));
    // expect(testtoken.ownerOf(1)).to.equal(owner.address);
    
    const marketApproveTx = await testtoken.connect(owner).setApprovalForAll(market.address, true);
    await marketApproveTx.wait();

    const amount = 4 * 1e18;
    const marketOfferTx = await market.connect(owner).offer(1, testtoken.address, 1, String(amount));
    await marketOfferTx.wait();

    const acceptTx = await market.connect(owner1).accept(1, {value: String(amount)});
    await acceptTx.wait();

    expect(await testtoken.ownerOf(1)).to.equal(owner1.address);
  });
});
