import React from 'react';

function Gasless() {
  return (
    <div>
      <section className="bradcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="bradcrumb-main">
                <div className="bradcrumb-title">
                  <h1>Sell</h1>
                </div>
                <div className="bradcrumb-right clearfix">
                  <ul className="clearfix">
                    <li><a href="/">Home</a></li>
                    <li><a href="/min-item">Store</a></li>
                    <li>Sell</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gasless-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                <h2 data-watermark="Sale">Create and List an item for sale</h2>
                <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard?</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 offset-xl-2 offset-lg-2 offset-md-2">
              <div className="default-switch">
                <span className="switch-label">Advanced</span>
                <label className="switch">
                  <input type="checkbox" id="btn-check" checked=""/>
                    <span className="slider round"></span>
                </label>
                <span className="switch-label" style={{marginRight: 0}}>Easy</span>
              </div>
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
                      <label>Listing title <i className="fas fa-exclamation-circle" data-toggle="tooltip"
                                              data-placement="top"
                                              title="This is the name of the listing on Mintable - can be the same as the name"></i></label>
                      <input className="theme-input" type="text" name="listing title"/>
                    </div>
                    <div className="theme-input-box">
                      <label>Listing subtitle <i className="fas fa-exclamation-circle" data-toggle="tooltip"
                                                 data-placement="top" title="This is the listing subtitle"></i></label>
                      <input className="theme-input" type="text" name="listing subtitle"/>
                    </div>
                    <div className="theme-input-box">
                      <label>Upload a private/unlockable item file. <i className="fas fa-exclamation-circle"
                                                                       data-toggle="tooltip" data-placement="top"
                                                                       title="This is a private file that only the owner of your NFT can download. Max size 2gb, any file type accepted"></i></label>
                      <div className="theme-file-upload text-center">
                        <div className="file-upload-ico">
                          <img src="assets/images/addfiles.svg" alt=""/>
                        </div>
                        <h3 className="theme-title">Click to add your private file</h3>
                        <p className="theme-description">(items may be audio, video, image, files, ZIP, documents and
                          many more)</p>
                      </div>
                    </div>
                    <div className="theme-input-box">
                      <label style={{margin: 0}}>Upload item preview images. <i className="fas fa-exclamation-circle"
                                                                                 data-toggle="tooltip"
                                                                                 data-placement="top"
                                                                                 title="These are the images people will see when browsing your NFT. The first image uploaded is the image on the token"></i></label>
                      <p className="theme-description">The first preview image you upload will be displayed on <b>all
                        wallets as the token image!</b> (.GLB files will be displayed in an interactive 3D viewer)</p>
                      <div className="upload-images-box clearfix">
                        <div className="upload-images-item">
                          <i className="fas fa-plus"></i>
                          <p className="theme-description">Add Images</p>
                        </div>
                      </div>
                    </div>
                    <div className="theme-input-box">
                      <label>Listing subtitle</label>
                      <textarea className="theme-input" id="editor" rows="4"></textarea>
                      <div className="Listing-checkbox">
                        <input className="styled-checkbox" id="styled-checkbox-0" type="checkbox" value="value2"/>
                          <label htmlFor="styled-checkbox-0"><span>Transfer Copyright when purchased? <i
                            className="fas fa-exclamation-circle" data-toggle="tooltip" data-placement="top"
                            title="When a buyer purchases this item, they have the rights to use the file commercially."></i></span></label>
                      </div>
                    </div>
                    <div className="theme-form-title text-center">
                      <h3 className="theme-title"><span>Fixed price - in USD</span></h3>
                    </div>
                    <div className="fixed-price-tab-box">
                      <div className="nft-filter">
                        <ul id="myTabs2" className="nav nav-pills nav-justified" role="tablist" data-tabs="tabs">
                          <li><a className="active" href="#fixed" data-toggle="tab">Fixed</a></li>
                          <li><a href="#action" data-toggle="tab">Auction</a></li>
                          <li><a href="#auction-buy-now" data-toggle="tab">Auction with Buy Now</a></li>
                        </ul>
                      </div>
                      <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active" id="fixed1">
                          <div className="theme-box-center">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="theme-input-box">
                                  <label>Fixed price - in USD</label>
                                  <input className="theme-input" type="number" name="price" placeholder="$0.00"/>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="fix-price-value">
                                  <h3 className="theme-title" style={{color: "#f39953"}}>Price in ETH: 0.000000</h3>
                                  <p className="theme-description">Current ETH price: 1 ETH = $1691.64</p>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="theme-fix-btn">
                                  <button className="theme-btn">List this Item</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="action1">
                          <div className="theme-box-center">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="theme-input-box">
                                  <label>Starting bid price - in USD</label>
                                  <input className="theme-input" type="number" name="starting bids" placeholder="$0.00"/>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="fix-price-value">
                                  <h3 className="theme-title" style={{color: "#f39910"}}>Price in ETH: 0.000000</h3>
                                  <p className="theme-description">Current ETH price: 1 ETH = $1702.76</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="theme-input-box">
                                <label>Auction length</label>
                                <select className="theme-input">
                                  <option value="43200">12 hours</option>
                                  <option value="86400">24 hours</option>
                                  <option value="172800">2 days</option>
                                  <option value="259200">3 days</option>
                                  <option value="604800">7 days</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="theme-fix-btn">
                                <button className="theme-btn">List this Item</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="auction-buy-now1">
                          <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="theme-input-box">
                                <label>Starting bid price - in USD</label>
                                <input className="theme-input" type="number" name="starting bids price"
                                       placeholder="$0.00"/>
                                  <div className="fix-price-value" style={{marginTop: "10px"}}>
                                    <h3 className="theme-title" style={{color: "#f39910"}}>Price in ETH: 0.000000</h3>
                                    <p className="theme-description">Current ETH price: 1 ETH = $1704.15</p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="theme-input-box">
                                <label>Buy now price - in USD</label>
                                <input className="theme-input" type="number" name="buy now price" placeholder="$0.00"/>
                                  <div className="fix-price-value" style={{marginTop: "10px"}}>
                                    <h3 className="theme-title" style={{color: "#f39910"}}>Price in ETH: 0.000000</h3>
                                  </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="theme-input-box">
                                <label>Auction length</label>
                                <select className="theme-input">
                                  <option value="43200">12 hours</option>
                                  <option value="86400">24 hours</option>
                                  <option value="172800">2 days</option>
                                  <option value="259200">3 days</option>
                                  <option value="604800">7 days</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="theme-fix-btn">
                                <button className="theme-btn">List this Item</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="advanced-box" style={{display: "none"}}>
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
                    <div className="Listing-checkbox">
                      <input className="styled-checkbox" id="styled-checkbox-30" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-30"><span>Batch mint multiple tokens <i
                          className="fas fa-exclamation-circle" data-toggle="tooltip" data-placement="top" title=""
                          data-original-title="Create and list many tokens in a single transaction"></i></span></label>
                    </div>
                    <div className="theme-input-box">
                      <label>Token name <i className="fas fa-exclamation-circle" data-toggle="tooltip"
                                           data-placement="top"
                                           title="This is the name of the NFT on the blockchain that will be displayed everywhere"></i></label>
                      <input className="theme-input" type="text" name="token name"/>
                    </div>
                    <div className="theme-input-box">
                      <label>Listing title <i className="fas fa-exclamation-circle" data-toggle="tooltip"
                                              data-placement="top"
                                              title="This is the name of the listing on Mintable - can be the same as the name"></i></label>
                      <input className="theme-input" type="text" name="listing title"/>
                    </div>
                    <div className="theme-input-box">
                      <label>Listing subtitle <i className="fas fa-exclamation-circle" data-toggle="tooltip"
                                                 data-placement="top" title="This is the listing subtitle"></i></label>
                      <input className="theme-input" type="text" name="listing subtitle"/>
                    </div>
                    <div className="theme-input-box">
                      <label>Listing tags <i className="fas fa-exclamation-circle" data-toggle="tooltip"
                                             data-placement="top"
                                             title="Use a comma, tab, or enter to seperate your tags. Tags help your items become more searchable."></i></label>
                      <input className="theme-input" type="text" name="listing tags" placeholder="Add a tag"/>
                    </div>
                    <div className="theme-input-box">
                      <label>Upload a private/unlockable item file. <i className="fas fa-exclamation-circle"
                                                                       data-toggle="tooltip" data-placement="top"
                                                                       title="This is a private file that only the owner of your NFT can download. Max size 2gb, any file type accepted"></i></label>
                      <div className="theme-file-upload text-center">
                        <div className="file-upload-ico">
                          <img src="assets/images/addfiles.svg" alt=""/>
                        </div>
                        <h3 className="theme-title">Click to add your private file</h3>
                        <p className="theme-description">(items may be audio, video, image, files, ZIP, documents and
                          many more)</p>
                      </div>
                    </div>
                    <div className="theme-input-box">
                      <label style={{margin: 0}}>Upload item preview images. <i className="fas fa-exclamation-circle"
                                                                                 data-toggle="tooltip"
                                                                                 data-placement="top"
                                                                                 title="These are the images people will see when browsing your NFT. The first image uploaded is the image on the token"></i></label>
                      <p className="theme-description">The first preview image you upload will be displayed on <b>all
                        wallets as the token image!</b> (.GLB files will be displayed in an interactive 3D viewer)</p>
                      <div className="upload-images-box clearfix">
                        <div className="upload-images-item">
                          <i className="fas fa-plus"></i>
                          <p className="theme-description">Add Images</p>
                        </div>
                      </div>
                    </div>
                    <div className="theme-form-title text-center">
                      <h3 className="theme-title"><span>Other Metadata</span></h3>
                    </div>
                    <div className="theme-input-box">
                      <p className="theme-description">Add extra data on your token (maximum of 20 data allowed)</p>
                      <label>Name of your data</label>
                      <input className="theme-input" type="text" name="data" placeholder="Enter a name for data"/>
                    </div>
                    <div className="theme-input-box">
                      <label>Value of your data</label>
                      <input className="theme-input" type="text" name="value" placeholder="Value of your data"/>
                        <div className="data-value-btn">
                          <button className=""><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="theme-input-box">
                      <label>Listing subtitle</label>
                      <textarea className="theme-input" id="advance-editor" rows="4"></textarea>
                      <div className="Listing-checkbox">
                        <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1"/>
                          <label htmlFor="styled-checkbox-1"><span>Transfer Copyright when purchased? <i
                            className="fas fa-exclamation-circle" data-toggle="tooltip" data-placement="top"
                            title="When a buyer purchases this item, they have the rights to use the file commercially."></i></span></label>
                      </div>
                    </div>
                    <div className="theme-input-box">
                      <div className="Listing-checkbox">
                        <input className="styled-checkbox" id="styled-checkbox-20" type="checkbox" value="value1"
                               checked=""/>
                          <label htmlFor="styled-checkbox-20"><span>Allow buyer to resell? <i
                            className="fas fa-exclamation-circle" data-toggle="tooltip" data-placement="top"
                            title="A buyer can resell this item for a different price after purchasing it."></i></span></label>
                      </div>
                    </div>
                    <div className="theme-form-title text-center">
                      <h3 className="theme-title"><span>Fixed price - in USD</span></h3>
                    </div>
                    <div className="fixed-price-tab-box">
                      <div className="nft-filter">
                        <ul id="myTabs1" className="nav nav-pills nav-justified" role="tablist" data-tabs="tabs">
                          <li><a className="active" href="#fixed" data-toggle="tab">Fixed</a></li>
                          <li><a href="#action" data-toggle="tab">Auction</a></li>
                          <li><a href="#auction-buy-now" data-toggle="tab">Auction with Buy Now</a></li>
                        </ul>
                      </div>
                      <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active" id="fixed2">
                          <div className="theme-box-center">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="theme-input-box">
                                  <label>Fixed price - in USD</label>
                                  <input className="theme-input" type="number" name="fix price" placeholder="$0.00"/>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="fix-price-value">
                                  <h3 className="theme-title" style={{color: "#f39910"}}>Price in ETH: 0.000000</h3>
                                  <p className="theme-description">Current ETH price: 1 ETH = $1691.64</p>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="theme-fix-btn">
                                  <button className="theme-btn">List this Item</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="action">
                          <div className="theme-box-center">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="theme-input-box">
                                  <label>Starting bid price - in USD</label>
                                  <input className="theme-input" type="number" name="starting bid" placeholder="$0.00"/>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="fix-price-value">
                                  <h3 className="theme-title" style={{color: "#f39910"}}>Price in ETH: 0.000000</h3>
                                  <p className="theme-description">Current ETH price: 1 ETH = $1702.76</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="theme-input-box">
                                <label>Auction length</label>
                                <select className="theme-input">
                                  <option value="43200">12 hours</option>
                                  <option value="86400">24 hours</option>
                                  <option value="172800">2 days</option>
                                  <option value="259200">3 days</option>
                                  <option value="604800">7 days</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="theme-fix-btn">
                                <button className="theme-btn">List this Item</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="auction-buy-now">
                          <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="theme-input-box">
                                <label>Starting bid price - in USD</label>
                                <input className="theme-input" type="number" name="starting bid" placeholder="$0.00"/>
                                  <div className="fix-price-value" style={{marginTop: "10px"}}>
                                    <h3 className="theme-title" style={{color: "#f39910"}}>Price in ETH: 0.000000</h3>
                                    <p className="theme-description">Current ETH price: 1 ETH = $1704.15</p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="theme-input-box">
                                <label>Buy now price - in USD</label>
                                <input className="theme-input" type="number" name="buy now" placeholder="$0.00"/>
                                  <div className="fix-price-value" style={{marginTop: "10px"}}>
                                    <h3 className="theme-title" style={{color: "#f39910"}}>Price in ETH: 0.000000</h3>
                                  </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="theme-input-box">
                                <label>Auction length</label>
                                <select className="theme-input">
                                  <option value="43200">12 hours</option>
                                  <option value="86400">24 hours</option>
                                  <option value="172800">2 days</option>
                                  <option value="259200">3 days</option>
                                  <option value="604800">7 days</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="theme-fix-btn">
                                <button className="theme-btn">List this Item</button>
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
        </div>
      </section>
    </div>
  )
}

export default Gasless;
