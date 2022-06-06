import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import {useChain, useMoralis, useMoralisQuery, useWeb3ExecuteFunction} from "react-moralis";
import {dummyNftData} from "../../Utils/dummyData";
import NftCard from "../../Component/NftCard";
import Countdown from 'react-countdown';

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <span></span>;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};

function Home({setNFT, setBuyType, setCreatedNFT}) {

  const navigate = useNavigate();
  const chainId = "0x4";
  const fallbackImg =
    "data:image/png;base64,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";
  const {Moralis, account} = useMoralis();
  const {data, error, isLoading} = useMoralisQuery("EvNewOffer");
  const fetchMarketItems = JSON.parse(
    JSON.stringify(data, [
      "objectId",
      "createdAt",
      "user",
      "nft",
      "tokenId",
      "method",
      "price",
      "startTime",
      "endTime",
      "status",
      "uid",
      "confirmed",
    ])
  );
  const [NFTCollections, setNFTCollections] = useState([]);
  const [AllCollections, setAllCollections] = useState([]);
  const [auctionNFTs, setAuctionNFTs] = useState([]);
  const [topNFTs, setTopNFTs] = useState([]);

  const isCreatedNFT = (nft) => {
    return nft.hasOwnProperty('category');
  }

  const handleCollectionClick = (collection) => {
    if (collection.created == 0) {
      navigate(`/collection/${collection.addrs}/0`)
    } else {
      navigate(`/collection/${collection.id}/1`);
    }
  }

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection/all`)
    .then(res => {
      let collections = res.data.collections.map((item) => {
        return {
          id: item._id,
          image: `/${item.image}`,
          name: item.title,
          addrs: item.collectionAddr,
          created: item.created,
          walletAddr: item.walletAddr
        }
      });
      setNFTCollections(collections);
    });
  }, []);

  useEffect(() => {
    async function fetchAPIData() {
      if (!!NFTCollections) {
        let NFTs = []
        for (const collection of NFTCollections) {
          if (collection.addrs == '' || collection.created == 1) {
            try {
              const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/items/wallet`, {
                params: {
                  walletAddr: collection.walletAddr,
                }
              });
              collection.itemCount = res.data.length;
            } catch(ex) {
              console.log(ex);
            }
          } else {
            const options = {address: collection.addrs, chain: chainId };
            try {
              const result = await Moralis.Web3API.token.getAllTokenIds(options);
              console.log('getAllTokenIds result', result);
              for (let i = 0; i < result.result.length; i++) {
                result.result[i].metadata = JSON.parse(result.result[i].metadata);
                if (result.result[i].metadata) {
                  result.result[i].metadata['image'] = result.result[i].metadata['image'].replace('ipfs://', 'https://ipfs.io/ipfs/');
                }
              }
              collection.itemCount = result.result.length;
              NFTs = [...NFTs, ...result.result];
            } catch (e) {
              console.log(e);
            }
          }
        }

        setAllCollections(NFTCollections);

        // for (let nft of NFTs) {
        //   if (!nft.metadata) {
        //     const options = {
        //       address: nft.token_address,
        //       token_id: nft.token_id,
        //       flag: "uri",
        //       chain: chainId
        //     };
        //     const result = await Moralis.Web3API.token.reSyncMetadata(options);
        //     const options1 = {
        //       address: nft.token_address,
        //       token_id: nft.token_id,
        //       chain: chainId
        //     };
        //     const tokenIdMetadata = await Moralis.Web3API.token.getTokenIdMetadata(options1);
        //     if (tokenIdMetadata.token_uri) {
        //       await fetch((tokenIdMetadata.token_uri))
        //         .then((response) => response.json())
        //         .then((data) => {
        //           nft.imagePath = data.image.replace('ipfs://', 'https://ipfs.io/ipfs/');
        //         })
        //     } else {
        //       nft.imagePath = fallbackImg;
        //     }
        //   } else {
        //     nft.imagePath = JSON.parse(nft.metadata).image.replace('ipfs://', 'https://ipfs.io/ipfs/');
        //   }
        // }

        let _auctionNFTs, _topNFTs;

        _auctionNFTs = NFTs.filter(nft => {
          let marketItem = getMarketItem(nft);
          if (marketItem) {
            if (marketItem.method == 1) console.log(marketItem.endTime * 1000, Date.now());
            return marketItem.method == 1 && marketItem.status == 0 && parseInt(marketItem.endTime) * 1000 > Date.now();
          } else {
            return false;
          }
        });

        _topNFTs = NFTs.filter(nft => {
          let marketItem = getMarketItem(nft);
          if (marketItem) {
            return marketItem.method == 0 && marketItem.status == 0;
          } else {
            return false;
          }
        })

        try {
          const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/items/all`);
          for (const item of res.data) {
            if (item.offerMethod == 1 && item.status == 0 && item.pending == 0) {
              console.log('item', item);
              _auctionNFTs.push(item);
            } else if (item.offerMethod == 0 && item.status == 0 && item.pending == 0) {
              _topNFTs.push(item);
            }
          }
          console.log(res);
        } catch(ex) {
          console.log(ex);
        }

        // if (_auctionNFTs.length > 8) _auctionNFTs.length = 8;
        if (_auctionNFTs.length > 4) _auctionNFTs.length = 4;

        // if (_topNFTs.length > 8) _topNFTs.length = 8;
        if (_topNFTs.length > 4) _topNFTs.length = 4;

        console.log('_auctionNFTs', _auctionNFTs);
        setAuctionNFTs(_auctionNFTs);
        setTopNFTs(_topNFTs);
      }
    }
    if (!isLoading && fetchMarketItems.length > 0) fetchAPIData();
  }, [NFTCollections, fetchMarketItems.length]);

  const handleBuyClick = (nft) => {
    setNFT(nft);
    if (isCreatedNFT(nft)) {
      setBuyType(nft.offerMethod);
      setCreatedNFT(1); 
    }
    else {
      if (getMarketItem(nft) && getMarketItem(nft).method == 0) setBuyType(0);
      else if (getMarketItem(nft) && getMarketItem(nft).method == 1) setBuyType(1);
      setCreatedNFT(0);
    }
    navigate("/buy-detail");
  };

  const getMarketItem = (nft) => {
    const result = fetchMarketItems?.find(
      (e) =>
        e.nft.toLowerCase() === nft?.token_address.toLowerCase() &&
        e.tokenId === nft?.token_id &&
        e.confirmed === true
    );
    return result;
  };

  return (
    <div>
      <section className="slider-area">
        <div className="slider-inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="slider-information">
                  <h1>NFT Market - Explore, Buy & Sell Digital Items</h1>
                  <div className="em_bar">
                    <div className="em_bar_bg"></div>
                  </div>
                  <p className="theme-description">Discover unique NFTs (Digital collectibles) list your items to sell,
                    buy other unique items like visual arts, games, video & music.</p>
                  <div className="slider-btn">
                    <Link className="theme-btn" to="/browse">Discover NFTs</Link>
                    <Link className="theme-btn sl-sale-btn" to="/browse">Sell NFTs</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="slider-images">
                  <div className="slider-screen">
                    <img src="assets/images/slider/screen6.png" alt=""/>
                  </div>
                  <div className="slider-art-screen">
                    <div className="slider-item">
                      <img src="assets/images/mandox_0.jpg" alt=""/>
                    </div>
                    <div className="slider-item slider-item-one">
                      <img src="assets/images/mandox_1.jpg" alt=""/>
                    </div>
                    <div className="slider-item slider-item-two">
                      <img src="assets/images/mandox_2.jpg" alt=""/>
                    </div>
                    <div className="slider-item slider-item-three">
                      <img src="assets/images/mandox_3.jpg" alt=""/>
                    </div>
                    <div className="slider-item slider-item-four">
                      <img src="assets/images/mandox_4.jpg" alt=""/>
                    </div>
                  </div>
                  <img src="assets/images/slider/computer.png" alt=""/>
                </div>
                <div className="slider-images slider-responsive-screen">
                  <img src="assets/images/slide-image.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="hot-items-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                <h6>NFTs On Auction</h6>
                <h2 data-watermark="Items">Live auctions</h2>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <p className="subtitle">Explore the newly listed remarkable NFTs on NFT Marketplace, choose the best
                  one, and place your bid to purchase it.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {
              auctionNFTs.map((nft, index) => {
                if (!isCreatedNFT(nft)) {
                  let marketItem = getMarketItem(nft);
                  return (
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                      <div className="nft-items">
                        <div className="nft-items-media">
                          <a><img
                            src={nft.metadata.image}
                            alt=""/></a>
                        </div>
                        <div className="nft-items-authore clearfix">
                          <div className="hot-bids-athore clearfix">
                            <a type="button" className="btn btn-lg" data-toggle="tooltip"
                               data-placement="top"
                               title="Collection : Onem"><img src="assets/images/user1.png" alt=""/></a>
                            <a type="button" className="btn btn-lg" data-toggle="tooltip"
                               data-placement="top"
                               title="Owner: Tocaya"><img src="assets/images/user2.png" alt=""/></a>
                            <a type="button" className="btn btn-lg" data-toggle="tooltip"
                               data-placement="top"
                               title="Creator: Georgijevic"><img src="assets/images/user3.png" alt=""/></a>
                          </div>
                          <div className="nft-items-like">
                            <span><i className="far fa-heart"></i>30</span>
                          </div>
                        </div>
                        <div className="nft-items-info">
                          <h3 className="theme-title"><a>{nft.name}</a></h3>
                            <h4>{marketItem.price / (1e18)} ETH</h4>
                            <div className="nft-highest-bid">
                              <a onClick={() => handleBuyClick(nft)}>Place a bid</a>
                            </div>
                            <div className="nft-views">
                              <Countdown
                                date={parseInt(marketItem.endTime) * 1000}
                                renderer={renderer}
                              />
                            </div>
                        </div>
                      </div>
                    </div>
                  )
                } else if (nft.pending === 0 && nft.status === 0) {
                  return (
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                      <div className="nft-items">
                        <div className="nft-items-media">
                          <a><img
                            src={'/' + nft.image}
                            alt=""/></a>
                        </div>
                        <div className="nft-items-authore clearfix">
                          <div className="hot-bids-athore clearfix">
                            <a type="button" className="btn btn-lg" data-toggle="tooltip"
                               data-placement="top"
                               title="Collection : Onem"><img src="assets/images/user1.png" alt=""/></a>
                            <a type="button" className="btn btn-lg" data-toggle="tooltip"
                               data-placement="top"
                               title="Owner: Tocaya"><img src="assets/images/user2.png" alt=""/></a>
                            <a type="button" className="btn btn-lg" data-toggle="tooltip"
                               data-placement="top"
                               title="Creator: Georgijevic"><img src="assets/images/user3.png" alt=""/></a>
                          </div>
                          <div className="nft-items-like">
                            <span><i className="far fa-heart"></i>30</span>
                          </div>
                        </div>
                        <div className="nft-items-info">
                          <h3 className="theme-title"><a>{nft.title}</a></h3>
                          <h4>{nft.price.$numberDecimal} ETH</h4>
                          <div className="nft-highest-bid">
                            <a onClick={() => handleBuyClick(nft)} >Place a bid</a>
                          </div>
                          <div className="nft-views">
                            <Countdown
                              date={parseInt(nft.timeStamp * 1000)}
                              renderer={renderer}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>

        </div>
      </section>
      <section className="earn-area earn-about-area page-background">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="earn-main-box">
                <div className="earn-images earn-about-images">
                  <img src="assets/images/about.png" alt=""/>
                  <div className="about-eth-coin">
                    <img src="assets/images/eth-coin.png" alt=""/>
                  </div>
                </div>
                <div className="earn-images earn-about-responsive">
                  <img src="assets/images/about-responsive.png" alt=""/>
                </div>
                <div className="earn-info">
                  <h6>About</h6>
                  <h2>Marketplace - Discover NFTs</h2>
                  <p className="theme-description">Unique NFTs - Digital Collectibles - may be found on this fresh new
                    futuristic NFT platform.</p>
                  <div className="em_bar">
                    <div className="em_bar_bg"></div>
                  </div>
                  <div className="singel-about-box">
                    <div className="singel-about-box-item clearfix">
                      <div className="singel-about-box-icon">
                        <img src="assets/images/nft/nft_governance.png" alt="NFT-Governance"/>
                      </div>
                      <div className="singel-about-box-info">
                        <h3 className="theme-title">Explore NFTs</h3>
                        <p className="theme-description">NFTs include digital items such as visual arts, music, games,
                          and video that are very unique.</p>
                      </div>
                    </div>
                    <div className="singel-about-box-item clearfix">
                      <div className="singel-about-box-icon">
                        <img src="assets/images/nft/super_nft.png" alt="Super-NFT"/>
                      </div>
                      <div className="singel-about-box-info">
                        <h3 className="theme-title">Buy & Sell NFTs</h3>
                        <p className="theme-description">Sell your NFTs (digital collectibles) and earn in crypto, also
                          buy NFTs with smart contracts. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="most-viewed-items-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                <h6>Items</h6>
                <h2 data-watermark="Items">Items Viewed The Most</h2>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <p className="subtitle">You can see the best and most viewed items; from all categories, we have a wide
                  range of items available on our marketplace.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {
              topNFTs.map((nft, index) => {
                if (!isCreatedNFT(nft)) {
                  let marketItem = getMarketItem(nft);
                  return (
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                      <div className="nft-items">
                        <div className="nft-items-media">
                          <a><img
                            src={nft.metadata.image}
                            alt=""/></a>
                        </div>
                        <div className="nft-items-authore clearfix">
                          <div className="hot-bids-athore clearfix">
                            <a type="button" className="btn btn-lg" data-toggle="tooltip"
                               data-placement="top"
                               title="Collection : Onem"><img src="assets/images/user1.png" alt=""/></a>
                            <a type="button" className="btn btn-lg" data-toggle="tooltip"
                               data-placement="top"
                               title="Owner: Tocaya"><img src="assets/images/user2.png" alt=""/></a>
                            <a type="button" className="btn btn-lg" data-toggle="tooltip"
                               data-placement="top"
                               title="Creator: Georgijevic"><img src="assets/images/user3.png" alt=""/></a>
                          </div>
                          <div className="nft-items-like">
                            <span><i className="far fa-heart"></i>30</span>
                          </div>
                        </div>
                        <div className="nft-items-info">
                          <h3 className="theme-title"><a>{nft.name}</a></h3>
                            <h4>{marketItem.price / (1e18)} ETH</h4>
                            <div className="nft-highest-bid">
                              <a onClick={() => handleBuyClick(nft)}>Buy</a>
                            </div>
                        </div>
                      </div>
                    </div>
                  )
                } else if (nft.pending === 0 && nft.status === 0) {
                  return (
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                      <div className="nft-items">
                        <div className="nft-items-media">
                          <a><img
                            src={'/' + nft.image}
                            alt=""/></a>
                        </div>
                        <div className="nft-items-authore clearfix">
                          <div className="hot-bids-athore clearfix">
                            <a type="button" className="btn btn-lg" data-toggle="tooltip"
                               data-placement="top"
                               title="Collection : Onem"><img src="assets/images/user1.png" alt=""/></a>
                            <a type="button" className="btn btn-lg" data-toggle="tooltip"
                               data-placement="top"
                               title="Owner: Tocaya"><img src="assets/images/user2.png" alt=""/></a>
                            <a type="button" className="btn btn-lg" data-toggle="tooltip"
                               data-placement="top"
                               title="Creator: Georgijevic"><img src="assets/images/user3.png" alt=""/></a>
                          </div>
                          <div className="nft-items-like">
                            <span><i className="far fa-heart"></i>30</span>
                          </div>
                        </div>
                        <div className="nft-items-info">
                          <h3 className="theme-title"><a>{nft.title}</a></h3>
                            <h4>{nft.price.$numberDecimal} ETH</h4>
                            <div className="nft-highest-bid">
                              <a onClick={() => handleBuyClick(nft)}>Buy</a>
                            </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </section>
      <section className="earn-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="earn-main-box">
                <div className="earn-info">
                  <h6>Platform For Artists</h6>
                  <h2>Digital Arts on NFT Platform</h2>
                  <div className="em_bar">
                    <div className="em_bar_bg"></div>
                  </div>
                  <p className="theme-description">Join the all-new NFTs marketplace if you're a musician, videographer,
                    or visual artist.</p>
                  <div className="singel-about-box">
                    <div className="singel-about-box-item clearfix">
                      <div className="singel-about-box-icon">
                        <img src="assets/images/nft/nft_governance.png" alt="NFT-Governance"/>
                      </div>
                      <div className="singel-about-box-info">
                        <h3 className="theme-title">List Your Items</h3>
                        <p className="theme-description">You can list your NFTs, either at a fixed price or in an
                          auction, using a streamlined process.</p>
                      </div>
                    </div>
                    <div className="singel-about-box-item clearfix">
                      <div className="singel-about-box-icon">
                        <img src="assets/images/nft/super_nft.png" alt="Super-NFT"/>
                      </div>
                      <div className="singel-about-box-info">
                        <h3 className="theme-title">Create Your store</h3>
                        <p className="theme-description">You can use this site to not only list your NFTs, but also to
                          establish your own store and brand.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="earn-images platform-artist-images">
                  <div className="platform-artist-left">
                    <div className="platform-artist-box">
                      <img src="assets/images/platform-artist/screen1.png" alt=""/>
                    </div>
                    <div className="platform-artist-box">
                      <img src="assets/images/platform-artist/screen2.png" alt=""/>
                    </div>
                    <div className="platform-artist-box">
                      <img src="assets/images/platform-artist/screen3.png" alt=""/>
                    </div>
                    <div className="platform-artist-box">
                      <img src="assets/images/platform-artist/screen4.png" alt=""/>
                    </div>
                  </div>
                  <div className="platform-artist-circle">
                    <img src="assets/images/platform-artist/round.png" alt=""/>
                  </div>
                  <img className="platform-artist-img" src="assets/images/platform-artist/artist.png" alt=""/>
                </div>
                <div className="earn-images">
                  <img src="assets/images/artist-responsive.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="earn-area pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="earn-main-box">
                <div className="earn-images list-sell-box">
                  <div className="list-sell-top-img">
                    <img src="assets/images/list-and-sell/screen-top.png" alt=""/>
                  </div>
                  <div className="list-sell-token">
                    <img src="assets/images/list-and-sell/token.png" alt=""/>
                  </div>
                  <img className="list-sell-img" src="assets/images/list-and-sell/screen.png" alt=""/>
                </div>
                <div className="list-earn-images-responsive">
                  <img src="assets/images/earn-listing-img.png" alt=""/>
                </div>
                <div className="earn-info">
                  <h2>Begin listing and selling</h2>
                  <div className="em_bar">
                    <div className="em_bar_bg"></div>
                  </div>
                  <p className="theme-description">You are simply one click away from listing your NFT on our site and
                    selling them for a lot of money.</p>
                  <p className="theme-description">Put your NFTS up for auction or for sale at a predetermined price.
                    Acquire feedback from viewers, purchase NFTs, collect one-of-a-kind things, and resell them.</p>
                  <div className="earn-btn">
                    <a className="theme-btn" href="/browse">List Your NFT <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="top-selling-store page-background">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                <h6>Items</h6>
                <h2 data-watermark="Items">Best Selling Items</h2>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <p className="subtitle">You can see best-selling items; from all categories, buy from the wide range of
                  items available on our marketplace.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {
              AllCollections.map((collection, index) => {
                return (
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 top-selling-width">
                    <div className="item-group" onClick={() => handleCollectionClick(collection)}>
                      <div className="item-group-content">
                        <div className="item-group-avtar">
                          <img src={`${process.env.REACT_APP_SERVER_URL}/api/${collection.image}`} alt="Catagory-domain-art-piece"/>
                        </div>
                        <div className="selling-item-info">
                          <h3 className="theme-title"><a>{collection.title}</a></h3>
                          <p className="theme-description">{collection.itemCount} items</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-btn text-center" style={{marginTop: 50}}>
                <button className="theme-btn" onClick={() => navigate('/collections')}>Show More <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mintable-guides-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                <h6>Guides</h6>
                <h2 data-watermark="Guides">Guides For NFT Marketplace</h2>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <p className="subtitle">Get to know how to use NFT – Marketplace, how to sell or buy, and how to create
                  your store on our platform.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="mintable-guides-box text-center">
                <div className="mintable-guides-media">
                  <img src="assets/images/mintale1.png" alt="Why-NFT"/>
                </div>
                <div className="mintable-guides-info">
                  <h3 className="theme-title">What Are NFTs?</h3>
                  <p className="theme-description">NFTs (non-fungible tokens) that exist on the blockchain as
                    cryptocurrencies, and each NFTs has its own token value.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="mintable-guides-box text-center">
                <div className="mintable-guides-media">
                  <img src="assets/images/mintale3.png" alt="Sell-Items-NFT"/>
                </div>
                <div className="mintable-guides-info">
                  <h3 className="theme-title">Method To List Items?</h3>
                  <p className="theme-description">To list your NFT, just establish an account, link your wallet, and
                    provide the basic information about the item.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="mintable-guides-box text-center">
                <div className="mintable-guides-media">
                  <img src="assets/images/mintale2.png" alt="Digital-Store-NFT"/>
                </div>
                <div className="mintable-guides-info">
                  <h3 className="theme-title">Method Of Selling?</h3>
                  <p className="theme-description">It's critical to give more descriptive details and demonstrate how
                    unique digital products are when selling any NFT.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
