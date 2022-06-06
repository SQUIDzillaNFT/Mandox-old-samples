import React from 'react';

function CreateStore() {
  return (
    <div>
      <section className="bradcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="bradcrumb-main">
                <div className="bradcrumb-title">
                  <h1>Create Store</h1>
                </div>
                <div className="bradcrumb-right clearfix">
                  <ul className="clearfix">
                    <li><a href="/">Home</a></li>
                    <li>Create Store</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>>
      <section className="gasless-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                <h2 data-watermark="Sale">Create Store</h2>
                <p className="subtitle">Start selling your items, all you need is your store to put items. So begin
                  creating your store and start listing items in it.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 offset-xl-2 offset-lg-2 offset-md-2">
              <div className="mint-item-main-box">
                <div className="easy-box">
                  <div className="mint-item-form">
                    <div className="theme-input-box">
                      <label>What kind of item are you making?</label>
                      <ul className="list-select-item clearfix">
                        <li><span className="active">Art</span></li>
                        <li><span>Collectibles</span></li>
                        <li><span>Game Items</span></li>
                        <li><span>Music</span></li>
                        <li><span>Domains</span></li>
                        <li><span>Templates</span></li>
                        <li><span>Videos</span></li>
                      </ul>
                    </div>
                    <div className="theme-input-box">
                      <label>Store title <i className="fas fa-exclamation-circle" data-toggle="tooltip"
                                            data-placement="top"
                                            title="This is the name of the listing on Mintable - can be the same as the name"></i></label>
                      <input className="theme-input" type="text" name="store title"/>
                    </div>
                    <div className="theme-input-box">
                      <label>Store sub-title <i className="fas fa-exclamation-circle" data-toggle="tooltip"
                                                data-placement="top" title="This is the listing subtitle"></i></label>
                      <input className="theme-input" type="text" name="sub title"/>
                    </div>
                    <div className="theme-input-box">
                      <label>Store tags</label>
                      <input className="theme-input" type="text" name="store tags"/>
                        <p className="theme-description" style={{marginTop: "8px"}}><i
                          className="fas fa-exclamation-circle" data-toggle="tooltip" data-placement="top"
                          title="This is the listing subtitle"></i> Tags to help your items become more searchable.
                          Seperate your tags with a 'comma'</p>
                    </div>
                    <div className="theme-input-box">
                      <label>Upload preview image for your store <i className="fas fa-exclamation-circle"
                                                                    data-toggle="tooltip" data-placement="top"
                                                                    title="This is a private file that only the owner of your NFT can download. Max size 2gb, any file type accepted"></i></label>
                      <div className="theme-file-upload text-center">
                        <div className="file-upload-ico">
                          <img src="assets/images/addfiles.svg" alt=""/>
                        </div>
                        <h3 className="theme-title">Choose Photo</h3>
                        <p className="theme-description">(items may be audio, video, image, files, ZIP, documents and
                          many more)</p>
                      </div>
                    </div>
                    <div className="theme-input-box">
                      <label>Listing subtitle</label>
                      <textarea className="theme-input" id="editor" rows="4"></textarea>
                      <div className="Listing-checkbox">
                        <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1"/>
                      </div>
                    </div>
                    <div className="theme-input-box">
                      <label>Where do you want to store your data?</label>
                      <p className="theme-description" style={{marginBottom: "8px"}}><i
                        className="fas fa-exclamation-circle" data-toggle="tooltip" data-placement="top"
                        title="This is a private file that only the owner of your NFT can download. Max size 2gb, any file type accepted"></i> The
                        location of your data is stored on the smart contract and cannot be changed later.</p>
                      <select className="theme-input">
                        <option>Mintable</option>
                        <option>IPFS (Cannot batch mint)</option>
                        <option>My own servers (Super Advanced, please read the docs)</option>
                      </select>
                      <p className="theme-description" style={{marginTop: "8px"}}>Advanced - only adjust if you know what
                        you're doing</p>
                    </div>
                    <div className="theme-input-box">
                      <div className="Listing-checkbox">
                        <input className="styled-checkbox" id="styled-checkbox-10" type="checkbox" value="value1"
                               checked=""/>
                          <label
                            htmlFor="styled-checkbox-10"><span>Increase Batch Minting <b>(FREE 50 batch!)</b></span></label>
                      </div>
                    </div>
                    <div className="theme-input-box">
                      <div className="minting-plan-main clearfix">
                        <div className="minting-plan-box">
                          <div className="minting-label">
                            <span>Free</span>
                          </div>
                          <p className="theme-description minting-plan-top">Batch mint</p>
                          <h2>50</h2>
                          <p className="theme-description minting-plan-bottom">Tokens</p>
                        </div>
                        <div className="minting-plan-box">
                          <div className="minting-label">
                            <span>$10</span>
                          </div>
                          <p className="theme-description minting-plan-top">Batch mint</p>
                          <h2>75</h2>
                          <p className="theme-description minting-plan-bottom">Tokens</p>
                        </div>
                        <div className="minting-plan-box">
                          <div className="minting-label">
                            <span>$20</span>
                          </div>
                          <p className="theme-description minting-plan-top">Batch mint</p>
                          <h2>125</h2>
                          <p className="theme-description minting-plan-bottom">Tokens</p>
                        </div>
                        <div className="minting-plan-box">
                          <div className="minting-label">
                            <span>$50</span>
                          </div>
                          <p className="theme-description minting-plan-top">Batch mint</p>
                          <h2>250</h2>
                          <p className="theme-description minting-plan-bottom">Tokens</p>
                        </div>
                        <div className="minting-plan-box">
                          <div className="minting-label">
                            <span>$99</span>
                          </div>
                          <p className="theme-description minting-plan-top">Batch mint</p>
                          <h2>2000</h2>
                          <p className="theme-description minting-plan-bottom">Tokens</p>
                        </div>
                      </div>
                    </div>
                    <div className="theme-input-box">
                      <p className="theme-description"><i className="fas fa-exclamation-circle" data-toggle="tooltip"
                                                          data-placement="top"
                                                          title="This is a private file that only the owner of your NFT can download. Max size 2gb, any file type accepted"></i> One
                        time cost to unlock making many tokens with one transaction (saves on gas costs), forever.</p>
                      <label style={{fontWeight: 800}}>Royalty amount - 0%</label>
                      <p className="theme-description"><i className="fas fa-exclamation-circle" data-toggle="tooltip"
                                                          data-placement="top"
                                                          title="Get this amount back everytime an item is sold in a secondary sale."></i> Get
                        this amount back everytime an item is sold in a secondary sale.</p>
                      <div className="price-range-slider">
                        <div id="slider-range" className="range-bar"></div>
                      </div>
                    </div>
                    <div className="theme-fix-btn">
                      <button className="theme-btn" data-toggle="modal" data-target="#create-store">Process</button>
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

export default CreateStore;
