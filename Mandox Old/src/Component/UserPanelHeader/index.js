import React from 'react';

function UserPanelHeader(props) {
  return (
    <div className="user-panel-breadcrumb">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="user-panel-breadcrumb-left">
            <h1>{props.title}</h1>
            <div className="user-link">
              <a href="">https://nft-marketplace/u/aaronrodier</a>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="user-panel-breadcrumb-right clearfix">
            <ul className="clearfix">
              <li>
                <div className="user-top-seller-box">
                  <img src="assets/images/badges.svg" alt=""/>
                  <h4>Top seller</h4>
                </div>
              </li>
              <li>
                <div className="user-setting-box">
                  <a href="/min-item">
                    <i className="fas fa-store"></i>
                    <h4>Create item</h4>
                  </a>
                </div>
              </li>
              <li>
                <div className="user-setting-box">
                  <a href="/settings">
                    <i className="fas fa-cog"></i>
                    <h4>Settings</h4>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPanelHeader;
