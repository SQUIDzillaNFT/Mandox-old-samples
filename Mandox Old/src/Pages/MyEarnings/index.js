import React from 'react';
import DashboardHeader from "../../Component/DashboardHeader";
import UserPanelHeader from "../../Component/UserPanelHeader";

function MyEarnings() {
  return (
    <div>
      <DashboardHeader/>
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="My Earnings" />
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12 col-12">
                      <div className="my-earnings-amount-box text-center">
                        <div className="my-earnings-amount-ico">
                          <img src="assets/images/no-earnings.png" alt=""/>
                        </div>
                        <div className="my-earnings-amount-info">
                          <p className="theme-description">Total amount made</p>
                          <h2>$100.92</h2>
                          <p className="theme-description">OR 0.055519 ETH</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
                      <div className="my-earnings-sales-box">
                        <h3 className="user-small-title">Today</h3>
                        <div className="my-earnings-no-sales text-center">
                          <div className="user-no-record-icon">
                            <i className="fas fa-money-bill-alt"></i>
                          </div>
                          <h2 className="user-title">No sales during this time.</h2>
                          <p className="theme-description">You need help selling items, check out our <a href="">guide
                            to selling</a></p>
                        </div>
                      </div>
                      <div className="my-earnings-sales-box">
                        <h3 className="user-small-title">Last Week</h3>
                        <div className="my-earnings-sales-area">
                          <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12">
                              <div className="my-earnings-sales-item text-center">
                                <div className="my-earnings-sales-media">
                                  <img src="assets/images/category/art/art_1.png" alt=""/>
                                </div>
                                <div className="my-earnings-sales-info">
                                  <h3 className="user-title">Orders test</h3>
                                  <p className="theme-description earning-color">Sold For: $ 2.54</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12">
                              <div className="my-earnings-sales-item text-center">
                                <div className="my-earnings-sales-media">
                                  <img src="assets/images/category/art/art_2.png" alt=""/>
                                </div>
                                <div className="my-earnings-sales-info">
                                  <h3 className="user-title">Orders test</h3>
                                  <p className="theme-description earning-color">Sold For: $ 2.54</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12">
                              <div className="my-earnings-sales-item text-center">
                                <div className="my-earnings-sales-media">
                                  <img src="assets/images/category/art/art_3.png" alt=""/>
                                </div>
                                <div className="my-earnings-sales-info">
                                  <h3 className="user-title">Orders test</h3>
                                  <p className="theme-description earning-color">Sold For: $ 2.54</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12">
                              <div className="my-earnings-sales-item text-center">
                                <div className="my-earnings-sales-media">
                                  <img src="assets/images/category/art/art_4.png" alt=""/>
                                </div>
                                <div className="my-earnings-sales-info">
                                  <h3 className="user-title">Orders test</h3>
                                  <p className="theme-description earning-color">Sold For: $ 2.54</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12">
                              <div className="my-earnings-sales-item text-center">
                                <div className="my-earnings-sales-media">
                                  <img src="assets/images/category/art/art_5.png" alt=""/>
                                </div>
                                <div className="my-earnings-sales-info">
                                  <h3 className="user-title">Orders test</h3>
                                  <p className="theme-description earning-color">Sold For: $ 2.54</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12">
                              <div className="my-earnings-sales-item text-center">
                                <div className="my-earnings-sales-media">
                                  <img src="assets/images/category/art/art_6.png" alt=""/>
                                </div>
                                <div className="my-earnings-sales-info">
                                  <h3 className="user-title">Orders test</h3>
                                  <p className="theme-description earning-color">Sold For: $ 2.54</p>
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
          </div>
        </div>
      </section>
    </div>

  )
}

export default MyEarnings;
