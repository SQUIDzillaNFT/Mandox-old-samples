import React from 'react';
import DashboardHeader from "../../Component/DashboardHeader";
import UserPanelHeader from "../../Component/UserPanelHeader";

function BiddingHistory() {
  return (
    <div>
      <DashboardHeader/>
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="My Bids"/>
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="user-no-record-found">
                        <div className="user-no-record-icon">
                          <i className="fas fa-store-alt"></i>
                        </div>
                        <h3 className="user-title">You have not bid on any auctions yet!</h3>
                        <p className="theme-description">Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <div className="user-btn">
                          <a href="browse.html" className="theme-btn">Browse</a>
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

export default BiddingHistory;
