import React, {useEffect, useState} from 'react';
import {dummyNftData} from "../../Utils/dummyData";
import NftCard from "../../Component/NftCard";

function Home() {
  return (
    <div>
      <section className="slider-area">
        <div className="slide-animate-img">
          <img src="assets/images/home-animation-image1.png" alt=""/>
        </div>
        <div className="slide-animate-img slide-animate-down">
          <img src="assets/images/home-animation-image1.png" alt=""/>
        </div>
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
                    <a className="theme-btn" href="/browse">Discover NFTs</a>
                    <a className="theme-btn sl-sale-btn" href="/browse">Sell NFTs</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="slider-images">
                  <div className="slider-screen">
                    <img src="assets/images/slider/screen.png" alt=""/>
                  </div>
                  <div className="slider-art-screen">
                    <div className="slider-item">
                      <img src="assets/images/slider/screen1.png" alt=""/>
                    </div>
                    <div className="slider-item slider-item-one">
                      <img src="assets/images/slider/screen2.png" alt=""/>
                    </div>
                    <div className="slider-item slider-item-two">
                      <img src="assets/images/slider/screen3.png" alt=""/>
                    </div>
                    <div className="slider-item slider-item-three">
                      <img src="assets/images/slider/screen4.png" alt=""/>
                    </div>
                    <div className="slider-item slider-item-four">
                      <img src="assets/images/slider/screen5.png" alt=""/>
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
                (dummyNftData
                  .map((cardData, index) =>
                    index < 8 &&
                    (
                      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                        <NftCard data={cardData}/>
                      </div>
                    )
                  ))
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
                        <img src="assets/images/nft/nft_governance.png" alt="NFT-Governance-image"/>
                      </div>
                      <div className="singel-about-box-info">
                        <h3 className="theme-title">Explore NFTs</h3>
                        <p className="theme-description">NFTs include digital items such as visual arts, music, games,
                          and video that are very unique.</p>
                      </div>
                    </div>
                    <div className="singel-about-box-item clearfix">
                      <div className="singel-about-box-icon">
                        <img src="assets/images/nft/super_nft.png" alt="Super-NFT-image"/>
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
              (dummyNftData
                .map((cardData, index) =>
                  index < 8 &&
                  (
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                      <NftCard data={cardData}/>
                    </div>
                  )
                ))
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
                        <img src="assets/images/nft/nft_governance.png" alt="NFT-Governance-image"/>
                      </div>
                      <div className="singel-about-box-info">
                        <h3 className="theme-title">List Your Items</h3>
                        <p className="theme-description">You can list your NFTs, either at a fixed price or in an
                          auction, using a streamlined process.</p>
                      </div>
                    </div>
                    <div className="singel-about-box-item clearfix">
                      <div className="singel-about-box-icon">
                        <img src="assets/images/nft/super_nft.png" alt="Super-NFT-image"/>
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
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 top-selling-width">
              <div className="item-group">
                <div className="item-group-content">
                  <div className="item-group-avtar">
                    <img src="assets/images/selling1.jpg" alt="Catagory-domain-art-piece-image"/>
                  </div>
                  <div className="selling-item-info">
                    <h3 className="theme-title"><a href="/buy-detail">Ateali.Eth</a></h3>
                    <p className="theme-description">Items sold: <span>566</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 top-selling-width">
              <div className="item-group">
                <div className="item-group-content">
                  <div className="item-group-avtar">
                    <img src="assets/images/selling2.jpg" alt="Catagory-game-art-piece-image"/>
                  </div>
                  <div className="selling-item-info">
                    <h3 className="theme-title"><a href="/buy-detail">Indoor Football Table Game</a></h3>
                    <p className="theme-description">Items sold: <span>566</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 top-selling-width">
              <div className="item-group">
                <div className="item-group-content">
                  <div className="item-group-avtar">
                    <img src="assets/images/selling3.jpg" alt="Catagory-game-art-piece-image"/>
                  </div>
                  <div className="selling-item-info">
                    <h3 className="theme-title"><a href="/buy-detail">Bowling Ball With Colorful Bottles</a></h3>
                    <p className="theme-description">Items sold: <span>566</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 top-selling-width">
              <div className="item-group">
                <div className="item-group-content">
                  <div className="item-group-avtar">
                    <img src="assets/images/selling4.jpg" alt="Catagory-music-art-piece-image"/>
                  </div>
                  <div className="selling-item-info">
                    <h3 className="theme-title"><a href="/buy-detail">The Modern Trap Music Collection</a></h3>
                    <p className="theme-description">Items sold: <span>566</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 top-selling-width">
              <div className="item-group">
                <div className="item-group-content">
                  <div className="item-group-avtar">
                    <img src="assets/images/selling5.jpg" alt="Catagory-template-art-piece-image"/>
                  </div>
                  <div className="selling-item-info">
                    <h3 className="theme-title"><a href="/buy-detail">Get Best Template Here</a></h3>
                    <p className="theme-description">Items sold: <span>566</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 top-selling-width">
              <div className="item-group">
                <div className="item-group-content">
                  <div className="item-group-avtar">
                    <img src="assets/images/selling6.jpg" alt="Catagory-template-art-piece-image"/>
                  </div>
                  <div className="selling-item-info">
                    <h3 className="theme-title"><a href="/buy-detail">Make Your Site/App Look Great</a></h3>
                    <p className="theme-description">Items sold: <span>566</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 top-selling-width">
              <div className="item-group">
                <div className="item-group-content">
                  <div className="item-group-avtar">
                    <img src="assets/images/selling7.jpg" alt="Catagory-template-art-piece-image"/>
                  </div>
                  <div className="selling-item-info">
                    <h3 className="theme-title"><a href="/buy-detail">You Can Get Templates For Your Project</a>
                    </h3>
                    <p className="theme-description">Items sold: <span>566</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 top-selling-width">
              <div className="item-group">
                <div className="item-group-content">
                  <div className="item-group-avtar">
                    <img src="assets/images/selling8.jpg" alt="Catagory-template-art-piece-image"/>
                  </div>
                  <div className="selling-item-info">
                    <h3 className="theme-title"><a href="/buy-detail">Easy To Implement Tempalte For Your Site</a>
                    </h3>
                    <p className="theme-description">Items sold: <span>566</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-btn text-center" style={{marginTop: 50}}>
                <button className="theme-btn">Show More <i className="fas fa-arrow-right"></i></button>
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
