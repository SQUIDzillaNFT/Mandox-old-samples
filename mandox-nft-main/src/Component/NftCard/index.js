import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {FileSearchOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import { Tooltip } from "antd";
import {useChain, useMoralis, useMoralisQuery, useWeb3ExecuteFunction} from "react-moralis";
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

function NftCard({nft, setNFT, setBuyType, setCreatedNFT}) {
  const {Moralis, account} = useMoralis();
  const navigate = useNavigate();
  const fallbackImg =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==";
  const queryMarketItems = useMoralisQuery("EvNewOffer");

  const [likeNFT, setLikeNFT] = useState(null);
  const [like, setLike] = useState(false);
  const [stars, setStars] = useState(0);

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

  const handleLikeClick = async (nft) => {
    if (nft) {
      if (!isCreatedNFT(nft)) {
        let tmpStar;
        try {
          await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection/stars`, {
            params: {
              collectionAddr: nft.token_address,
            }
          }).then(async res => {
            if (res.data.collections.length > 0) {
              let obj = res.data.collections[0].stars;
              let stars = []
              Object.entries(obj).map(([key, value]) => {
                stars[key] = value;
              });
              console.log('kkk', account);
              if (!stars[parseInt(nft.token_id)]) {
                setLike(true);
                stars[parseInt(nft.token_id)] = [account];
              } else if (!stars[parseInt(nft.token_id)].includes(account)) {
                setLike(true);
                stars[parseInt(nft.token_id)].push(account);
              } else {
                setLike(false);
                stars[parseInt(nft.token_id)] = stars[parseInt(nft.token_id)].filter(function(value) {
                  return value != account;
                });
              }
              setStars(stars[parseInt(nft.token_id)].length);
              // setLike(stars[parseInt(nft.token_id)]);
              // console.log('kkk', stars);
  
              tmpStar = Object.assign({}, stars);
              await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/collection/star/update`, {
                collectionAddr: nft.token_address,
                stars: tmpStar
              });
            }
          });
        } catch {
          console.log('error in fetching collection stars');
        }
      } else if (isCreatedNFT(nft)) {
        try {
          await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/item`, {
            params: {
              _id: nft._id,
            }
          }).then((item) => {
            let obj = item.data.item.stars;
            let stars = []
            Object.entries(obj).map(([key, value]) => {
              stars[key] = value;
            });
            if (!stars.includes(account)){
              setLike(true);
              setStars(stars.length + 1);
            } else {
              setLike(false);
              setStars(stars.length - 1);
            }
          })

          await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/item/star/update`, {
            _id: nft._id,
            account: account
          });
          
        } catch {
          console.log('error in increasing item stars');
        }
      }
    }
  }

  useEffect(async () => {
    if (nft) {
      if (!isCreatedNFT(nft)) {
        let tmpStar;
        try {
          await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection/stars`, {
            params: {
              collectionAddr: nft.token_address,
            }
          }).then(async res => {
            if (res.data.collections.length > 0) {
              let obj = res.data.collections[0].stars;
              let stars = []
              Object.entries(obj).map(([key, value]) => {
                stars[key] = value;
              });
              console.log('kkk', account);
              if (!stars[parseInt(nft.token_id)]) {
                setLike(false);
                setStars(0);
              } else if (!stars[parseInt(nft.token_id)].includes(account)){
                setLike(false);
                setStars(stars[parseInt(nft.token_id)].length);
              } else {
                setLike(true);
                setStars(stars[parseInt(nft.token_id)].length);
              }
              
              // setLike(stars[parseInt(nft.token_id)]);
              // console.log('kkk', stars);
  
              // tmpStar = Object.assign({}, stars);
              // await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/collection/star/update`, {
              //   collectionAddr: nft.token_address,
              //   stars: tmpStar
              // });
            }
          });
        } catch {
          console.log('error in fetching collection stars');
        }
      } else if (isCreatedNFT(nft)) {
        try {
          await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/item`, {
            params: {
              _id: nft._id,
            }
          }).then((item) => {
            let obj = item.data.item.stars;
            let stars = []
            Object.entries(obj).map(([key, value]) => {
              stars[key] = value;
            });
            if (!stars.includes(account)){
              setLike(true);
            } else {
              setLike(false);
            }
            setStars(stars.length);
          })
        } catch {
          console.log('error in increasing item stars');
        }
      }
    }
  }, nft);

  if (!isCreatedNFT(nft)) {
    return (
      <div className="nft-items">
        <div className="nft-items-media">
          <a><img
            src={nft.imagePath}
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
          <div className="nft-items-like" onClick={() => handleLikeClick(nft)}>
            <span><i className="far fa-heart" style={{color: like ? 'red' : ''}}></i>{stars}</span>
          </div>
        </div>
        <div className="nft-items-info">
          <h3 className="theme-title"><a>{nft.name + ' ' + nft.token_id}</a></h3>
          { (() => {
              let marketItem = getMarketItem(nft);
  
              if (marketItem && marketItem.method == 0 && marketItem.status == 0) 
                return (
                    <>
                      <h4>{marketItem.price / (1e18)} ETH</h4>
                      <div className="nft-highest-bid">
                        <a onClick={() => handleBuyClick(nft)}>Buy Now</a>
                      </div>
                      {/* <span><i className="far fa-eye"></i>25</span> */}
                    </>
                  );
              else if (marketItem && marketItem.method == 1 && marketItem.status == 0 && parseInt(marketItem.endTime) * 1000 > Date.now())
                return (
                  <>
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
                  </>)
              else
                return (
                  <>
                    <h4>&nbsp;</h4>
                    <div className="nft-highest-bid"><a>&nbsp;</a></div>
                  </>
                );
            })()
          }
        </div>
      </div>
    )
  } else {
    console.log(process.env.REACT_APP_SERVER_URL);
    return (
      <div className="nft-items">
        <div className="nft-items-media">
          <a><img
            src={process.env.REACT_APP_SERVER_URL + '/' + nft.image}
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
          <div className="nft-items-like" onClick={() =>  handleLikeClick(nft)}>
            <span><i className="far fa-heart"  style={{color: like ? 'red' : ''}}></i>{stars}</span>
          </div>
        </div>
        <div className="nft-items-info">
          <h3 className="theme-title"><a>{nft.title}</a></h3>
            <h4>{nft.price.$numberDecimal} ETH</h4>
            <div className="nft-highest-bid">
            { 
              (() => {
                if (nft.status === 0) {
                  if (nft.offerMethod === 0)
                    return (
                      <a onClick={() => handleBuyClick(nft)}>Buy</a>
                    )
                  else
                    return (<a onClick={() => handleBuyClick(nft)} >Place a bid</a>)
                }
              })()
            } 
            </div>
            {
              (nft.offerMethod === 1) && (
                <div className="nft-views">
                  <Countdown
                    date={parseInt(nft.timeStamp * 1000)}
                    renderer={renderer}
                  />
                </div>
              )
            }
        </div>
      </div>
    )
  }
}

export default NftCard;
