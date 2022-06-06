import React, {useEffect, useRef, useState} from 'react';
import "./style.css";

function NftCard(props) {

  const {
    id,
    name,
    price,
    likes,
    views,
    imgSrc,
    bidCount,
    status,
    collection,
    creator,
    owner
  } = props.data;

  return (
    <div className="nft-items">
      <div className="nft-items-media">
        <a href=""><img src={imgSrc} alt=""/></a>
      </div>
      <div className="nft-items-authore clearfix">
        <div className="hot-bids-athore clearfix">
          <a href="" type="button" className="btn btn-lg" data-toggle="tooltip" data-placement="top"
             title="Collection : Onem"><img src={collection} alt=""/></a>
          <a href="" type="button" className="btn btn-lg" data-toggle="tooltip" data-placement="top"
             title="Owner: Tocaya"><img src={creator} alt=""/></a>
          <a href="" type="button" className="btn btn-lg" data-toggle="tooltip" data-placement="top"
             title="Creator: Georgijevic"><img src={owner} alt=""/></a>
        </div>
        <div className="nft-items-like">
          <span><i className="far fa-heart"></i> {likes}</span>
        </div>
      </div>
      <div className="nft-items-info">
        <h3 className="theme-title"><a href="">{name}</a></h3>
        <h4>{price} ETH <span>{bidCount}</span></h4>
        <div className="nft-highest-bid"><a href="">Place a bid</a></div>
        <div className="nft-views">
          <span><i className="far fa-eye"></i> {views}</span>
        </div>
      </div>
    </div>
  )
}

export default NftCard;
