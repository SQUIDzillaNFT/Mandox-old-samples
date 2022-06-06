import React from 'react';

function MinItem() {
  return (
    <div>
      <section className="bradcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="bradcrumb-main">
                <div className="bradcrumb-title">
                  <h1>Create An Item</h1>
                </div>
                <div className="bradcrumb-right clearfix">
                  <ul className="clearfix">
                    <li><a href="/">Home</a></li>
                    <li>Create An Item</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-item-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                <h2 data-watermark="Items">Create An Item</h2>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <p className="subtitle">Now you can list your item for free, there are two options available for that if
                  the item is already in your wallet or you want to create a new one.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="min-item-box clearfix">
                <div className="min-item-item text-center" data-toggle="modal" data-target="#nft-wallet">
                  <div className="min-item-ico">
                    <span className="min-item-left"></span>
                  </div>
                  <h3 className="theme-title">The NFT Is Already In My Wallet</h3>
                </div>
                <div className="min-item-item text-center" data-toggle="modal" data-target="#traditional-gasless">
                  <div className="min-item-ico">
                    <span className="min-item-write"></span>
                  </div>
                  <h3 className="theme-title">Create A New Item</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade" id="nft-wallet" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="fas fa-times"></i></span>
              </button>
              <div className="theme-model-popup">
                <div className="theme-model-popup-header text-center">
                  <h3>Identify this item on the blockchain</h3>
                  <p className="theme-description">This is for items you already own in your wallet. Start by entering
                    the Token ID and Address of the item on the blockchain</p>
                </div>
                <div className="theme-model-popup-info">
                  <div className="blockchain-popup-box">
                    <div className="nft-input-box validate-input" data-validate="Name is required">
                      <span className="label-nft-input">Token ID</span>
                      <input className="nft-input" type="text" name="name"
                             placeholder="Ex.tok_1IYN0u2eZvKYlo2CP88d9HEC"/>
                        <span className="focus-nft-input"></span>
                    </div>
                    <div className="nft-input-box validate-input" data-validate="Name is required">
                      <span className="label-nft-input">Token Address</span>
                      <input className="nft-input" type="text" name="name"
                             placeholder="Ex.ca_FkyHCg7X8mlvCUdMDao4mMxagUfhIwXb"/>
                        <span className="focus-nft-input"></span>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="theme-btn">Proceed</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade traditional-gasless-popup" id="traditional-gasless" tabIndex="-1" role="dialog"
           aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="fas fa-times"></i></span>
              </button>
              <div className="theme-model-popup">
                <div className="theme-model-popup-header text-center">
                  <h3>Traditional or gasless?</h3>
                  <p className="theme-description">Is the item live on the blockchain or is it a new item you want to
                    make?</p>
                </div>
                <div className="traditional-gasless-main clearfix mt-5">
                  <div className="traditional-easy-box">
                    <div className="traditional-gasless-item text-center" style={{marginTop: 0}}>
                      <a href="/gasless">
                        <h3 className="theme-title">Create a new item</h3>
                        <div className="traditional-gasless-icon">
                          <span className="min-item-write"></span>
                        </div>
                        <p className="theme-description">No transaction fee - completely free</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinItem;
