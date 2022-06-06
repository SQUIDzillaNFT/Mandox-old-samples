import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <a href="/"><img src="assets/images/logo-white.png" alt=""/></a>
                <p className="theme-description">Find, Buy, and Sell Amazing Digital Items On One Platform With The
                  All-New Non-Fungible Tokens (NFTs) Marketplace.</p>
                <div className="footer-links clearfix">
                  <div className="footer-icon-box">
                    <a target="_blank" title="Facebook" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className="footer-icon-box">
                    <a target="_blank" title="Twitter" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div className="footer-icon-box">
                    <a target="_blank" title="Linkedin" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h3 className="theme-title">My account</h3>
                <div className="footer-menu-services">
                  <ul className="menu-service-menu">
                    <li><Link to="/create-store">Create a Store</Link></li>
                    <li><Link to="/min-item">List an Item for sale</Link></li>
                    <li><Link to="/dashboard">My Profile</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h3 className="theme-title">Need Help?</h3>
                <div className="footer-menu-services">
                  <ul className="menu-service-menu">
                    <li><Link to="/contact">Help and support</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/go-pro">Premium services</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h3 className="theme-title">Buy an Item</h3>
                <div className="footer-menu-services">
                  <ul className="menu-service-menu">
                    <li><Link to="/browse">Browse Digital Items</Link></li>
                    <li><Link to="/browse">Browse Stores</Link></li>
                    <li><Link to="/browse">Where to buy NFTs</Link></li>
                    <li><Link to="/discover">Discover</Link></li>
                    <li><Link to="/vote">Vote/DAO</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="copyright-text text-center">
                <p>Copyright 2021 <a href="/">NFT Marketplace</a> All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
