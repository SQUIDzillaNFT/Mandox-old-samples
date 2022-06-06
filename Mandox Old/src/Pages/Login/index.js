import React, {useRef, useState} from 'react';
import {auth, firestore} from "../../firebase";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {eventBus} from "../../Utils/EventBus";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const passRef = useRef();

  const showPassword = () => {
    setShowPass(!showPass);

    if (showPass) {
      passRef.current.type = 'password';
    } else {
      passRef.current.type = 'text';
    }
  }

  const submitLogin = async () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        if (!res.user.emailVerified) {
          toast.error(
            "Email does not verified yet. please verify your email"
          );
        } else {
          let user = (await firestore.collection("users").doc(res.user.uid).get()).data();
          localStorage.setItem('authUser', JSON.stringify({id: res.user.uid, ...user}));
          eventBus.dispatch("userUpdated", JSON.stringify({id: res.user.uid, ...user}))
          navigate('/dashboard');
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  }

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
                <a href="/" className="fxt-logo"><span className="login-logo"></span></a>
                <p>Welcome Back! Enter Your Register Email & Password</p>
              </div>
              <div className="fxt-form">
                <form>
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-1">
                      <input type="email" id="email" className="form-control" name="email" placeholder="Email"
                             onChange={(e) => setEmail(e.target.value)}
                             required="required"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-2">
                      <input id="password" type="password" className="form-control" name="password"
                             onChange={(e) => setPassword(e.target.value)} ref={passRef}
                             placeholder="********" required="required"/>
                      <i onClick={showPassword} toggle="#password" className={`fa fa-fw field-icon ${showPass ? " fa-eye-slash" : " fa-eye"}`}></i>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-3">
                      <div className="fxt-checkbox-area">
                        <div className="checkbox">
                          <input id="checkbox1" type="checkbox"/>
                            <label htmlFor="checkbox1">Keep me logged in</label>
                        </div>
                        <a href="/forgot-password" className="switcher-text">Forgot Password</a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-4">
                      <button type="button" onClick={submitLogin} className="theme-btn fxt-btn-fill">Log in</button>
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

export default Login;
