import React from 'react';
import DashboardHeader from "../../Component/DashboardHeader";
import UserPanelHeader from "../../Component/UserPanelHeader";
import { Link } from "react-router-dom";

function WonAuctions() {
  return (
    <div>
      <DashboardHeader/>
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="Won Auctions"/>
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="theme-input-box search-auction">
                        <input className="theme-input" type="text" name="search" placeholder="Search for an item"/>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="user-no-record-found">
                        <div className="user-no-record-icon">
                          <i className="fas fa-store-alt"></i>
                        </div>
                        <h3 className="user-title">You have not bid on any auctions yet!</h3>
                        <p className="theme-description">Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <div className="user-btn">
                          <Link to="/browse" className="theme-btn">Browse</Link>
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

export default WonAuctions;
