const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const { BN, constants, expectEvent, expectRevert } = require('openzeppelin-test-helpers');
const { experimentalAddHardhatNetworkMessageTraceHook } = require("hardhat/config");

describe("Market", function () {
  // it("buyer should pay ETH when buying NFT", async function () {
  //   const [owner, owner1] = await ethers.getSigners();
  //   const provider = waffle.provider;

  //   // let balance1 = await provider.getBalance(owner.address);
  //   // let balance2 = await provider.getBalance(owner1.address);

  //   const Market = await ethers.getContractFactory("Market");
  //   const market = await Market.deploy(owner.address);
  //   await market.deployed();

  //   const TestTokens = await ethers.getContractFactory("NFT");
  //   const testtoken = await TestTokens.deploy(market.address);
  //   await testtoken.deployed();
    

  //   console.log('testtoken address', testtoken.address);

  //   const createTx = await testtoken.connect(owner).createToken('https://ipfs.moralis.io:2053/ipfs/QmW6JZWTEat4h6wKADqeCpRqkNQPHFaTR1CqVq1vfictai/metadata/10.json');
  //   await createTx.wait();
    
  //   // const tokenId = await testtoken.connect(owner).getCurrentTokenId();
  //   // // const tokenId = await tokenIdGetTx.wait();

  //   // console.log('tokenId', tokenId);
  
  //   expect(await testtoken.ownerOf(1)).to.equal(owner.address);
    
  //   const marketApproveTx = await testtoken.connect(owner).setApprovalForAll(market.address, true);
  //   await marketApproveTx.wait();

  //   const amount = 0.02 * 1e18;
  //   const marketOfferTx = await market.connect(owner).offerSell(testtoken.address, 1, 0, String(amount), 0);
  //   await marketOfferTx.wait();

  //   const acceptTx = await market.connect(owner1).acceptSell(1, {value: String(amount)});
  //   await acceptTx.wait();

  //   expect(await testtoken.ownerOf(1)).to.equal(owner1.address);
  // });

  // it ("the timed auction should be work", async function () {
  //   const [owner, owner1, owner2, owner3] = await ethers.getSigners();

  //   const Market = await ethers.getContractFactory("Market");
  //   const market = await Market.deploy(owner.address);
  //   await market.deployed();

  //   const TestTokens = await ethers.getContractFactory("NFT");
  //   const testtoken = await TestTokens.deploy(market.address);
  //   await testtoken.deployed();

  //   const createTx = await testtoken.connect(owner).createToken('https://ipfs.moralis.io:2053/ipfs/QmW6JZWTEat4h6wKADqeCpRqkNQPHFaTR1CqVq1vfictai/metadata/10.json');
  //   await createTx.wait();

  //   expect(await testtoken.ownerOf(1)).to.equal(owner.address);
    
  //   const marketApproveTx = await testtoken.connect(owner).setApprovalForAll(market.address, true);
  //   await marketApproveTx.wait();

  //   const amount = 0.02 * 1e18;
  //   const marketOfferTx = await market.connect(owner).offerSell(testtoken.address, 1, 1, String(amount), 100);
  //   await marketOfferTx.wait();

  //   const bidTx1 = await market.connect(owner1).placeBid(1, {value: String(0.03 * 1e18)});
  //   await bidTx1.wait();

  //   const bidTx2 = await market.connect(owner2).placeBid(1, {value: String(0.04 * 1e18)});
  //   await bidTx2.wait();

  //   const bidTx3 = await market.connect(owner3).placeBid(1, {value: String(0.05 * 1e18)});
  //   await bidTx3.wait();

  //   const finalizeAuctionTx = await market.connect(owner).finalizeAuction(1);
  //   await finalizeAuctionTx.wait();

  // });

  // it ("it should be able to get bid offers with dump", async function () {
  //   const [owner, owner1, owner2, owner3, owner4, owner5, owner6, owner7] = await ethers.getSigners();

  //   const Market = await ethers.getContractFactory("Market");
  //   const market = await Market.deploy(owner.address);
  //   await market.deployed();

  //   const TestTokens = await ethers.getContractFactory("NFT");
  //   const testtoken = await TestTokens.deploy(market.address);
  //   await testtoken.deployed();

  //   const createTx = await testtoken.connect(owner).createToken('https://ipfs.moralis.io:2053/ipfs/QmW6JZWTEat4h6wKADqeCpRqkNQPHFaTR1CqVq1vfictai/metadata/10.json');
  //   await createTx.wait();

  //   expect(await testtoken.ownerOf(1)).to.equal(owner.address);
    
  //   const marketApproveTx = await testtoken.connect(owner).setApprovalForAll(market.address, true);
  //   await marketApproveTx.wait();

  //   const amount = 0.02 * 1e18;
  //   const marketOfferTx = await market.connect(owner).offerSell(testtoken.address, 1, 1, String(amount), 100);
  //   await marketOfferTx.wait();

  //   const bidTx1 = await market.connect(owner1).placeBid(1, {value: String(0.03 * 1e18)});
  //   await bidTx1.wait();

  //   const bidTx2 = await market.connect(owner2).placeBid(1, {value: String(0.04 * 1e18)});
  //   await bidTx2.wait();

  //   const bidTx3 = await market.connect(owner3).placeBid(1, {value: String(0.12 * 1e18)});
  //   await bidTx3.wait();

  //   const bidTx4 = await market.connect(owner4).placeBid(1, {value: String(0.06 * 1e18)});
  //   await bidTx4.wait();

  //   const bidTx5 = await market.connect(owner5).placeBid(1, {value: String(0.07 * 1e18)});
  //   await bidTx5.wait();

  //   const bidTx6 = await market.connect(owner6).placeBid(1, {value: String(0.10 * 1e18)});
  //   await bidTx6.wait();

  //   const bidTx7 = await market.connect(owner7).placeBid(1, {value: String(0.09 * 1e18)});
  //   await bidTx7.wait();

  //   const offers = await market.connect(owner).getBidOffersDump(0, 3);

  //   console.log('offers', offers);
  //   const finalizeAuctionTx = await market.connect(owner).finalizeAuction(1);
  //   await finalizeAuctionTx.wait();

  //   expect(await testtoken.ownerOf(1)).to.equal(owner3.address);

  // });

  it ("collection creation should be work", async function () {
    const [owner, owner1] = await ethers.getSigners();
    console.log(owner1.address);

    const Market = await ethers.getContractFactory("Market");
    const market = await Market.deploy(owner.address);
    await market.deployed();

    const ContractInterface721 = await ethers.getContractFactory("ContractInterface721");
    const contractInterface = await ContractInterface721.deploy();
    await contractInterface.deployed();
    
    const updateDeployerTx = await market.updateDeployer(contractInterface.address);
    await updateDeployerTx.wait();

    const collectionCreationTx = await market.connect(owner1).createCollection("AAA_item1", "Symbol", "https://stc.com")
    await collectionCreationTx.wait();
    
    const collection = await market.getRecentCollection();
    
    console.log('newContractAddr', collection);

    const mintTx = await market.mintTo(collection, owner.address, "https://stc.com/1.json");
    await mintTx.wait();

    const tokenID = await market.getTokenId(collection);
    // await getTokenIdTx.wait();
    console.log(tokenID);

    // const mintTx = await market.mintTo(collections[0], owner.address, "https://stc.com/1.json");
    // await mintTx.wait();

    const testToken = await ethers.getContractAt("@openzeppelin/contracts/token/ERC721/IERC721.sol:IERC721", collection);

    expect(await testToken.ownerOf(1)).to.equal(owner.address);

    const transferTx = await testToken.transferFrom(owner.address, owner1.address, 1);
    await transferTx.wait();

    expect(await testToken.ownerOf(1)).to.equal(owner1.address);

  });
});