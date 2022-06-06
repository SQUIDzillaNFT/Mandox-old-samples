import React from 'react';

function DashboardHeader() {
  return (
    <div className="user-panel-header-area" style={{ marginTop: 83 }}>
      <div className="user-panel-header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-header-bottom-main clearfix">
                <div className="user-header-bottom-left">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                      <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                          <a className="nav-link" href="/dashboard"><i className="fas fa-store-alt"></i> Stores</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/my-wallet"><i className="fas fa-wallet"></i> My NFTs</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/my-earnings"><i className="fas fa-money-bill-alt"></i> My
                            Earnings</a>
                        </li>
                        <li className="nav-item single-menu">
                          <a className="nav-link"><i className="fas fa-shopping-cart"></i> My
                            Orders</a>
                          <div className="dropdown-box">
                            <ul className="dropdown-box-inner">
                              <li><a href="/my-orders"> My Orders</a></li>
                              <li><a href="/bidding-history">Bidding History</a></li>
                              <li><a href="/won-auctions">Won Auctions</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/reviews"><i className="fas fa-thumbs-up"></i> Reviews</a>
                        </li>
                        <li className="nav-item single-menu">
                          <a className="nav-link"><i className="fas fa-list"></i> Listing</a>
                          <div className="dropdown-box">
                            <ul className="dropdown-box-inner">
                              <li><a href="/item-list">Listing</a></li>
                              <li><a href="/current-item-list">Current Item List</a></li>
                              <li><a href="/sold-item-list">Sold Item List</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/history"><i className="fas fa-history"></i> History</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="user-header-bottom-right">
                  <a className="theme-btn transparent-btn" href="/go-pro">Go Premium</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DashboardHeader;
