import React, {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useMoralis} from "react-moralis";

import { Spin } from "antd";

function CreateStore() {
  const navigate = useNavigate();
  const {account} = useMoralis();
  const imgInput = useRef(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Art');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState({ preview: '', data: '' });
  const [url, setURL] = useState('');
  const [loading, setLoading] = useState(false);

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
  const handleCreate = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('walletAddr', account);
    formData.append('title', title);
    formData.append('url', url);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('file', image.data);
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/collection/create`, formData);
    } catch(ex) {
      console.log(ex);
    }
    navigate("/dashboard");
    // res.redirect("/dashboard");
  }
  return (
    <div>
      <section className="bradcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="bradcrumb-main">
                <div className="bradcrumb-title">
                  <h1>Create a Collection</h1>
                </div>
                <div className="bradcrumb-right clearfix">
                  <ul className="clearfix">
                    <li><a href="/">Home</a></li>
                    <li>Create a Collection</li>
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
                <h2 data-watermark="Sale">Create a Collection</h2>
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
                      <label>
                        Collection title
                        <i className="fas fa-exclamation-circle" data-toggle="tooltip"
                          data-placement="top"
                          title="This is the name of the listing on Mintable - can be the same as the name">
                        </i>
                      </label>
                      <input className="theme-input" type="text" name="store title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="theme-input-box">
                      <label>
                        URL
                        <i className="fas fa-exclamation-circle" data-toggle="tooltip"
                          data-placement="top"
                          title="This is the name of the listing on Mintable - can be the same as the name">
                        </i>
                      </label>
                      <input className="theme-input" type="text" name="store title" value={url} onChange={(e) => setURL(e.target.value)} />
                    </div>
                    <div className="theme-input-box" onClick={handleImageUpload}>
                      <label>Upload preview image for your collection <i className="fas fa-exclamation-circle"
                                                                    data-toggle="tooltip" data-placement="top"
                                                                    title="This is a private file that only the owner of your NFT can download. Max size 2gb, any file type accepted"></i></label>
                      <div className="theme-file-upload text-center">
                        <div className="file-upload-ico">
                          {image.preview ? (<img src={image.preview} width='170' height='170' />) :
                            (<img src="assets/images/addfiles.svg" alt=""/>) }
                        </div>
                        {(!image.preview) && (<h3 className="theme-title">Choose Photo</h3>)}
                        {(!image.preview) && (<p className="theme-description">(items may be audio, video, image, files, ZIP, documents and
                          many more)</p>)}
                      </div>
                    </div>
                    {/* {image.preview && <img src={image.preview} width='100' height='100' />} */}
                    <input ref={imgInput} type="file" name="collectionImage" className='collectionImage' onChange= {handleFileChange} />
                    {/* {status && <h4>{status}</h4>} */}
                    <div className="theme-input-box">
                      <label>Description</label>
                      <textarea className="theme-input" id="editor" rows="4" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                      <div className="Listing-checkbox">
                        <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1"/>
                      </div>
                    </div>
                    <div className="theme-fix-btn">
                      {loading ? (<button className="theme-btn" data-toggle="modal" data-target="#create-store"><Spin /></button>)
                      : (<button className="theme-btn" data-toggle="modal" data-target="#create-store" onClick={handleCreate}>Create</button>)}
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
