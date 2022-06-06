import React from 'react';

function Contact() {
  return (
    <div>
      <section className="bradcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="bradcrumb-main">
                <div className="bradcrumb-title">
                  <h1>Contact</h1>
                </div>
                <div className="bradcrumb-right clearfix">
                  <ul className="clearfix">
                    <li><a href="/">Home</a></li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                <h2 data-watermark="Contact">Reach out to us</h2>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
                <p className="subtitle">If you have any trouble related to our website or any item kindly contact us
                  from here.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-10 col-sm-12 col-12 offset-xl-2 offset-lg-1 offset-md-1">
              <div className="contact-box-main">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contact-box">
                      <div className="nft-input-box validate-input" data-validate="Name is required">
                        <span className="label-nft-input">First Name</span>
                        <input className="nft-input" type="text" name="name" placeholder=""/>
                        <span className="focus-nft-input"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contact-box">
                      <div className="nft-input-box validate-input" data-validate="Name is required">
                        <span className="label-nft-input">Last Name</span>
                        <input className="nft-input" type="text" name="name" placeholder=""/>
                        <span className="focus-nft-input"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contact-box">
                      <div className="nft-input-box validate-input" data-validate="Name is required">
                        <span className="label-nft-input">Email address</span>
                        <input className="nft-input" type="email" name="name" placeholder="name@example.com"
                               required=""/>
                        <span className="focus-nft-input"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contact-box">
                      <div className="nft-input-box validate-input" data-validate="Name is required">
                        <span className="label-nft-input">What are you contacting us about?</span>
                        <select className="nft-input">
                          <option>List my contract/store</option>
                          <option>Technical Support</option>
                          <option>Business Enquiry</option>
                          <option>Media</option>
                          <option>Pro Services</option>
                          <option>Collaboration</option>
                        </select>
                        <span className="focus-nft-input"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="contact-box">
                      <div className="nft-input-box validate-input" data-validate="Name is required">
                        <span className="label-nft-input">Your message</span>
                        <textarea className="nft-input" rows="4" required=""></textarea>
                        <span className="focus-nft-input"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="contact-box text-left" style={{marginTop: "25px"}}>
                      <button className="theme-btn">Send Message</button>
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

export default Contact;
