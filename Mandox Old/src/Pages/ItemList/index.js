import React from 'react';
import DashboardHeader from "../../Component/DashboardHeader";
import UserPanelHeader from "../../Component/UserPanelHeader";

function ItemList() {
  return (
    <div>
      <DashboardHeader />
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="My List" />
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="nft-filter">
                        <ul id="myTabs" className="nav nav-pills nav-justified" role="tablist" data-tabs="tabs">
                          <li><a className="active" href="#list-sale1" data-toggle="tab">Current Item List</a></li>
                          <li><a href="#list-sale2" data-toggle="tab">Sold Item List</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade in active" id="list-sale1">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="user-no-record-found order-no-record">
                            <div className="user-no-record-img">
                              <img src="assets/images/no-orders.png" alt=""/>
                            </div>
                            <h3 className="user-title">You have not bought any items</h3>
                            <p className="theme-description">Go check out the marketplace and buy some cool items! Once
                              you buy one you can download it's content here</p>
                            <div className="user-btn">
                              <a href="gasless.html" className="theme-btn">List An Item</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="list-sale2">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="user-no-record-found order-no-record">
                            <div className="user-no-record-img">
                              <img src="assets/images/no-orders.png" alt=""/>
                            </div>
                            <h3 className="user-title">You have not sold any items yet</h3>
                            <p className="theme-description">Go check out the marketplace and buy some cool items! Once
                              you buy one you can download it's content here</p>
                            <div className="user-btn">
                              <a href="gasless.html" className="theme-btn">List An Item</a>
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

export default ItemList;
