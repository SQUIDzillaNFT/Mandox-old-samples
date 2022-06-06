import React from 'react';
import {Link} from "react-router-dom";

function DashboardHeader() {
  return (
    <div className="user-panel-header-area" style={{marginTop: 83}}>
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
                          <Link className="nav-link" to="/dashboard"><i className="fas fa-store-alt"></i> Collections</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/my-wallet"><i className="fas fa-wallet"></i> My NFTs</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/my-earnings"><i className="fas fa-money-bill-alt"></i> My
                            Earnings</Link>
                        </li>
                        <li className="nav-item single-menu">
                          <a className="nav-link"><i className="fas fa-shopping-cart"></i> My
                            Orders</a>
                          <div className="dropdown-box">
                            <ul className="dropdown-box-inner">
                              <li><Link to="/my-orders"> My Orders</Link></li>
                              <li><Link to="/bidding-history">Bidding History</Link></li>
                              <li><Link to="/won-auctions">Won Auctions</Link></li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/reviews"><i className="fas fa-thumbs-up"></i> Reviews</Link>
                        </li>
                        <li className="nav-item single-menu">
                          <a className="nav-link"><i className="fas fa-list"></i> Listing</a>
                          <div className="dropdown-box">
                            <ul className="dropdown-box-inner">
                              <li><Link to="/item-list">Listing</Link></li>
                              <li><Link to="/current-item-list">Current Item List</Link></li>
                              <li><Link to="/sold-item-list">Sold Item List</Link></li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/history"><i className="fas fa-history"></i> History</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="user-header-bottom-right">
                  <Link className="theme-btn transparent-btn" to="/go-pro">Go Premium</Link>
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
