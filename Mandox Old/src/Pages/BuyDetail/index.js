import React from 'react';

function BuyDetail() {
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
                  <img src="assets/images/art_detail_7.png" alt=""/>
                </div>
                <div className="browse-thumblain">
                  <ul className="clearfix">
                    <li><a href=""><img src="assets/images/art_7.png" alt=""/></a></li>
                    <li><a href=""><img src="assets/images/art_3.png" alt=""/></a></li>
                    <li><a href=""><img src="assets/images/art_4.png" alt=""/></a></li>
                    <li><a href=""><img src="assets/images/art_5.png" alt=""/></a></li>
                  </ul>
                </div>
                <div className="browse-vote-btn">
                  <a href="" className="theme-btn">Vote on this item <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="browse-detail-info">
                <h1>Amazing oil painting of man in grey hat</h1>
                <div className="store-ratting">
                  <i className="fas fa-star-half-alt"></i><i className="fas fa-star-half-alt"></i><i
                  className="fas fa-star-half-alt"></i><i className="fas fa-star-half-alt"></i><i
                  className="far fa-star"></i> (3.5)
                </div>
                <h3 className="theme-title">See how Sky discovered the City S-03</h3>
                <p className="theme-description">This painting is complete made with oil paint showcasing a man with
                  grey hat, you can see all the fine details cearly and this paithing one of it's kind.</p>
                <div className="starting-bid">
                  <ul>
                    <li>Top seller <span><img src="https://d2alktbws33m8c.cloudfront.net/badges.svg" alt=""/></span></li>
                    <li>Token ID: <span>205845</span></li>
                    <li>Edition: <span>1/1</span></li>
                    <li>Copyright Transferred: <span style={{color: "#008000"}}>Yes</span></li>
                    <li>Downloadable file: <span style={{color: "#008000"}}>Yes</span></li>
                    <li>Resellable: <span style={{color: "#008000"}}>Yes</span></li>
                  </ul>
                </div>
                <p className="theme-description">5% royalty on secondary sales</p>
                <div className="browse-bid-detail">
                  <div className="browse-bid-box text-center">
                    <h2>$1001.13</h2>
                    <p className="theme-description">or <span>0.495363 ETH</span></p>
                  </div>
                  <div className="browse-buy-btn">
                    <button className="theme-btn">Buy Now</button>
                  </div>
                </div>
                <div className="browse-tag">
                  <ul className="clearfix">
                    <li>game</li>
                    <li>crypto</li>
                    <li>movie</li>
                    <li>short</li>
                    <li>bitcoin</li>
                    <li>ether</li>
                    <li>animation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BuyDetail;
