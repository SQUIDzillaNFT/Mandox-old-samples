
import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {useChain, useMoralis, useMoralisQuery, useWeb3ExecuteFunction, useWeb3Transfer} from "react-moralis";
import {useMoralisDapp} from "../../providers/MoralisDappProvider/MoralisDappProvider";
import {Modal, Spin} from "antd";

function BuyDetail({nft, buyType, createdNFT}) {
  const navigation = useNavigate();
  const fallbackImg =
    "data:image/png;base64,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";
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [originPrice, setOriginPrice] = useState(0);
  // const [collectionName, setCollectionName] = useState('');
  // const [description, setDescription] = useState('');

  const {marketAddress, contractABI} = useMoralisDapp();
  const contractABIJson = JSON.parse(contractABI);
  const contractProcessor = useWeb3ExecuteFunction();
  const {Moralis, account} = useMoralis();

  // useEffect(async () => {
  //   if (createdNFT === 1) {
  //     try {
  //       const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/item`, {
  //         params: {
  //           walletAddr: account,
  //           title: nft.title
  //         }
  //       });
  //       console.log(res.data.item);
  //     } catch(ex) {
  //       console.log(ex);
  //     }
  //   }
  // }, [createdNFT])
  
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


  const getMarketItem = (nft) => {

    if (createdNFT === 0) {
      const result = fetchMarketItems?.find(
        (e) =>
          e.nft.toLowerCase() === nft?.token_address.toLowerCase() &&
          e.tokenId === nft?.token_id &&
          e.confirmed === true
      );
      return result;
    } else return null;
  };

  async function purchase() {
    if (createdNFT === 0) {
      setLoading(true);
      const tokenDetails = getMarketItem(nft);
      const itemID = tokenDetails.objectId;
      const tokenPrice = tokenDetails.price;

      const ops = {
        contractAddress: marketAddress,
        functionName: purchaseItemFunction,
        abi: contractABIJson,
        params: {
          id: itemID,
        },
        msgValue: tokenPrice,
      };

      await contractProcessor.fetch({
        params: ops,
        onSuccess: () => {
          console.log("success");
          updateSoldMarketItem();
          succPurchase();
        },
        onError: (error) => {
          console.log(error);
          failPurchase();
        },
      });
    } else {
      setLoading(true);
      try {

        const options = {
          type: "native",
          amount: Moralis.Units.ETH(nft.price.$numberDecimal),
          receiver: marketAddress
        };

        await Moralis.transfer(options).then((res)=> {
          console.log('transfer success');
        });
        
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/item/buy`, {
          itemId: nft._id,
          collectionId: nft.collectionId,
          account: account,
          uri: nft.uri
        }).then(res => {
          succPurchase();
        });

      } catch(ex) {

        console.log(ex);
        failPurchase();
      }
    }
  }

  async function placeBid() {
    if (createdNFT === 0) {
      setLoading(true);
      const tokenDetails = getMarketItem(nft);
      const itemID = tokenDetails.uid;
      const p = price * ("1e" + 18);
      const ops = {
        contractAddress: marketAddress,
        functionName: bidItemFunction,
        abi: contractABIJson,
        params: {
          id: itemID,
        },
        msgValue: String(p),
      };
  
      await contractProcessor.fetch({
        params: ops,
        onSuccess: () => {
          console.log("success");
          setLoading(false);
          succBid();
        },
        onError: (error) => {
          setLoading(false);
          failBid();
        },
      });
    } else {
      setLoading(true);
      try {

        const options = {
          type: "native",
          amount: Moralis.Units.ETH(price),
          receiver: marketAddress
        };

        await Moralis.transfer(options).then((res)=> {
          console.log('transfer success');
        });

        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/bid/add`, {
          walletAddr: account,
          price: price,
          itemId: nft._id,
        });
        succBid();
      } catch(ex) {
        console.log(ex);
        failBid();
      }
    }
    
  }
  
  async function updateSoldMarketItem() {
    const id = getMarketItem(nft).objectId;
    const marketList = Moralis.Object.extend("EvNewOffer");
    const query = new Moralis.Query(marketList);
    await query.get(id).then((obj) => {
      obj.set("status", 1);
      obj.set("user", account);
      obj.save();
    });
  }

  function succPurchase() {
    setLoading(false);
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "Success!",
      content: `You have purchased this NFT`,
      onOk() {
        navigation("/browse");
      },
    });
    setTimeout(() => {
      modal.destroy();
      navigation("/browse");
    }, secondsToGo * 1000);
  }

  function failPurchase() {
    setLoading(false);
    let secondsToGo = 5;
    const modal = Modal.error({
      title: "Error!",
      content: `There was a problem when purchasing this NFT`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }


  function succBid() {
    setLoading(false);
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "Success!",
      content: `You have bidden this NFT`,
      onOk() {
        navigation("/browse");
      },
    });
    setTimeout(() => {
      modal.destroy();
      navigation("/browse");
    }, secondsToGo * 1000);
  }

  function failBid() {
    setLoading(false);
    let secondsToGo = 5;
    const modal = Modal.error({
      title: "Error!",
      content: `There was a problem when bidding this NFT`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

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
                    <li><a href="/browse">Browse</a></li>
                    <li>Sky Diamond – 030</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="browse-detail-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="browse-detail-images text-center">
                <div className="browse-detail-large">
                  {/* <img src="assets/images/art_detail_7.png" alt=""/> */}
                  { createdNFT === 0 ? (
                    <img src={(nft && nft.metadata) ? JSON.parse(nft.metadata).image.replace('ipfs://', 'https://ipfs.io/ipfs/') : fallbackImg} alt="" />
                  ):(
                    <img src={nft.image} />
                  )}
                </div>
                {/* <div className="browse-thumblain">
                  <ul className="clearfix">
                    <li><a><img src="assets/images/art_7.png" alt=""/></a></li>
                    <li><a><img src="assets/images/art_3.png" alt=""/></a></li>
                    <li><a><img src="assets/images/art_4.png" alt=""/></a></li>
                    <li><a><img src="assets/images/art_5.png" alt=""/></a></li>
                  </ul>
                </div>
                <div className="browse-vote-btn">
                  <a className="theme-btn">Vote on this item <i className="fas fa-arrow-right"></i></a>
                </div> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="browse-detail-info">
                {createdNFT === 1 ? (<h1>{nft.title}</h1>):(<h1>{nft.name}</h1>)}
                <div className="store-ratting">
                  <i className="fas fa-star-half-alt"></i><i className="fas fa-star-half-alt"></i><i
                  className="fas fa-star-half-alt"></i><i className="fas fa-star-half-alt"></i><i
                  className="far fa-star"></i> (3.5)
                </div>
                <h3 className="theme-title">See how Sky discovered the City S-03</h3>
                {createdNFT === 1 ? (<p className="theme-description">{nft.description}</p>):(<p className="theme-description">This painting is complete made with oil paint showcasing a man with
                  grey hat, you can see all the fine details cearly and this paithing one of it's kind.</p>)}
                <div className="starting-bid">
                  <ul>
                    <li>Top seller <span><img src="https://d2alktbws33m8c.cloudfront.net/badges.svg" alt=""/></span>
                    </li>
                    {nft && getMarketItem(nft) && 
                    (<li>Token ID: <span>{nft.token_id}</span></li>)}
                    <li>Edition: <span>1/1</span></li>
                    <li>Copyright Transferred: <span style={{color: "#008000"}}>Yes</span></li>
                    <li>Downloadable file: <span style={{color: "#008000"}}>Yes</span></li>
                    <li>Resellable: <span style={{color: "#008000"}}>Yes</span></li>
                  </ul>
                </div>
                <p className="theme-description">5% royalty on secondary sales</p>
                {getMarketItem(nft) && createdNFT === 0 && (<p className="price">{getMarketItem(nft).price / (1e18)} ETH</p>)}
                {createdNFT === 1 && (
                  <p className="price">{nft.price.$numberDecimal} ETH</p>
                )}
                {(() => {
                  if (buyType === 1) {
                    if (!loading) {
                      return (
                        <div className="browse-bid-detail">
                          <div className="browse-buy-btn">
                            <input type="number" step="0" value={price} onChange={(e) => setPrice(e.target.value)} />
                            <button className="theme-btn theme-btn-bid" onClick={placeBid}>Place a bid</button>
                          </div>
                        </div>
                      )
                    } else {
                      return (
                        <div className="browse-bid-detail">
                          <div className="browse-buy-btn">
                            <input type="text" />
                            <button className="theme-btn"><Spin /></button>
                          </div>
                        </div>
                      )
                    }
                  } else {
                    if (!loading) {
                      return (
                        <button className="theme-btn" onClick={purchase}>Buy Now</button>
                      )
                    } else {
                      return (
                        <button className="theme-btn"><Spin /></button>
                      )
                    }
                  }
                })()}
                {/* <div className="browse-tag">
                  <ul className="clearfix">
                    <li>game</li>
                    <li>crypto</li>
                    <li>movie</li>
                    <li>short</li>
                    <li>bitcoin</li>
                    <li>ether</li>
                    <li>animation</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BuyDetail;
