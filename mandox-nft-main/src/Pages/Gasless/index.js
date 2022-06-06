import React, {useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {useMoralis} from "react-moralis";
import axios from "axios";
import { DatePicker, Modal } from "antd";

function Gasless() {
  const navigate = useNavigate();
  const {account} = useMoralis();
  const imgInput = useRef(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Art');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState({ preview: '', data: '' });
  const [collection, setCollection] = useState("");
  const [price, setPrice] = useState(0);
  const [offerMethod, setOfferMethod] = useState(0);
  const [uri, setURI] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [endDate, setEndDate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [collectionNameList, setCollectionNameList] = useState([]);

  useEffect(async () => {
    if (account) {
      try {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection`, {
          params: {
            walletAddr: account
          }
        });
        const nameList = res.data.collections.map((item) => item.title);
        setCollectionNameList(nameList);
        if (nameList.length > 0) {
          setCollection(nameList[0]);
        }
        console.log(res);
      } catch(ex) {
        console.log(ex);
      }
    }
  }, [account]);

  const handleCategoryClick = (index) => {
    switch(index) {
      case 0:
        setCategory('Art');
        break;
      case 1:
        setCategory('Collectibles');
        break;
      case 2:
        setCategory('Game Items');
        break;
      case 3:
        setCategory('Music');
        break;
      case 4:
        setCategory('Domains');
        break;
      case 5:
        setCategory('Templates');
        break;
      case 6:
        setCategory('Videos');
        break;
    }
  }

  const handleOfferMethod = (index) => {
    setOfferMethod(index);
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  };

  const handleImageUpload = () => {
    imgInput.current.click();
  }

  function onChangeDueDate(date, dateString) {
    setDueDate(date);
    let nowTime = new Date().getTime() / 1000;
    // setEndDate(nowTime + 480);
    setEndDate(date._d.getTime() / 1000);
  }

  const listItem = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('walletAddr', account);
    formData.append('title', title);
    formData.append('uri', uri);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('file', image.data);
    formData.append('collectionTitle', collection);
    formData.append('price', price);
    formData.append('offerMethod', offerMethod);
    formData.append('timeStamp', endDate);
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/item/create`, formData);
      navigate("/Browse");
    } catch(ex) {
      console.log(ex);
      errorCreateItem();
    }
  }

  function errorCreateItem() {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "Error",
      content: `Error occured when creating NFT`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }
  
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
              {/* <div className="default-switch">
                <span className="switch-label">Advanced</span>
                <label className="switch">
                  <input type="checkbox" id="btn-check" checked=""/>
                  <span className="slider round"></span>
                </label>
                <span className="switch-label" style={{marginRight: 0}}>Easy</span>
              </div> */}
              <div className="mint-item-main-box">
                <div className="easy-box">
                  <div className="mint-item-form">
                    <div className="theme-input-box">
                      <label>What kind of item are you making?</label>
                      <ul className="list-select-item clearfix">
                        <li onClick={() => handleCategoryClick(0)}><span className={category === 'Art' ? 'active' : ''}>Art</span></li>
                        <li onClick={() => handleCategoryClick(1)}><span className={category === 'Collectibles' ? 'active' : ''}>Collectibles</span></li>
                        <li onClick={() => handleCategoryClick(2)}><span className={category === 'Game Items' ? 'active' : ''}>Game Items</span></li>
                        <li onClick={() => handleCategoryClick(3)}><span className={category === 'Music' ? 'active' : ''}>Music</span></li>
                        <li onClick={() => handleCategoryClick(4)}><span className={category === 'Domains' ? 'active' : ''}>Domains</span></li>
                        <li onClick={() => handleCategoryClick(5)}><span className={category === 'Templates' ? 'active' : ''}>Templates</span></li>
                        <li onClick={() => handleCategoryClick(6)}><span className={category === 'Videos' ? 'active' : ''}>Videos</span></li>
                      </ul>
                    </div>
                    <div className="theme-input-box">
                      <label>Name <i className="fas fa-exclamation-circle" data-toggle="tooltip"
                                              data-placement="top"
                                              title="This is the name of the listing on Mintable - can be the same as the name"></i></label>
                      <input className="theme-input" type="text" name="listing title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="theme-input-box">
                      <label>External link <i className="fas fa-exclamation-circle" data-toggle="tooltip"
                                              data-placement="top"
                                              title="This is the name of the listing on Mintable - can be the same as the name"></i></label>
                      <input className="theme-input" type="text" name="listing title" value={uri} onChange={(e) => setURI(e.target.value)} />
                    </div>

                    <div className="theme-input-box"  onClick={handleImageUpload}>
                      <label>Upload a private/unlockable item file. <i className="fas fa-exclamation-circle"
                                                                       data-toggle="tooltip" data-placement="top"
                                                                       title="This is a private file that only the owner of your NFT can download. Max size 2gb, any file type accepted"></i></label>
                      <div className="theme-file-upload text-center">
                        <div className="file-upload-ico">
                            {image.preview ? (<img src={image.preview} width='170' height='170' />) :
                              (<img src="assets/images/addfiles.svg" alt=""/>) }
                        </div>
                        {(!image.preview) && (<h3 className="theme-title">Click to add your private file</h3>)}
                        {(!image.preview) && (<p className="theme-description">(items may be audio, video, image, files, ZIP, documents and
                          many more)</p>)}
                      </div>
                    </div>
                    <input ref={imgInput} type="file" name="collectionImage" className='collectionImage' onChange= {handleFileChange} />
                    {/* <div className="theme-input-box">
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
                    </div> */}
                    <div className="theme-input-box">
                      <label>Description</label>
                      <textarea className="theme-input" id="editor" rows="4" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                      <div className="Listing-checkbox">
                        <input className="styled-checkbox" id="styled-checkbox-0" type="checkbox" value="value2" />
                      </div>
                    </div>
                    <div className="theme-input-box">
                      <select className="theme-input" value={collection} onChange={(e) => setCollection(e.target.value)}>
                        {collectionNameList.map((collectionName, i) => {
                          return (<option>{collectionName}</option>);
                        })}
                      </select>
                    </div>
                    <div className="theme-form-title text-center">
                      <h3 className="theme-title"><span>Fixed price - in ETH</span></h3>
                    </div>
                    <div className="fixed-price-tab-box">
                      <div className="nft-filter">
                        <ul id="myTabs2" className="nav nav-pills nav-justified" role="tablist" data-tabs="tabs">
                          <li><a className="active" href="#fixed" data-toggle="tab" onClick={() => handleOfferMethod(0)}>Fixed</a></li>
                          <li><a href="#action" data-toggle="tab" onClick={() => handleOfferMethod(1)}>Auction</a></li>
                        </ul>
                      </div>
                      <div className="tab-content">
                        <div role="tabpanel" className={`tab-pane fade in ${offerMethod === 0 ? 'active' : ''}`} id="fixed1">
                          <div className="theme-box-center">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="theme-input-box">
                                  <label>Fixed price - in ETH</label>
                                  <input className="theme-input" type="number" name="price" placeholder="$0.00" value={price}  onChange={(e) => setPrice(e.target.value)} />
                                </div>
                              </div>
                              {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="fix-price-value">
                                  <h3 className="theme-title" style={{color: "#f39953"}}>Price in ETH: 0.000000</h3>
                                  <p className="theme-description">Current ETH price: 1 ETH = $1691.64</p>
                                </div>
                              </div> */}
                            </div>
                            <div className="row">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="theme-fix-btn">
                                  <button className="theme-btn" onClick={listItem}>List this Item</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" className={`tab-pane fade in ${offerMethod === 1 ? 'active' : ''}`} id="action1">
                          <div className="theme-box-center">
                            <div className="row">
                              <div>
                                <div className="theme-input-box">
                                  <label>Starting bid price - in ETH</label>
                                  <input className="theme-input" type="number" name="starting bids"
                                         placeholder="$0.00" value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="theme-input-box">
                                <label>Auction Starting Date</label>
                                <DatePicker onChange={onChangeDueDate} value={dueDate}/>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="theme-fix-btn">
                                <button className="theme-btn" onClick={listItem}>List this Item</button>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gasless;
