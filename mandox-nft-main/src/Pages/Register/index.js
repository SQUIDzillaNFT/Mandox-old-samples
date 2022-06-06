// import React, {useRef, useState} from 'react';
// import {toast} from "react-toastify";
// import {auth, firestore} from "../../firebase";
// import {useNavigate} from 'react-router-dom';

// function Register() {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [confirmPolicy, setConfirmPolicy] = useState(false);
//   const [showPass, setShowPass] = useState(false);
//   const [btnDisable, setBtnDisable] = useState(false);
//   const passRef = useRef();
//   const navigate = useNavigate();

//   const showPassword = () => {
//     setShowPass(!showPass);

//     if (showPass) {
//       passRef.current.type = 'password';
//     } else {
//       passRef.current.type = 'text';
//     }
//   }

//   const signup = async () => {

//     if (!confirmPolicy) {
//       console.log("Test1");
//       toast.error("You must need to agree to Terms and Privacy and Policy!");
//     } else {
//       setBtnDisable(true);
//       auth
//         .createUserWithEmailAndPassword(email, password)
//         .then(async (user) => {

//           console.log('user', user);
//           const author = {
//             avatar: "/assets/images/user4.png",
//             name: name,
//             email: user.user.email,
//             details: "",
//             follows: []
//           };
//           console.log('author', author);
//           await firestore
//             .collection("users")
//             .doc(user.user.uid)
//             .set(author)
//           console.log('author', author);

//           await user.user.sendEmailVerification();

//           // auth.signOut();
//           console.log('test1');

//           toast.success("Sent Email Verification Link to your email");
//           console.log('test2');
//           setBtnDisable(false);
//           navigate('/login');
//         })
//         .catch((error) => {
//           toast.error(error);
//           setBtnDisable(false);
//         });
//     }
//   }


//   return (
//     <section className="fxt-template-animation nft-login-template">
//       <div className="container">
//         <div className="row align-items-center justify-content-center">
//           <div className="col-xl-6 col-lg-7 col-sm-12 col-12 fxt-bg-color">
//             <div className="fxt-content">
//               <div className="fxt-home-link">
//                 <a href="/"><i className="fas fa-home"></i> Home</a>
//               </div>
//               <div className="fxt-header">
//                 <a href="/" className="fxt-logo"><img src="assets/images/logo.png" alt="Logo"/></a>
//                 <p>Begin Now! Register On The NFT Marketplace</p>
//               </div>
//               <div className="fxt-form">
//                 <form>
//                   <div className="form-group">
//                     <div className="fxt-transformY-50 fxt-transition-delay-1">
//                       <input type="text" id="name" className="form-control" name="name" placeholder="Name"
//                              onChange={(e) => setName(e.target.value)}
//                              required="required"/>
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <div className="fxt-transformY-50 fxt-transition-delay-1">
//                       <input type="email" id="email" className="form-control" name="email" placeholder="Email"
//                              onChange={(e) => setEmail(e.target.value)}
//                              required="required"/>
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <div className="fxt-transformY-50 fxt-transition-delay-2">
//                       <input id="password" type="password" className="form-control" name="password"
//                              onChange={(e) => setPassword(e.target.value)} ref={passRef}
//                              placeholder="********" required="required"/>
//                       <i onClick={showPassword} toggle="#password"
//                          className={`fa fa-fw field-icon ${showPass ? " fa-eye-slash" : " fa-eye"}`}></i>
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <div className="fxt-transformY-50 fxt-transition-delay-3">
//                       <div className="fxt-checkbox-area">
//                         <div className="checkbox">
//                           <input id="checkbox1" type="checkbox" onChange={(e) => setConfirmPolicy(!confirmPolicy)}/>
//                           <label htmlFor="checkbox1">I agree to the <a href="/terms-of-use">Terms</a> and <a
//                             href="/privacy-policy">Privacy Policy</a>.</label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <div className="fxt-transformY-50 fxt-transition-delay-4">
//                       <button type="button" onClick={signup} className="theme-btn fxt-btn-fill"
//                               disabled={btnDisable}>Sign Up
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//               <div className="fxt-footer">
//                 <div className="fxt-transformY-50 fxt-transition-delay-9">
//                   <p>Already have an account?<a href="/login" className="switcher-text2 inline-text">Login</a></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Register;
