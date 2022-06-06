import React from 'react';
import DashboardHeader from "../../Component/DashboardHeader";
import UserPanelHeader from "../../Component/UserPanelHeader";

function MyOrders() {
  return (
    <div>
      <DashboardHeader/>
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="My Orders"/>
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="view-store-item">
                        <span className="store-label alert alert-success">Completed</span>
                        <div className="view-store-box">
                          <div className="view-store-images">
                            <a><img src="assets/images/category/art/art_1.png" alt=""/></a>
                          </div>
                          <div className="view-store-info">
                            <h3 className="user-theme-title">Amazing Oil Painting Of Man In Grey Hat</h3>
                            <p className="theme-description">Lets make your own coin, Coin P</p>
                            <ul>
                              <li>Token ID : <span>492</span></li>
                              <li>Seller : <span>marqueritelynch</span></li>
                            </ul>
                            <div className="item-group-box clearfix">
                              <div className="item-group-bid">
                                <p className="theme-description">Purchased for:</p>
                                <h2>$199.96</h2>
                              </div>
                              <div className="item-group-bid">
                                <button className="theme-btn">Download</button>
                              </div>
                              <div className="item-group-bid">
                                <a className="theme-btn transparent-btn" href="review-seller.html">Review this seller <i
                                  className="fas fa-arrow-right"></i></a>
                              </div>
                            </div>
                            <ul>
                              <li>Store : <span>Mintable Gasless store</span></li>
                              <li>Contract Address : <span>0x87fDD73dcA8E93e359832C7De3bab2B198bB5555</span></li>
                              <li>File : <span>P_Crypto.jpg</span></li>
                            </ul>
                          </div>
                        </div>
                        <p className="theme-description browse-description">This painting is complete made with oil
                          paint showcasing a man with grey hat, you can see all the fine details cearly and this
                          paithing one of it kind</p>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="view-store-item">
                        <span className="store-label alert alert-danger">Canceled</span>
                        <div className="view-store-box">
                          <div className="view-store-images">
                            <a><img src="assets/images/category/art/art_3.png" alt=""/></a>
                          </div>
                          <div className="view-store-info">
                            <h3 className="user-theme-title">The Depicting Buddha Painting</h3>
                            <p className="theme-description">Lets make your own coin, Coin P</p>
                            <ul>
                              <li>Token ID : <span>1117886169507812899157082259732407507512193895...</span></li>
                              <li>Seller : <span>marqueritelynch</span></li>
                            </ul>
                            <div className="item-group-box clearfix">
                              <div className="item-group-bid">
                                <p className="theme-description">Purchased for:</p>
                                <h2>$199.96</h2>
                              </div>
                              <div className="item-group-bid">
                                <button className="theme-btn" disabled="">Download</button>
                              </div>
                              <div className="item-group-bid">
                                <a className="theme-btn transparent-btn" href="review-seller.html">Review this seller <i
                                  className="fas fa-arrow-right"></i></a>
                              </div>
                            </div>
                            <ul>
                              <li>Store : <span>Mintable Gasless store</span></li>
                              <li>Contract Address : <span>0x87fDD73dcA8E93e359832C7De3bab2B198bB5555</span></li>
                              <li>File : <span>P_Crypto.jpg</span></li>
                            </ul>
                          </div>
                        </div>
                        <p className="theme-description browse-description">If you believe in buddha then this painting
                          is speacialy made for you, it depicting style will catch you eyes and others too.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MyOrders;
