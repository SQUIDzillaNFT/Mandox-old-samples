import React, {useEffect, useRef, useState} from 'react';
import {eventBus} from "../../Utils/EventBus";
import {auth, firestore} from "../../firebase";

import "./style.css";
import {Link, useNavigate} from "react-router-dom";
import Web3 from "web3";
import {shortenHex} from "../../Utils/helpers";

function Header() {
  const [user, setUser] = useState();
  const profileMenu = useRef(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    eventBus.on("updateAvatar", (data) => {
      setUser(JSON.parse(data.newUser));
    });

    eventBus.on("userUpdated", (data) => {
      setUser(JSON.parse(data));
    });

    auth.onAuthStateChanged(async (auth) => {
      if (localStorage.getItem('authUser')) {
        setUser(JSON.parse(localStorage.getItem('authUser')));
      } else if (auth) {
        let userProfile = (
          await firestore.collection("users").doc(auth.uid).get()
        ).data();
        setUser({...userProfile, id: auth.uid});
      }
    });
  }, [])

  const toggleMenu = () => {
    profileMenu.current.style.display = "block";
  }

  const hiddenMenu = () => {
    profileMenu.current.style.display = "none";
  }

  const logout = () => {
    localStorage.removeItem("authUser");
    auth.signOut();
    navigate('/');
  }

  const connectWallet = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      setWalletAddress(accounts[0]);
      console.log('accounts1', accounts);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      setWalletAddress(accounts[0]);
      console.log('accounts2', accounts);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  const disconnectWallet = async () => {
    profileMenu.current.style.display = "none";
    setWalletAddress(null);
  }

  return (
    <header className="header-main">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="header-logo">
              <Link to="/"><h3><b>Mandox NFT</b></h3></Link>
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
                        <Link className="nav-link" to="/min-item">Create an item</Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/collaborations">Collaborations</Link>
                      </li>

                    </ul>
                  </div>
                </nav>
              </div>
              <div className="header-right-btn">
                <ul>
                  {
                    user ?
                      (
                        <li className="nav-item single-menu">
                          <h3><a onClick={toggleMenu}><span><img src={user.avatar}/></span></a></h3>
                          <div className="profile-dropdown" ref={profileMenu}>
                            <ul className="user-links">
                              <li>
                                <Link onClick={hiddenMenu} to="/settings">Profile</Link>
                              </li>
                              <li>
                                <Link onClick={hiddenMenu} to="/faq">Help</Link>
                              </li>
                              {
                                walletAddress !== null && (
                                  <li>
                                    <a onClick={disconnectWallet}>Disconnect Wallet</a>
                                  </li>
                                )
                              }
                              <li><a onClick={logout} href='/' className="user-logout">Logout</a></li>
                            </ul>
                          </div>
                        </li>
                      ):
                      (
                        <li><Link className="login-text" to="/login">Login</Link></li>
                      )
                  }
                  <li>
                    {
                      walletAddress == null ? (
                          <a onClick={connectWallet} className="theme-btn" >Connect Wallet</a>
                        )
                      :
                        (
                          <span className="header-wallet">{shortenHex(walletAddress)}</span>
                        )
                    }
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

export default Header;
