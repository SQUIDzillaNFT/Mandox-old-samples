import React from 'react';
import DashboardHeader from "../../Component/DashboardHeader";
import UserPanelHeader from "../../Component/UserPanelHeader";

function SoldItem() {
  return (
    <div>
      <DashboardHeader />
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="Sold Item" />
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="sold-item-box sold-item-list-box">
                        <div className="user-store-box-main">
                          <div className="user-store-item">
                            <div className="user-store-media">
                              <img src="assets/images/category/template/art_4.png" alt=""/>
                            </div>
                            <div className="user-store-info">
                              <h3 className="user-theme-title">Best B&W Template</h3>
                              <ul className="clearfix">
                                <li><span>Store: </span>Mintable Gasless Store</li>
                                <li><span>Token Id: </span>0xEabc2a977611a997419a4b239e...</li>
                                <li><span>Bought By: </span>Stefan Harary</li>
                              </ul>
                              <h2 className="item-price">$154.17</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="sold-item-box sold-item-list-box">
                        <div className="user-store-box-main">
                          <div className="user-store-item">
                            <div className="user-store-media">
                              <img src="assets/images/category/template/art_1.png"
                                   alt="Catagory-template-art-piece-image"/>
                            </div>
                            <div className="user-store-info">
                              <h3 className="user-theme-title">Get Best Template Here</h3>
                              <ul className="clearfix">
                                <li><span>Store: </span>Mintable Gasless Store</li>
                                <li><span>Token Id: </span>0xEabc2a977611a997419a4b239e...</li>
                                <li><span>Bought By: </span>Stefan Harary</li>
                              </ul>
                              <h2 className="item-price">$154.17</h2>
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
        </div>
      </section>
    </div>
  )
}

export default SoldItem;
