import React, {useState} from 'react'
import DashboardHeader from "../../Component/DashboardHeader";
import UserPanelHeader from "../../Component/UserPanelHeader";
import {toast} from "react-toastify";
import {auth, firestore, storage} from "../../firebase";
import {eventBus} from "../../Utils/EventBus";
import "./style.css";

function Settings() {

  const [avatar, setAvatar] = useState(JSON.parse(localStorage.getItem('authUser')).avatar);
  const [avatarFile, setAvatarFile] = useState('');
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');


  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));


  const saveChanges = async() => {
    if (newPass !== '') {
      auth
        .signInWithEmailAndPassword(user.email, oldPass)
        .then(async (res) => {
          await res.user.updatePassword(newPass);
          toast.success("Updated password successfully")
        })
        .catch((error) => {
          toast.error(error);
        });
    }

    if (avatarFile === '') {
      firestore.collection("users").doc(user.id).update
      ({
        name: user.name,
        details: user.details
      }).then(() => {
        localStorage.setItem('authUser', JSON.stringify(user));
        toast.success("Updated Profile successfully");
      });
    } else {
      const uploadTask = storage.ref(`/images/${avatarFile.name}`).put(avatarFile)
      //initiates the firebase side uploading
      uploadTask.on('state_changed',
        (snapShot) => {
          console.log(snapShot)
        }, (err) => {
          console.log(err)
        }, () => {
          storage.ref('images').child(avatarFile.name).getDownloadURL()
            .then(fireBaseUrl => {
              setAvatar(fireBaseUrl);
              firestore.collection("users").doc(user.id).update
              ({
                avatar: fireBaseUrl,
                name: user.name,
                details: user.details
              }).then(() => {
                setUser({...user, avatar: fireBaseUrl});
                localStorage.setItem('authUser', JSON.stringify({...user, avatar: fireBaseUrl}));
                eventBus.dispatch("updateAvatar", { newUser: JSON.stringify({...user, avatar: fireBaseUrl}) });
                toast.success("Updated profile successfully");
              });
            })
        })
    }
  }

  const handleAvatar = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg, image/png, image/gif";
    input.onchange = (event) => {
      const target = event.target;
      const files = target.files;
      const file = files[0];
      setAvatar(URL.createObjectURL(file));
      setAvatarFile(file);
    };
    input.click();
  }
  return (
    <div>
      <DashboardHeader />
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="My Profile" />
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="user-setting-box-area">
                        <div className="row user-setting-box-top">
                          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 user-setting-left">
                            <div className="setting-change-profile text-center">
                              <div className="change-profile-icon" onClick={handleAvatar}>
                                <span><img src={avatar}/></span>
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
                                         value={user.name}
                                         onChange={(e) => setUser({...user, name: e.target.value})}
                                         placeholder="Stefan Harary"/>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="theme-input-box">
                                  <label>Wallet Address</label>
                                  <input className="theme-input" type="text" name="wallet address"
                                         placeholder="Please connect a wallet" disabled=""/>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="theme-input-box">
                                  <label>To update your address just change your account in
                                    your wallet.</label>
                                  <textarea className="theme-input"
                                            value={user.details}
                                            onChange={(e) => setUser({...user, details: e.target.value})}
                                            rows="4" placeholder="default"></textarea>
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
                                     placeholder="link to your twitter"/>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="theme-input-box">
                              <label>Cent</label>
                              <input className="theme-input" type="text" name="cent" placeholder="link to your cent"/>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="theme-input-box">
                              <label>Reddit</label>
                              <input className="theme-input" type="text" name="reddit"
                                     placeholder="link to your reddit"/>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="theme-input-box">
                              <label>Youtube</label>
                              <input className="theme-input" type="text" name="youtube"
                                     placeholder="link to your youtube"/>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="theme-input-box">
                              <label>Instagram</label>
                              <input className="theme-input" type="text" name="instagram"
                                     placeholder="link to your instagram"/>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="theme-input-box">
                              <div className="Listing-checkbox">
                                <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox"
                                       value="value1"/>
                                  <label htmlFor="styled-checkbox-1"><span><b>Disable email notifications.</b> (You won't recieve ANY emails from Mintable if you do this - including important ones related to your account security or purchases)</span></label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="theme-form-title text-center">
                              <h3 className="theme-title"><span>Change your password</span></h3>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="theme-input-box">
                              <label>Current Password</label>
                              <input className="theme-input" type="password" name="current password"
                                     onChange={(e) => setOldPass(e.target.value)}
                                     placeholder="Enter current password"/>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="theme-input-box">
                              <label>New Password</label>
                              <input className="theme-input" type="password" name="new password"
                                     onChange={(e) => setNewPass(e.target.value)}
                                     placeholder="Enter new password"/>
                            </div>
                          </div>
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

export default Settings
