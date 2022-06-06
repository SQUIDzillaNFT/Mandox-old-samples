import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useMoralis} from "react-moralis";
import DashboardHeader from "../../Component/DashboardHeader";
import UserPanelHeader from "../../Component/UserPanelHeader";

function Dashboard() {

  const {account} = useMoralis();
  const [collections, setCollections] = useState([]);
  useEffect(async () => {
    if (account) {
      try {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection`, {
          params: {
            walletAddr: account
          }
        });
        setCollections(res.data.collections);
        console.log(res);
      } catch(ex) {
        console.log(ex);
      }
    }
  }, [account]);
  
  return (
    <div>
      <DashboardHeader/>
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="Stores"/>
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      {collections.map((collection) => {
                        return (
                          <div className="user-store-box-main">
                            <div className="user-store-item">
                              <div className="user-store-media">
                                <img src={'/' + collection.image} alt=""/>
                              </div>
                              <div className="user-store-info">
                                <h3 className="user-theme-title">{collection.title}</h3>
                                {/* <h3 className="user-theme-title">Collection<span>(0 Items)</span></h3> */}
                                <p className="theme-description">{collection.description}</p>
                                <ul>
                                  <li className="store-item-solid">(0 Items Sold)</li>
                                  <li><span>Contract Address: </span> 0xEabc2a977611a997419a4b239eeadsb87cccdcqs87</li>
                                  <li><span>Royalty on store: </span>30%</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                      <div className="user-no-record-found">
                        <div className="user-no-record-icon">
                          <i className="fas fa-store-alt"></i>
                        </div>
                        {collections.length === 0 && (<h3 className="user-title">You have no collections</h3>)}
                        <p className="theme-description">Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <div className="user-btn">
                          <a href="/create-store" className="theme-btn">Create a store</a>
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

export default Dashboard;
