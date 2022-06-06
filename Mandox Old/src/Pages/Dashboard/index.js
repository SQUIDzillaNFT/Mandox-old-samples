import React from 'react';
import DashboardHeader from "../../Component/DashboardHeader";
import UserPanelHeader from "../../Component/UserPanelHeader";

function Dashboard() {
  return (
    <div>
      <DashboardHeader/>
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="Stores" />
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="user-store-box-main">
                        <div className="user-store-item">
                          <div className="user-store-media">
                            <img src="assets/images/category/game/art_4.gif" alt=""/>
                          </div>
                          <div className="user-store-info">
                            <h3 className="user-theme-title">Easy To Play Car Racing Games <span>(0 Items)</span></h3>
                            <p className="theme-description">Game</p>
                            <ul>
                              <li className="store-item-solid">(0 Items Sold)</li>
                              <li><span>Contract Address: </span> 0xEabc2a977611a997419a4b239eeadsb87cccdcqs87</li>
                              <li><span>Royalty on store: </span>30%</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="user-no-record-found">
                        <div className="user-no-record-icon">
                          <i className="fas fa-store-alt"></i>
                        </div>
                        <h3 className="user-title">You have no stores</h3>
                        <p className="theme-description">Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <div className="user-btn">
                          <a href="/create-store" className="theme-btn">Create a store</a>
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

export default Dashboard;
