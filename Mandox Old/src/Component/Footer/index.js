import React, {useEffect, useState} from 'react';

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
                    <a href="" target="_blank" title="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className="footer-icon-box">
                    <a href="" target="_blank" title="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div className="footer-icon-box">
                    <a href="" target="_blank" title="Linkedin">
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
                    <li><a href="/create-store">Create a Store</a></li>
                    <li><a href="/min-item">List an Item for sale</a></li>
                    <li><a href="/login">My Profile</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h3 className="theme-title">Need Help?</h3>
                <div className="footer-menu-services">
                  <ul className="menu-service-menu">
                    <li><a href="/contact">Help and support</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/contact">Contact us</a></li>
                    <li><a href="/go-pro">Premium services</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h3 className="theme-title">Buy an Item</h3>
                <div className="footer-menu-services">
                  <ul className="menu-service-menu">
                    <li><a href="/browse">Browse Digital Items</a></li>
                    <li><a href="/browse">Browse Stores</a></li>
                    <li><a href="/browse">Where to buy NFTs</a></li>
                    <li><a href="/discover">Discover</a></li>
                    <li><a href="/vote">Vote/DAO</a></li>
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
