import React, {useEffect, useState} from 'react'
import { useMoralis } from "react-moralis";
import axios from 'axios';
import DashboardHeader from "../../Component/DashboardHeader";
import UserPanelHeader from "../../Component/UserPanelHeader";
import {toast} from "react-toastify";
import { connect } from 'react-redux';
import { submitUser } from '../../Redux/actions/userActions';

import {eventBus} from "../../Utils/EventBus";
import "./style.css";

function Settings({onSubmitUser}) {
  const { account } = useMoralis();
  const [avataPath, setAvatarPath] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);
  const [name, setName] = useState('');
  const [twitter, setTwitter] = useState('');
  const [cent, setCent] = useState('');
  const [reddit, setReddit] = useState('');
  const [youtube, setYoutube] = useState('');
  const [instagram, setInstagram] = useState('');

  useEffect(async () => {
    if (account) {
      try {
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/user/`, {
          params: {
            walletAddr: account,
          }
        }).then(res => {
          if (res.data.user) {
            setName(res.data.user.name);
            setTwitter(res.data.user.twitter);
            setCent(res.data.user.cent);
            setReddit(res.data.user.reddit);
            setYoutube(res.data.user.youtube);
            setInstagram(res.data.user.instagram);
            setAvatarPath(res.data.user.avatar);
          }
        })
      } catch(ex) {
        console.log(ex);
      }
    }
  }, [account]);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

  const saveChanges = async () => {
    let formData = new FormData();
    formData.append('walletAddr', account);
    formData.append('name', name);
    if (avatarFile) formData.append('file', avatarFile.data);
    formData.append('twitter', twitter);
    formData.append('cent', cent);
    formData.append('reddit', reddit);
    formData.append('youtube', youtube);
    formData.append('instagram', instagram);
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/user/save`, formData);
      console.log('res', res);
      onSubmitUser(res.data.data);

      toast.success("Your profile was updated successfully");
    } catch(ex) {
      toast.error("Error in updating your profile");
    }
  }

  const handleAvatar = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg, image/png, image/gif";
    input.onchange = (event) => {
      {/* <textarea className="theme-input"
                value={user.details}
                onChange={(e) => setUser({...user, details: e.target.value})}
                rows="4" placeholder="default"></textarea> */}
      const img = {
        preview: URL.createObjectURL(event.target.files[0]),
        data: event.target.files[0],
      }
      setAvatarFile(img);
    };
    input.click();
  }
  return (
    <div>
      <DashboardHeader/>
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="My Profile"/>
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="user-setting-box-area">
                        <div className="row user-setting-box-top">
                          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 user-setting-left">
                            <div className="setting-change-profile text-center">
                              <div className="change-profile-icon" onClick={handleAvatar}>
                                <span>
                                  { (() => {
                                      if (avatarFile) {
                                        return (<img src={avatarFile.preview} alt=""/>);
                                      } else if (avataPath) {
                                        return (<img src={process.env.REACT_APP_SERVER_URL + '/' + avataPath} alt=""/>);
                                      } else {
                                        return <img src="/assets/images/avatar.gif" alt=""/>
                                      }
                                    })()
                                  }
                                </span>
                              </div>
                              <h3 className="user-title">Change Image</h3>
                            </div>
                          </div>
                          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 user-setting-right">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="theme-input-box">
                                  <label>Display Name</label>
                                  <input className="theme-input" type="text" name="Display Name"
                                         value={name}
                                         onChange={(e) => setName(e.target.value)}
                                         placeholder=""/>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="theme-input-box">
                                  <label>Wallet Address</label>
                                  <input className="theme-input" type="text" name="wallet address"
                                    value={account} onChange={() => {return false;}} placeholder="Please connect a wallet" disabled=""/>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="theme-input-box">
                                  <label>To update your address just change your account in
                                    your wallet.</label>
                                  {/* <textarea className="theme-input"
                                            value={user.details}
                                            onChange={(e) => setUser({...user, details: e.target.value})}
                                            rows="4" placeholder="default"></textarea> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="theme-form-title text-center">
                              <h3 className="theme-title"><span>Social Media</span></h3>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="theme-input-box">
                              <label>Twitter</label>
                              <input className="theme-input" type="text" name="twitter"
                                value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="link to your twitter"/>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="theme-input-box">
                              <label>Cent</label>
                              <input className="theme-input" type="text" name="cent"
                                value={cent} onChange={(e) => setCent(e.target.value)} placeholder="link to your cent"/>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="theme-input-box">
                              <label>Reddit</label>
                              <input className="theme-input" type="text" name="reddit"
                                value={reddit} onChange={(e) => setReddit(e.target.value)} placeholder="link to your reddit"/>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="theme-input-box">
                              <label>Youtube</label>
                              <input className="theme-input" type="text" name="youtube"
                                value={youtube} onChange={(e) => setYoutube(e.target.value)} placeholder="link to your youtube"/>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="theme-input-box">
                              <label>Instagram</label>
                              <input className="theme-input" type="text" name="instagram"
                                value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="link to your instagram"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="theme-input-box text-center" style={{marginTop: 30}}>
                              <button type="button" onClick={saveChanges} className="theme-btn">Save Changes</button>
                            </div>
                          </div>
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

const mapStateToProps = (state, props) => {
  return {
      user: state.user
  };
};


const mapActionsToProps = {
  onSubmitUser: submitUser
}
export default connect(mapStateToProps, mapActionsToProps)(Settings);
