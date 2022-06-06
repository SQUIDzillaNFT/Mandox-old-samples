import React, {useState} from "react";
import NftCard from "../../Component/NftCard";
import {dummyNftData} from "../../Utils/dummyData";

function Browse() {
  const [createdFilter, setCreatedFilter] = useState("newest");
  const [priceFilter, setPriceFilter] = useState("lowToHigh");
  const [sortMethod, setSortMethod] = useState("price");
  const [auctionFilter, setAuctionFilter] = useState("all");
  const [filterStr, setFilter] = useState("");

  const [nfts, setNfts] = useState(dummyNftData);

  const [categoryFilter, setCategoryFilter] = useState([]);
  const [copyRightFilter, setCopyRightFilter] = useState(false);
  const [resellableFilter, setResellableFilter] = useState(false);
  const [priceRangeFilter, setPriceRangeFilter] = useState([]);

  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      <section className="bradcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="bradcrumb-main">
                <div className="bradcrumb-title">
                  <h1>Browse</h1>
                </div>
                <div className="bradcrumb-right clearfix">
                  <ul className="clearfix">
                    <li><a href="/">Home</a></li>
                    <li>Browse</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="browse-product-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="browse-product-filter">
                <div className="filter-box">
                  <h3 className="theme-title">Categories</h3>
                  <div className="filter-menu">
                    <ul>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-1"><span>Art</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-2"><span>Collectibles</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-3" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-3"><span>Game Items</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-4" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-4"><span>Music</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-5" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-5"><span>Domains</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-6" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-6"><span>Templates</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-7" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-7"><span>Videos</span></label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-box">
                  <h3 className="theme-title">Other options</h3>
                  <div className="filter-menu">
                    <ul>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-8" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-8"><span>Copyright transfer</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-9" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-9"><span>Resellable</span></label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-box">
                  <h3 className="theme-title">Sort by</h3>
                  <div className="filter-menu">
                    <ul>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-10" type="checkbox" value="value1"
                               checked=""/>
                        <label htmlFor="styled-checkbox-10"><span>Newest</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-11" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-11"><span>Oldest</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-12" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-12"><span>Price - Low to high</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-13" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-13"><span>Price - High to low</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-14" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-14"><span>Auctions only</span></label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-box">
                  <h3 className="theme-title">Price</h3>
                  <div className="filter-menu">
                    <ul>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-15" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-15"><span>$1 - $5.99</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-16" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-16"><span>$6 - $14.99</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-17" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-17"><span>$15 - $29.99</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-18" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-18"><span>$30 - $74.99</span></label>
                      </li>
                      <li>
                        <input className="styled-checkbox" id="styled-checkbox-19" type="checkbox" value="value1"/>
                        <label htmlFor="styled-checkbox-19"><span>$75 - $100+</span></label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="browse-product-top">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="browse-product-left">
                      <div className="browse-search-box">
                        <input className="browse-search-input" type="" name="" placeholder="Search..."/>
                        <button className="browse-search-btn"><i className="fas fa-search"></i></button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="browse-product-right clearfix">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item"><a className="browse-list nav-link active" data-toggle="tab"
                                                    href="#view-store-grid" role="tab" data-placement="top"
                                                    title="View Stores"><i className="fas fa-th-large"></i></a></li>
                        <li className="nav-item"><a className="browse-list nav-link" data-toggle="tab"
                                                    href="#view-store" role="tab" data-placement="top"
                                                    title="View Stores"><i className="fas fa-th-list"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="browse-product-box">
                <div className="tab-content">
                  <div className="tab-pane active" id="view-store-grid" role="tabpanel">
                    <div className="row">
                      {
                        (dummyNftData
                          .map((cardData, index) =>
                            (
                              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                                <NftCard data={cardData}/>
                              </div>
                            )
                          ))
                      }
                    </div>
                  </div>
                  <div className="tab-pane" id="view-store" role="tabpanel">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="view-store-item">
                          <span className="store-label">Boosted</span>
                          <div className="view-store-box">
                            <div className="view-store-images">
                              <a href=""><img src="assets/images/category/template/art_1.png"
                                              alt="Catagory-template-art-piece-image"/></a>
                            </div>
                            <div className="view-store-info">
                              <h3 className="theme-title"><a href="/view-detail">Get Best Template Here</a></h3>
                              <div className="store-ratting">
                                <i className="fas fa-star-half-alt"></i><i className="fas fa-star-half-alt"></i><i
                                className="fas fa-star-half-alt"></i><i className="fas fa-star-half-alt"></i><i
                                className="fas fa-star-half-alt"></i> (4.5)
                              </div>
                              <ul>
                                <li>Store : <span>StidioFest (3 Items)</span></li>
                                <li>Owner : <span>StidioFest</span></li>
                              </ul>
                              <div className="item-group-box clearfix">
                                <div className="item-group-timer">
                                  <ul className="clearfix">
                                    <li><span>01</span> Hour</li>
                                    <li><span>55</span> Min</li>
                                    <li><span>00</span> Sec</li>
                                  </ul>
                                </div>
                                <div className="item-group-bid">
                                  <p className="theme-description">Starting bid:</p>
                                  <h2>$ 0.980</h2>
                                </div>
                              </div>
                              <div className="item-group-btn">
                                <a className="theme-btn" href="/buy-detail">Buy Now</a>
                              </div>
                            </div>
                          </div>
                          <p className="theme-description browse-description">We have make really perfect template for
                            website with great features and customizable option.</p>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="view-store-item">
                          <span className="store-label">Boosted</span>
                          <div className="view-store-box">
                            <div className="view-store-images">
                              <a href=""><img src="assets/images/category/template/art_2.png"
                                              alt="Catagory-template-art-piece-image"/></a>
                            </div>
                            <div className="view-store-info">
                              <h3 className="theme-title"><a href="/view-detail">Are Looking For Amazing
                                Template</a></h3>
                              <div className="store-ratting">
                                <i className="fas fa-star-half-alt"></i><i className="fas fa-star-half-alt"></i><i
                                className="fas fa-star-half-alt"></i><i className="fas fa-star-half-alt"></i><i
                                className="far fa-star"></i> (3.5)
                              </div>
                              <ul>
                                <li>Store : <span>StidioFest (3 Items)</span></li>
                                <li>Owner : <span>StidioFest</span></li>
                              </ul>
                              <div className="item-group-box clearfix">
                                <div className="item-group-timer">
                                  <ul className="clearfix">
                                    <li><span>01</span> Hour</li>
                                    <li><span>55</span> Min</li>
                                    <li><span>00</span> Sec</li>
                                  </ul>
                                </div>
                                <div className="item-group-bid">
                                  <p className="theme-description">Starting bid:</p>
                                  <h2>$ 0.980</h2>
                                </div>
                              </div>
                              <div className="item-group-btn">
                                <a className="theme-btn" href="/buy-detail">Buy Now</a>
                              </div>
                            </div>
                          </div>
                          <p className="theme-description browse-description">Best looking template for you website or
                            app with great widgets and many more amazing features.</p>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="view-store-item">
                          <span className="store-label">Boosted</span>
                          <div className="view-store-box">
                            <div className="view-store-images">
                              <a href=""><img src="assets/images/category/template/art_3.png" alt=""/></a>
                            </div>
                            <div className="view-store-info">
                              <h3 className="theme-title"><a href="/view-detail">Get Full Package Of Templates And
                                Icon</a></h3>
                              <div className="store-ratting">
                                <i className="far fa-star"></i><i className="far fa-star"></i><i
                                className="far fa-star"></i><i className="far fa-star"></i><i
                                className="far fa-star"></i> (0)
                              </div>
                              <ul>
                                <li>Store : <span>StidioFest (3 Items)</span></li>
                                <li>Owner : <span>StidioFest</span></li>
                              </ul>
                              <div className="item-group-box clearfix">
                                <div className="item-group-timer">
                                  <ul className="clearfix">
                                    <li><span>01</span> Hour</li>
                                    <li><span>55</span> Min</li>
                                    <li><span>00</span> Sec</li>
                                  </ul>
                                </div>
                                <div className="item-group-bid">
                                  <p className="theme-description">Starting bid:</p>
                                  <h2>$ 0.980</h2>
                                </div>
                              </div>
                              <div className="item-group-btn">
                                <a className="theme-btn" href="/buy-detail">Buy Now</a>
                              </div>
                            </div>
                          </div>
                          <p className="theme-description browse-description">Buy the complete package of tempalte with
                            icons and widgets an many more things with it.</p>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="view-store-item">
                          <span className="store-label">Boosted</span>
                          <div className="view-store-box">
                            <div className="view-store-images">
                              <a href=""><img src="assets/images/category/template/art_4.png" alt=""/></a>
                            </div>
                            <div className="view-store-info">
                              <h3 className="theme-title"><a href="/buy-detail">Best B&W Template</a></h3>
                              <div className="store-ratting">
                                <i className="fas fa-star-half-alt"></i><i className="fas fa-star-half-alt"></i><i
                                className="fas fa-star-half-alt"></i><i className="fas fa-star-half-alt"></i><i
                                className="fas fa-star-half-alt"></i> (4.5)
                              </div>
                              <ul>
                                <li>Store : <span>StidioFest (3 Items)</span></li>
                                <li>Owner : <span>StidioFest</span></li>
                              </ul>
                              <div className="item-group-box clearfix">
                                <div className="item-group-timer">
                                  <ul className="clearfix">
                                    <li><span>01</span> Hour</li>
                                    <li><span>55</span> Min</li>
                                    <li><span>00</span> Sec</li>
                                  </ul>
                                </div>
                                <div className="item-group-bid">
                                  <p className="theme-description">Starting bid:</p>
                                  <h2>$ 0.980</h2>
                                </div>
                              </div>
                              <div className="item-group-btn">
                                <a className="theme-btn" href="/checkout">Buy Now</a>
                              </div>
                            </div>
                          </div>
                          <p className="theme-description browse-description">Are you looking for black and white
                            template for your website, then this template is the best one for you.</p>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="view-store-item">
                          <span className="store-label">Boosted</span>
                          <div className="view-store-box">
                            <div className="view-store-images">
                              <a href=""><img src="assets/images/category/game/art_3.gif" alt=""/></a>
                            </div>
                            <div className="view-store-info">
                              <h3 className="theme-title"><a href="/view-detail">Funny Games For Kids</a></h3>
                              <div className="store-ratting">
                                <i className="fas fa-star-half-alt"></i><i className="fas fa-star-half-alt"></i><i
                                className="fas fa-star-half-alt"></i><i className="fas fa-star-half-alt"></i><i
                                className="fas fa-star-half-alt"></i> (4.5)
                              </div>
                              <ul>
                                <li>Store : <span>StidioFest (3 Items)</span></li>
                                <li>Owner : <span>StidioFest</span></li>
                              </ul>
                              <div className="item-group-box clearfix">
                                <div className="item-group-timer">
                                  <ul className="clearfix">
                                    <li><span>01</span> Hour</li>
                                    <li><span>55</span> Min</li>
                                    <li><span>00</span> Sec</li>
                                  </ul>
                                </div>
                                <div className="item-group-bid">
                                  <p className="theme-description">Starting bid:</p>
                                  <h2>$ 0.980</h2>
                                </div>
                              </div>
                              <div className="item-group-btn">
                                <a className="theme-btn" href="/view-detail">Place Bid</a>
                              </div>
                            </div>
                          </div>
                          <p className="theme-description browse-description">Are you looking for something good, safe
                            and funny for your kid to play and enjoy the game in most astonishing way.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="pagination-box text-center">
                      <ul className="clearfix">
                        <li className="current"><span>1</span></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">Next <i className="fas fa-long-arrow-alt-right"></i></a></li>
                      </ul>
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

export default Browse;
