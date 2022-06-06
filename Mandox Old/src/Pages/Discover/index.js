import React from 'react';

function Discover() {
  return (
    <div>
      <section className="bradcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="bradcrumb-main">
                <div className="bradcrumb-title">
                  <h1>Discover</h1>
                </div>
                <div className="bradcrumb-right clearfix">
                  <ul className="clearfix">
                    <li><a href="/">Home</a></li>
                    <li>Discover</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="discover-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                <h2 data-watermark="Discover">Discover | Vote | Rate</h2>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <p className="subtitle">We are offering a wide range of WordPress, HTML products and design resources
                  that will come handy in your projects.</p>
              </div>
            </div>
          </div>
          <div className="discover-main-box">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 discover-left">
                <div className="discover-box-images">
                  <div className="discover-img-box">
                    <img src="assets/images/discover.jpg" alt=""/>
                      <div className="discover-title">
                        <h3 className="theme-title">How do you feel about this NFT?</h3>
                        <p className="theme-description">Rate this item!</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 discover-right">
                <div className="discover-box-info">
                  <div className="discover-box-info-top">
                    <h2>Psuedo-Symmetry Series 07</h2>
                    <h3 className="theme-title" style={{fontWeight: 400, color: "#888"}}>Exploring Psychedelia and
                      Symmetry</h3>
                    <p className="theme-description">In the art world, we can discover psychedelia by exploring
                      symmetry. But as is often found in the case of a real psychedelic experience, noise,
                      imperfections, and alien imbalance in the visuals play a key role. I strive to avoid a psychedelia
                      that is fitted with straight edges and jagged lines. In this study, I aim to create a psychedelia
                      that is loosely symmetrical and highly colorful- overlapping geometries and colored layers fuse
                      together to generate unexpected hues and forms, while still maintaining a consistent balance of
                      whites</p>
                    <h3 className="theme-title">Properties:</h3>
                    <ul>
                      <li>- 4000 x 4000px</li>
                      <li>- 3000 px / inch</li>
                      <li>- A lot of good vibes.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="discover-rate-box">
                  <h2>Rate This NFT</h2>
                  <div className="discover-rate-tab">
                    <div className="nft-filter">
                      <ul id="myTabs" className="nav nav-pills nav-justified" role="tablist" data-tabs="tabs">
                        <li><a className="active" href="#discover1" data-toggle="tab">I like it</a></li>
                        <li><a href="#discover2" data-toggle="tab">Beautiful</a></li>
                        <li><a href="#discover3" data-toggle="tab">Innovative!</a></li>
                        <li><a href="#discover4" data-toggle="tab">A Must Buy!</a></li>
                        <li><a href="#discover5" data-toggle="tab">Underpriced</a></li>
                        <li><a href="#discover6" data-toggle="tab">Thumbs down </a></li>
                        <li><a href="#discover7" data-toggle="tab">Overpriced</a></li>
                      </ul>
                    </div>
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane fade in active" id="discover1">
                        <div className="discover-tab-pane-box clearfix">
                          <div className="discover-tab-left">
                            <h2>Voting Results</h2>
                            <div className="discover-process">
                              <div className="discover-process-box">
                                <span>Liked</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "30%"}}></div>
                                </div>
                                <span>30%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Beautiful</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "10%"}}></div>
                                </div>
                                <span>10%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Innovative</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "5%"}}></div>
                                </div>
                                <span>5%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>A Must Buy!</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Underpriced</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "50%"}}></div>
                                </div>
                                <span>50%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Thumbs down</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                            </div>
                          </div>
                          <div className="discover-tab-right">
                            <div className="discover-tab-buy text-center">
                              <h2>Ξ0.013198</h2>
                              <button className="theme-btn">Buy Now</button>
                            </div>
                          </div>
                        </div>
                        <div className="discover-bottom">
                          <button className="theme-btn transparent-btn">Next <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="discover2">
                        <div className="discover-tab-pane-box clearfix">
                          <div className="discover-tab-left">
                            <h2>Voting Results</h2>
                            <div className="discover-process">
                              <div className="discover-process-box">
                                <span>Liked</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "30%"}}></div>
                                </div>
                                <span>30%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Beautiful</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "10%"}}></div>
                                </div>
                                <span>10%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Innovative</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "5%"}}></div>
                                </div>
                                <span>5%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>A Must Buy!</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Underpriced</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "50%"}}></div>
                                </div>
                                <span>50%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Thumbs down</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                            </div>
                          </div>
                          <div className="discover-tab-right">
                            <div className="discover-tab-buy text-center">
                              <h2>Ξ0.013198</h2>
                              <button className="theme-btn">Buy Now</button>
                            </div>
                          </div>
                        </div>
                        <div className="discover-bottom">
                          <button className="theme-btn transparent-btn">Next <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="discover3">
                        <div className="discover-tab-pane-box clearfix">
                          <div className="discover-tab-left">
                            <h2>Voting Results</h2>
                            <div className="discover-process">
                              <div className="discover-process-box">
                                <span>Liked</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "30%"}}></div>
                                </div>
                                <span>30%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Beautiful</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "10%"}}></div>
                                </div>
                                <span>10%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Innovative</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "5%"}}></div>
                                </div>
                                <span>5%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>A Must Buy!</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Underpriced</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "50%"}}></div>
                                </div>
                                <span>50%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Thumbs down</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                            </div>
                          </div>
                          <div className="discover-tab-right">
                            <div className="discover-tab-buy text-center">
                              <h2>Ξ0.013198</h2>
                              <button className="theme-btn">Buy Now</button>
                            </div>
                          </div>
                        </div>
                        <div className="discover-bottom">
                          <button className="theme-btn transparent-btn">Next <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="discover4">
                        <div className="discover-tab-pane-box clearfix">
                          <div className="discover-tab-left">
                            <h2>Voting Results</h2>
                            <div className="discover-process">
                              <div className="discover-process-box">
                                <span>Liked</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "30%"}}></div>
                                </div>
                                <span>30%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Beautiful</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "10%"}}></div>
                                </div>
                                <span>10%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Innovative</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "5%"}}></div>
                                </div>
                                <span>5%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>A Must Buy!</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Underpriced</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "50%"}}></div>
                                </div>
                                <span>50%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Thumbs down</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                            </div>
                          </div>
                          <div className="discover-tab-right">
                            <div className="discover-tab-buy text-center">
                              <h2>Ξ0.013198</h2>
                              <button className="theme-btn">Buy Now</button>
                            </div>
                          </div>
                        </div>
                        <div className="discover-bottom">
                          <button className="theme-btn transparent-btn">Next <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="discover5">
                        <div className="discover-tab-pane-box clearfix">
                          <div className="discover-tab-left">
                            <h2>Voting Results</h2>
                            <div className="discover-process">
                              <div className="discover-process-box">
                                <span>Liked</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "30%"}}></div>
                                </div>
                                <span>30%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Beautiful</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "10%"}}></div>
                                </div>
                                <span>10%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Innovative</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "5%"}}></div>
                                </div>
                                <span>5%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>A Must Buy!</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Underpriced</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "50%"}}></div>
                                </div>
                                <span>50%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Thumbs down</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                            </div>
                          </div>
                          <div className="discover-tab-right">
                            <div className="discover-tab-buy text-center">
                              <h2>Ξ0.013198</h2>
                              <button className="theme-btn">Buy Now</button>
                            </div>
                          </div>
                        </div>
                        <div className="discover-bottom">
                          <button className="theme-btn transparent-btn">Next <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="discover6">
                        <div className="discover-tab-pane-box clearfix">
                          <div className="discover-tab-left">
                            <h2>Voting Results</h2>
                            <div className="discover-process">
                              <div className="discover-process-box">
                                <span>Liked</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "30%"}}></div>
                                </div>
                                <span>30%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Beautiful</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "10%"}}></div>
                                </div>
                                <span>10%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Innovative</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "5%"}}></div>
                                </div>
                                <span>5%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>A Must Buy!</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Underpriced</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "50%"}}></div>
                                </div>
                                <span>50%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Thumbs down</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                            </div>
                          </div>
                          <div className="discover-tab-right">
                            <div className="discover-tab-buy text-center">
                              <h2>Ξ0.013198</h2>
                              <button className="theme-btn">Buy Now</button>
                            </div>
                          </div>
                        </div>
                        <div className="discover-bottom">
                          <button className="theme-btn transparent-btn">Next <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="discover7">
                        <div className="discover-tab-pane-box clearfix">
                          <div className="discover-tab-left">
                            <h2>Voting Results</h2>
                            <div className="discover-process">
                              <div className="discover-process-box">
                                <span>Liked</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "30%"}}></div>
                                </div>
                                <span>30%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Beautiful</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "10%"}}></div>
                                </div>
                                <span>10%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Innovative</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "5%"}}></div>
                                </div>
                                <span>5%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>A Must Buy!</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Underpriced</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "50%"}}></div>
                                </div>
                                <span>50%</span>
                              </div>
                              <div className="discover-process-box">
                                <span>Thumbs down</span>
                                <div className="discover-process-bar">
                                  <div className="progress-bar" style={{width: "80%"}}></div>
                                </div>
                                <span>80%</span>
                              </div>
                            </div>
                          </div>
                          <div className="discover-tab-right">
                            <div className="discover-tab-buy text-center">
                              <h2>Ξ0.013198</h2>
                              <button className="theme-btn">Buy Now</button>
                            </div>
                          </div>
                        </div>
                        <div className="discover-bottom">
                          <button className="theme-btn transparent-btn">Next <i className="fas fa-arrow-right"></i>
                          </button>
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

export default Discover;
