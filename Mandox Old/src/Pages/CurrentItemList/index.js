import React from 'react';
import DashboardHeader from "../../Component/DashboardHeader";
import UserPanelHeader from "../../Component/UserPanelHeader";

function CurrentItemList() {
  return (
    <div>
      <DashboardHeader/>
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="Current Item" />
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="item-group current-item-box">
                        <div className="item-view-box">
                          <span><i className="fas fa-eye"></i> 2</span>
                        </div>
                        <div className="item-group-content">
                          <div className="item-group-avtar">
                            <img src="assets/images/category/art/art_4.png" alt=""/>
                          </div>
                          <h3 className="user-theme-title">Mirage Illustration Of White And Red Strips</h3>
                          <p className="theme-description">This mirage illustration of white and red strips will blow
                            your mind and with its dilusional characterstics it will look.</p>
                          <ul>
                            <li><span>Store</span> Mintable Gasless store</li>
                            <li><span>Bids</span> 1</li>
                          </ul>
                          <h2 className="item-price">$154.17</h2>
                          <div className="item-group-btn">
                            <a className="theme-btn transparent-btn" href="7mcq4lo-csmj.html">Edit</a>
                            <a className="theme-btn transparent-btn" href="javascript:void(0);" data-toggle="modal"
                               data-target="#listing-cancel">Cancel</a>
                          </div>
                          <div className="item-group-btn">
                            <a style={{width: "100%", padding: "14px 15px"}} className="theme-btn" href="view-detail.html">No
                              Reactions</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="item-group current-item-box">
                        <div className="item-view-box">
                          <span><i className="fas fa-eye"></i> 20</span>
                        </div>
                        <div className="item-group-content">
                          <div className="item-group-avtar">
                            <img src="assets/images/category/art/art_5.png" alt=""/>
                          </div>
                          <h3 className="user-theme-title">Absurd But Still Eye-Catching Illustration</h3>
                          <p className="theme-description">This graphical image illustrate how world is ruin our
                            thoughts and pouring tones of nonsensical things in our head.</p>
                          <ul>
                            <li><span>Store</span> Mintable Gasless store</li>
                            <li><span>Bids</span> 1</li>
                          </ul>
                          <h2 className="item-price">$154.17</h2>
                          <div className="item-group-btn">
                            <a className="theme-btn transparent-btn" href="7mcq4lo-csmj.html">Edit</a>
                            <a className="theme-btn transparent-btn" href="javascript:void(0);" data-toggle="modal"
                               data-target="#listing-cancel">Cancel</a>
                          </div>
                          <div className="item-group-btn">
                            <a style={{width: "100%", padding: "14px 15px"}} className="theme-btn" href="view-detail.html">No
                              Reactions</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="item-group current-item-box">
                        <div className="item-view-box">
                          <span><i className="fas fa-eye"></i> 10</span>
                        </div>
                        <div className="item-group-content">
                          <div className="item-group-avtar">
                            <img src="assets/images/category/art/art_6.png" alt=""/>
                          </div>
                          <h3 className="user-theme-title">An Abstract Oil Painting Of Girl</h3>
                          <p className="theme-description">This piece of beauty is made with oil paint and have really
                            good details carve on it, a perfect piece to gift.</p>
                          <ul>
                            <li><span>Store</span> Mintable Gasless store</li>
                            <li><span>Bids</span> 1</li>
                          </ul>
                          <h2 className="item-price">$154.17</h2>
                          <div className="item-group-btn">
                            <a className="theme-btn transparent-btn" href="7mcq4lo-csmj.html">Edit</a>
                            <a className="theme-btn transparent-btn" href="javascript:void(0);" data-toggle="modal"
                               data-target="#listing-cancel">Cancel</a>
                          </div>
                          <div className="item-group-btn">
                            <a style={{width: "100%", padding: "14px 15px"}} className="theme-btn" href="view-detail.html">No
                              Reactions</a>
                          </div>
                        </div>
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

export default CurrentItemList;
