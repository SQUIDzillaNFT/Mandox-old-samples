import React from 'react';

function ForgotPassword() {
  return (
    <section className="fxt-template-animation nft-login-template">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-7 col-sm-12 col-12 fxt-bg-color">
            <div className="fxt-content">
              <div className="fxt-home-link">
                <a href="/"><i className="fas fa-home"></i> Home</a>
              </div>
              <div className="fxt-header">
                <a href="/" className="fxt-logo"><img src="assets/images/logo.png" alt="Logo"/></a>
                <p>You Can't Recall Your Password. No Worries!</p>
              </div>
              <div className="fxt-form">
                <form method="POST">
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-1">
                      <input type="email" id="email" className="form-control" name="email" placeholder="Email"
                             required="required"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-4">
                      <a href="/login" type="submit" className="theme-btn fxt-btn-fill">Send Me Email</a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="fxt-footer">
                <div className="fxt-transformY-50 fxt-transition-delay-9">
                  <p>Don't have an account?<a href="/register" className="switcher-text2 inline-text">Register</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword;
