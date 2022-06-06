import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import NftCard from "../../Component/NftCard";
import {useChain, useMoralis, useMoralisQuery, useWeb3ExecuteFunction} from "react-moralis";
import {getCollectionsByChain, getCollections} from "../../Helpers/collections";
import {useNFTTokenIds} from "../../Hooks/useNFTTokenIds";
import {useVerifyMetadata} from "../../Hooks/useVerifyMetadata";
import {Card, Image, Tooltip, Modal, Badge, Alert, Spin, Button, Input} from "antd";
import ReactPaginate from 'react-paginate';
import {useMoralisDapp} from "../../providers/MoralisDappProvider/MoralisDappProvider";
import Countdown from 'react-countdown';

const {Meta} = Card;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <span></span>;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};

function Browse({setNFT, setBuyType, setCreatedNFT}) {
  const navigate = useNavigate();
  const fallbackImg =
    "data:image/png;base64,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";
  // const [createdFilter, setCreatedFilter] = useState("newest");
  // const [priceFilter, setPriceFilter] = useState("lowToHigh");
  // const [sortMethod, setSortMethod] = useState("price");
  // const [auctionFilter, setAuctionFilter] = useState("all");
  // const [filterStr, setFilter] = useState("");

  // const [categoryFilter, setCategoryFilter] = useState([]);
  // const [copyRightFilter, setCopyRightFilter] = useState(false);
  // const [resellableFilter, setResellableFilter] = useState(false);
  // const [priceRangeFilter, setPriceRangeFilter] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageNFTs, setPageNFTs] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const [visible, setVisibility] = useState(false);
  const [nftToBuy, setNftToBuy] = useState(null);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const contractProcessor = useWeb3ExecuteFunction();

  const pagePercount = 6;
  // const { chainId } = useChain();
  const chainId = "0x4";

  // const NFTCollections = getCollectionsByChain(chainId);
  const [NFTCollections, setNFTCollections] = useState([]);

  const {Moralis, account} = useMoralis();
  const [NFTTokens, setNFTTokens] = useState([]);
  const {verifyMetadata} = useVerifyMetadata();

  const [likeNFT, setLikeNFT] = useState(null);
  const [like, setLike] = useState(0);

  const {marketAddress, contractABI} = useMoralisDapp();
  const contractABIJson = JSON.parse(contractABI);
  const queryMarketItems = useMoralisQuery("EvNewOffer");


  const fetchMarketItems = JSON.parse(
    JSON.stringify(queryMarketItems.data, [
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
  const purchaseItemFunction = "acceptSell";
  const bidItemFunction = "placeBid";

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

  const isCreatedNFT = (nft) => {
    return nft.hasOwnProperty('category');
  }

  useEffect(async () => {
    if (likeNFT) {
      if (!isCreatedNFT(likeNFT)) {
        let tmpStar;
        try {
          await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection/stars`, {
            params: {
              collectionAddr: likeNFT.token_address,
            }
          }).then(async res => {
            if (res.data.collections.length > 0) {
              let obj = res.data.collections[0].stars;
              let stars = []
              Object.entries(obj).map(([key, value]) => {
                stars[key] = value;
              });
              console.log('kkk', stars);
              if (!!stars[parseInt(likeNFT.token_id)]) stars[parseInt(likeNFT.token_id)] += 1;
              else stars[parseInt(likeNFT.token_id)] = 1;
              setLike(stars[parseInt(likeNFT.token_id)]);
              console.log('kkk', stars);
  
              tmpStar = Object.assign({}, stars);
              await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/collection/star/update`, {
                collectionAddr: likeNFT.token_address,
                stars: tmpStar
              });
            }
          });
        } catch {
          console.log('error in fetching collection stars');
        }
      } else if (isCreatedNFT(likeNFT)) {
        try {
          await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/item/star/increase`, {
            _id: likeNFT._id,
          });
          await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/item`, {
            _id: likeNFT._id,
          }).then((item) => {
            setLike(item.stars);
          })
        } catch {
          console.log('error in increasing item stars');
        }
      }
    }
  }, [likeNFT])

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection/all`)
    .then(res => {
      let collections = res.data.collections.map((item) => {
        return {
          image: `${process.env.REACT_APP_SERVER_URL}/${item.image}`,
          name: item.title,
          addrs: item.collectionAddr,
          created: item.created
        }
      });
      setNFTCollections(collections);
    });
  }, []);

  useEffect(() => {
    async function fetchAPIData() {
      if (NFTCollections.length > 0) {
        const promises = [];
        let starCollections = new Map();
        for (const collection of NFTCollections) {

          try {
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection/stars`, {
              params: {
                collectionAddr: collection.addrs,
              }
            }).then(res => {
              if (res.data.collections.length > 0) {
                starCollections.set(collection.addrs, res.data.collections[0].stars);
              }
            });
          } catch {
            console.log('error in fetching collection stars');
          }

          if (collection.addrs == '' || collection.created == 1) continue;
          const options = {address: collection.addrs, chain: chainId };
          try {
            const result = await Moralis.Web3API.token.getAllTokenIds(options);
            promises.push(result);
          } catch (e) {
            console.log(e);
          }
        }

        // console.log('starCollections', starCollections);
        const results = await Promise.all(promises);
        const collections = results.map((result) => result.result);

        let NFTs = []
        for (const collection of collections) {
          for (let i = 0; i < collection.length; i++) {
            let obj = starCollections.get(collection[i].token_address);
            let stars = []
            Object.entries(obj).map(([key, value]) => {
              stars[key] = value;
            });
            collection[i].stars = stars[parseInt(collection[i].token_id)] == undefined ? [] : stars[parseInt(collection[i].token_id)];
          }
          NFTs = [...NFTs, ...collection];
        }
        // console.log('ppp =', NFTs);

        // for (let nft of NFTs) {
        //   if (!nft.metadata) {
        //     const options = {
        //       address: nft.token_address,
        //       token_id: nft.token_id,
        //       flag: "uri",
        //       chain: chainId
        //     };
        //     const result = await  Moralis.Web3API.token.reSyncMetadata(options);
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

        let orderedIds = [];
        let unOrderedIds = [];

        for (let NFT of NFTs) {
          if (getMarketItem(NFT)) {
            orderedIds = [...orderedIds, NFT];
          } else {
            unOrderedIds = [...unOrderedIds, NFT];
          }
        }

        NFTs = [];
        NFTs = [...orderedIds, ...unOrderedIds];

        try {
          const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/items/all`);
          NFTs = [...NFTs, ...res.data];
          console.log(res);
        } catch(ex) {
          console.log(ex);
        }
        
        setPageCount(Math.ceil(NFTs.length / pagePercount));

        setNFTTokens(NFTs);

        let _pageNFTs = [];

        for (let i = 0; i < pagePercount; i++) {
          if (NFTs[i + currentPage * pagePercount]) {
            let nft = NFTs[i + currentPage * pagePercount];
            if (!isCreatedNFT(nft) && !nft.metadata) {
              const options = {
                address: nft.token_address,
                token_id: nft.token_id,
                flag: "uri",
                chain: chainId
              };
              const result = await  Moralis.Web3API.token.reSyncMetadata(options);
              const options1 = {
                address: nft.token_address,
                token_id: nft.token_id,
                chain: chainId
              };
              const tokenIdMetadata = await Moralis.Web3API.token.getTokenIdMetadata(options1);
              if (tokenIdMetadata.token_uri) {
                await fetch((tokenIdMetadata.token_uri))
                  .then((response) => response.json())
                  .then((data) => {
                    nft.imagePath = data.image.replace('ipfs://', 'https://ipfs.io/ipfs/');
                  })
              } else {
                nft.imagePath = fallbackImg;
              }
            } else if (!isCreatedNFT(nft)) {
              nft.imagePath = JSON.parse(nft.metadata).image.replace('ipfs://', 'https://ipfs.io/ipfs/');
            } else {
              nft.image = process.env.REACT_APP_SERVER_URL + '/' + nft.image;
            }

            _pageNFTs.push(nft);
          }
        }
      
        setPageNFTs(_pageNFTs);
      }
    }

    fetchAPIData();
  }, [NFTCollections]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  }

  useEffect(async () => {
    let _pageNFTs = [];
    for (let i = 0; i < pagePercount; i++) {
      if (NFTTokens[i + currentPage * pagePercount]) {

        let nft = NFTTokens[i + currentPage * pagePercount];
        if (!isCreatedNFT(nft) && !nft.metadata) {
          const options = {
            address: nft.token_address,
            token_id: nft.token_id,
            flag: "uri",
            chain: chainId
          };
          const result = await  Moralis.Web3API.token.reSyncMetadata(options);
          const options1 = {
            address: nft.token_address,
            token_id: nft.token_id,
            chain: chainId
          };
          const tokenIdMetadata = await Moralis.Web3API.token.getTokenIdMetadata(options1);
          if (tokenIdMetadata.token_uri) {
            await fetch((tokenIdMetadata.token_uri))
              .then((response) => response.json())
              .then((data) => {
                nft.imagePath = data.image.replace('ipfs://', 'https://ipfs.io/ipfs/');
              })
          } else {
            nft.imagePath = fallbackImg;
          }
        } else if (!isCreatedNFT(nft)){
          nft.imagePath = JSON.parse(nft.metadata).image.replace('ipfs://', 'https://ipfs.io/ipfs/');
        }

        _pageNFTs.push(nft);
      }
    }

    setPageNFTs(_pageNFTs);
  }, [currentPage]);

  return (
    <div>
      <section className="bradcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="bradcrumb-main">
                <div className="bradcrumb-title">
                  <h1>Browse</h1>
                </div>
                <div className="bradcrumb-right clearfix">
                  <ul className="clearfix">
                    <li><a href="/">Home</a></li>
                    <li>Browse</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="browse-product-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="browse-product-filter">
                <div className="filter-box">
                  <h3 className="theme-title">Categories</h3>
                  <div className="filter-menu">
                    <ul>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-1"><span>Art</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-2"><span>Collectibles</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-3" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-3"><span>Game Items</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-4" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-4"><span>Music</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-5" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-5"><span>Domains</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-6" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-6"><span>Templates</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-7" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-7"><span>Videos</span></label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-box">
                  <h3 className="theme-title">Other options</h3>
                  <div className="filter-menu">
                    <ul>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-8" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-8"><span>Copyright transfer</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-9" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-9"><span>Resellable</span></label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-box">
                  <h3 className="theme-title">Sort by</h3>
                  <div className="filter-menu">
                    <ul>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-10" type="checkbox" value="value1"
                               checked=""/>
                        <label htmlFor="styled-checkbox-10"><span>Newest</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-11" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-11"><span>Oldest</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-12" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-12"><span>Price - Low to high</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-13" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-13"><span>Price - High to low</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-14" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-14"><span>Auctions only</span></label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-box">
                  <h3 className="theme-title">Price</h3>
                  <div className="filter-menu">
                    <ul>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-15" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-15"><span>$1 - $5.99</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-16" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-16"><span>$6 - $14.99</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-17" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-17"><span>$15 - $29.99</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-18" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-18"><span>$30 - $74.99</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-19" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-19"><span>$75 - $100+</span></label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="browse-product-top">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="browse-product-left">
                      <div className="browse-search-box">
                        <input className="browse-search-input" type="" name="" placeholder="Search..."/>
                        <button className="browse-search-btn"><i className="fas fa-search"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="browse-product-box">
                <div className="tab-content">
                  <div className="tab-pane active" id="view-store-grid" role="tabpanel">
                    <div className="row">
                      {
                        pageNFTs.map((nft, index) => {
                          if (!isCreatedNFT(nft)) {
                            return (
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                                <NftCard nft={nft} setNFT={setNFT} setBuyType={setBuyType} setCreatedNFT={setCreatedNFT}/>
                              </div>
                            )
                          } else if (nft.pending === 0 && nft.status === 0) {
                            return (
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <NftCard nft={nft} setNFT={setNFT} setBuyType={setBuyType} setCreatedNFT={setCreatedNFT}/>
                              </div>
                            )
                          }
                        })
                      }
                    </div>

                  </div>
                </div>
                {
                  pageCount > 1 &&
                  (
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="pagination-box text-center">
                          <ReactPaginate
                            previousLabel="PREV"
                            nextLabel="NEXT"
                            breakLabel="..."
                            breakClassName="break-me"
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName="pagination"
                            activeClassName="active"
                          />
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Browse;
