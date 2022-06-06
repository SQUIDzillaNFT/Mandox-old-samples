import React from 'react';
import DashboardHeader from "../DashboardHeader";
import UserPanelHeader from "../UserPanelHeader";

function Reviews() {
  return (
    <div>
      <DashboardHeader/>
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="My Reviews"/>
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="user-ratting-select clearfix">
                        <div className="theme-input-box">
                          <label>Search by rating</label>
                          <select className="theme-input">
                            <option>All</option>
                            <option>5 Star</option>
                            <option>4 Star</option>
                            <option>3 Star</option>
                            <option>2 Star</option>
                            <option>1 Star</option>
                          </select>
                        </div>
                      </div>
                      <div className="user-review-list-box">
                        <div className="user-review-list">
                          <div className="user-review-authore">
                            <img src="assets/images/category/game/art_6.gif" alt=""/>
                            <div className="review-authore-detail">
                              <h3 className="user-theme-title">Amazing Oil Painting Of Man In Grey Hat</h3>
                              <h4>Stefan Harary</h4>
                              <p className="theme-description">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since
                                the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                type
                                specimen book.</p>
                            </div>
                            <div className="reviews-box">
                              <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                              className="fas fa-star"></i><i className="fas fa-star"></i><i
                              className="fas fa-star-half-alt"></i> <span>(3 Days ago)</span>
                            </div>
                          </div>
                          <div className="user-review-bottom">
                            <h3 className="theme-title">By - <span>Nina Holloway</span></h3>
                          </div>
                        </div>
                        <div className="user-review-list">
                          <div className="user-review-authore">
                            <img src="assets/images/category/game/art_1.png" alt=""/>
                            <div className="review-authore-detail">
                              <h3 className="user-theme-title">Amazing Oil Painting Of Man In Grey Hat</h3>
                              <h4>Stefan Harary</h4>
                              <p className="theme-description">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since
                                the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                type
                                specimen book.</p>
                            </div>
                            <div className="reviews-box">
                              <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                              className="fas fa-star"></i><i className="fas fa-star"></i><i
                              className="fas fa-star-half-alt"></i> <span>(3 Days ago)</span>
                            </div>
                          </div>
                          <div className="user-review-bottom">
                            <h3 className="theme-title">By - <span>Nina Holloway</span></h3>
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

export default Reviews;
