import { motion } from "framer-motion";
import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


// import components
import googleLogo from "./Logos/googleLogo.png";
import CheckIcon from "./ProtectPagesComponets/CheckIcon";
import CrossIcon from "./ProtectPagesComponets/CrossIcon";
import Navbar2 from "./Navbar2";


function LoginPage() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const navigate = useNavigate();
    // const history = useHistory();

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/");
      }, [user, loading]);

    return (
        <body className="products-page-bg">
            {/* {user ? <Navbar2 icon={'logout'}/> : <Navbar2 icon={'avatar'}/> } */}
            <Navbar2 icon={'none'}/>
            
            {/* log in section */}
            <div id="log-in-backdrop-box">
                <div id="log-in-container">
                    <div>
                        <h1>Log In</h1>
                        <h3>Welcome back, baby.</h3>
                        <h4>Pop your username and password in the boxes or sign in with google</h4>
                    </div>
                    <div id="login-entry-container">
                        <form className="login-form">
                            <input 
                                required 
                                type={"text"} 
                                name={"emailLogin"} 
                                className="login-input" 
                                placeholder="EMAIL" 
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                            <CrossIcon />                            
                        </form>
                        <form className="login-form">
                            <input 
                                required 
                                type={"password"} 
                                name={"passwordLogin"} 
                                className="login-input" 
                                placeholder="PASSWORD" 
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                            <CheckIcon />
                        </form>
                    </div>
                    
                    <div id="login-btn-container">
                        <motion.button 
                          className="login-page-btn google-login-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={signInWithGoogle}
                        >
                        <motion.img 
                                whileHover={{ rotate: 15 }} 
                                whileTap={{ rotate: -180 }} 
                                className="google-icon" 
                                src={googleLogo} 
                                alt="" 
                            />
                        </motion.button>
                        <motion.button 
                          className="login-page-btn email-login-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => logInWithEmailAndPassword(loginEmail, loginPassword)}
                        >
                        Let's Go
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* sign up section  */}
            <div id="sign-up-backdrop-box">
                <div id="sign-up-container">
                    <div id="sign-up-text">
                        <h1>Sign Up</h1>
                        <h3>First time here?</h3>
                        <h4>Fill in these details so we can get to know each other a bit better</h4>
                    </div>
                    <div id="login-entry-container">
                        <form className="sign-in-form">
                            <input 
                                required 
                                type={"text"} 
                                name={"usernameSignUp"} 
                                className="login-input" 
                                placeholder="FULL NAME" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <CrossIcon />                            
                        </form>
                        <form className="sign-in-form">
                            <input 
                                required 
                                type={"email"} 
                                name={"passwordSignUp"} 
                                className="login-input" 
                                placeholder="EMAIL" 
                                value={signUpEmail}
                                onChange={(e) => setSignUpEmail(e.target.value)}
                            />
                            <CrossIcon />                            
                        </form>
                        <form className="sign-in-form">
                            <input 
                                required 
                                type={"password"} 
                                name={"passwordSignUp1"} 
                                className="sign-up-password-input" 
                                placeholder="PASSWORD" 
                                value={signUpPassword}
                                onChange={(e) => setSignUpPassword(e.target.value)}
                            />
                            <input 
                                // required 
                                type={"password"} 
                                name={"passwordSignUp2"} 
                                className="sign-up-password-input" 
                                placeholder="CONFIRM PASSWORD" 
                            />
                            <CrossIcon /> 
                        </form>
                    
                    </div>
                    <div id="login-btn-container">
                        <motion.button 
                          className="login-page-btn google-login-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={signInWithGoogle}
                        >
                            <motion.img 
                                whileHover={{ rotate: 15 }} 
                                whileTap={{ rotate: -180 }} 
                                className="google-icon" 
                                src={googleLogo} 
                                alt="" 
                            />
                        </motion.button>
                        <motion.button 
                          className="login-page-btn email-login-btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={ () => {
                            if (!name) alert("Please enter name");
                            registerWithEmailAndPassword(name, signUpEmail, signUpPassword);
                          }}
                        >
                        Let Me In
                        </motion.button>
                    </div>
                </div>
            </div>
            <SignOut />

        </body>
    );
}

// i dont want this in final, just testing signout functionality
function SignOut() {
    return auth.currentUser && (
        <motion.button onClick={() => auth.signOut()}>Sign out of google</motion.button>
    )
}

export default LoginPage;