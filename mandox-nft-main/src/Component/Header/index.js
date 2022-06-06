import React, {useEffect, useRef, useState} from 'react';
import {eventBus} from "../../Utils/EventBus";

import "./style.css";
import { Link } from "react-router-dom";
import Web3 from "web3";
import { connect } from 'react-redux';

import Account from "../Account";

function Header({user}) {

  useEffect(() => {
    console.log('***user***', user);
  }, [user]);

  return (
    <header className="header-main">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="header-logo">
              <Link to="/"><img src="assets/images/logo.png" alt=""/></Link>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="header-menu-box clearfix">
              <div className="header-navbar-menu clearfix">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item menu-menu-parent">
                        <Link className="nav-link" to="/browse">Browse</Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/gasless">Create an item</Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/collections">Collections</Link>
                      </li>
                      {/* <Chains /> */}
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="header-right-btn">
                <ul>
                  <li>
                    <Account user={user}/>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(Header);
