import React from 'react';
import UserPanelHeader from "../../Component/UserPanelHeader";
import DashboardHeader from "../../Component/DashboardHeader";

function MyWallet() {
  return (
    <div>
      <DashboardHeader />
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="YOUR TOKENS"/>
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="user-no-record-found">
                        <div className="user-no-record-img">
                          <img src="assets/images/no-history.png" alt=""/>
                        </div>
                        <h3 className="user-title">You have no tokens in your wallet</h3>
                        <p className="theme-description">Displaying tokens in
                          address: <b>0x9903441411B0e94E8592aA8e8461eA2451CF543E</b></p>
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

export default MyWallet;
