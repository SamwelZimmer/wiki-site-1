import { motion } from "framer-motion";
import React from "react";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


// import components
import googleLogo from "../Logos/googleLogo.png"
import CheckIcon from "../ProtectPagesComponets/CheckIcon";
import GreenCheckIcon from "../ProtectPagesComponets/GreenCheckIcon";
import CrossIcon from "../ProtectPagesComponets/CrossIcon";
import Navbar2 from "../NavComponents/Navbar2";
import Navbar3 from "../NavComponents/Navbar3";
import Footer from '../FooterComponents/Footer';

function LoginPage() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const navigate = useNavigate();

    // validation logic

    function passwordValidation(str) {
        return /^[A-Za-z0-9?!]+$/.test(str);
    }

    function nameValidation(str) {
        return /^[A-Za-z-]+$/.test(str);
    } 

    let loginEmailValid;
    if (loginEmail.includes("@")) {
        if (loginEmail.split("@")[1].includes(".")) {
            if ((loginEmail.split("@")[1].split(".")[1]).length > 1){
                loginEmailValid = true;
            }
        }
    } else {
        loginEmailValid = false;
    }

    let loginPasswordValid;
    if (loginPassword.length > 7 & passwordValidation(loginPassword)) {
        loginPasswordValid = true;
    } else {
        loginPasswordValid = false;
    }

    let nameValid;
    if (name.length > 1 & nameValidation(name)) {
        nameValid = true
    } else {
        nameValid = false
    }

    let signupEmailValid;
    if (signUpEmail.includes("@")) {
        if (signUpEmail.split("@")[1].includes(".")) {
            if ((signUpEmail.split("@")[1].split(".")[1]).length > 1){
                signupEmailValid = true;
            }
        }
    } else {
        signupEmailValid = false;
    }

    let signupPasswordValid;
    if (signUpPassword.length > 7 & passwordValidation(signUpPassword) & signUpPassword === repeatPassword) {
        signupPasswordValid = true;
    } else {
        signupPasswordValid = false;
    }

    async function handleSignUpSubmit() {
        if (signUpPassword === repeatPassword) {
            await registerWithEmailAndPassword(name, signUpEmail, signUpPassword);
        }
    }
    


    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/");
      }, [user, loading]);

    return (

        <body className="bg-color">
            {/* {user ? <Navbar2 icon={'logout'}/> : <Navbar2 icon={'avatar'}/> } */}
            <Navbar3 icon={'none'} color={false}/>
            <main className="mt-20 lg:mt-24">
                <div className="fixed top-0 left-0 w-screen h-screen -z-50 bg-color" />
                    {/* log in section */}
                <div className="absolute dark-backdrop-box z-10 left-6 mr-6 top-20 p-8 md:w-2/5 md:left-12 md:top-32 md:p-10 md:mr-0" >
                    <div className="w-full h-full flex flex-col">
                        <div className="flex flex-col gap-2">
                            <h1 className="brown-text md:text-6xl">Log In</h1>
                            <h3 className="brown-text p-0 md:text-lg opacity-60">Welcome back, baby.</h3>
                            <h4 className="brown-text md:text-base opacity-40">Pop your username and password in the boxes or sign in with google</h4>
                        </div>
                        <div className="flex flex-col items-center justify-around">
                            <form className="w-full flex flex-col justify-between items-center">
                                <div className="flex flex-row w-full justify-between items-center">
                                    <input 
                                        required 
                                        pattern="[A-Za-z0-9._+-?!]+@[A-Za-z0-9 -]+\.[A-Za-z]{2,}"
                                        title="How about you try a valid email address??"
                                        type={"text"} 
                                        name={"emailLogin"} 
                                        className="form-1 w-full flex flex-row rounded-2xl py-2 pl-4" 
                                        placeholder="EMAIL" 
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                    {loginEmailValid ? <CheckIcon /> : <CrossIcon />}
                                </div>
                                <div className="flex flex-row w-full justify-between items-center">
                                    <input 
                                        required 
                                        pattern="[A-Za-z0-9?!]{8,}"
                                        title="Password must be at least 8 characters long, consisting of letters and numbers."
                                        type={"password"} 
                                        name={"passwordLogin"} 
                                        className="form-1 w-full flex flex-row rounded-2xl py-2 pl-4" 
                                        placeholder="PASSWORD" 
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                                    {loginPasswordValid ? <CheckIcon /> : <CrossIcon />}
                                </div>
                                <div className="w-2/3 flex flex-row justify-between self-center">
                                    <motion.button 
                                    className="h-min p-2 aspect-square rounded-2xl brown-bg flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={signInWithGoogle}
                                    >
                                    <motion.img 
                                            whileHover={{ rotate: 15 }} 
                                            whileTap={{ rotate: -180 }} 
                                            className="w-8" 
                                            src={googleLogo} 
                                            alt="" 
                                        />
                                    </motion.button>
                                    <motion.button 
                                    className="rounded-2xl green-bg grey-text text-lg w-1/2"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => logInWithEmailAndPassword(loginEmail, loginPassword)}
                                    >
                                    Let's Go
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                        
                     
                    </div>
                    <motion.div className="text-center cursor-pointer pt-4" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Link to={"/reset-password"}>
                            <p className="green-text opacity-40">yeah... i kinda forgot my password</p>
                        </Link>
                    </motion.div>
                </div>

                {/* sign up section  */}
                <div className="absolute flex flex-col gap-20 w-full top-1/2 md:top-24 h-full">
                    <div className="absolute light-backdrop-box w-full right-0 p-8 pt-32 md:right-12 md:p-10 md:w-3/5 md:py-20 flex justify-end">
                        <div className="w-full md:w-5/6 md:flex">
                            <div className="flex flex-col w-full text-center">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="brown-text opacity-30 w-full h-36 md:h-0 pt-12 md:pt-0 md:pb-6">Or</div>
                                    <h1 className="brown-text md:text-6xl">Sign Up</h1>
                                    <h3 className="brown-text p-0 md:text-lg opacity-60">First time here?</h3>
                                    <h4 className="brown-text p-0 md:text-base opacity-40">Fill in these details so we can get to know each other a bit better</h4>
                                </div>
                                <div className="w-full flex flex-col justify-between items-center">
                                    <form className="flex flex-col justify-between items-center w-full">
                                        <div className="flex flex-col justify-between items-center w-full gap-0">
                                            <div className="flex flex-row justify-between items-center w-full">
                                                <input 
                                                    required 
                                                    pattern="[A-Za-z-]{2,}"
                                                    title="Is that really your name?"
                                                    type={"text"} 
                                                    name={"usernameSignUp"} 
                                                    className="form-1 w-full flex flex-row rounded-2xl py-2 pl-4" 
                                                    placeholder="FULL NAME" 
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                {nameValid ? <GreenCheckIcon /> : <CrossIcon />} 
                                            </div>                                            
                                        </div>
                                        
                                        <div className="flex flex-col justify-between items-center w-full gap-0">
                                            <div className="flex flex-row justify-between items-center w-full">
                                                <input 
                                                    required 
                                                    pattern="[A-Za-z0-9._+-?!]+@[A-Za-z0-9 -]+\.[A-Za-z]{2,}"
                                                    title="How about you try a valid email address??"
                                                    type={"email"} 
                                                    name={"passwordSignUp"} 
                                                    className="form-1 w-full flex flex-row rounded-2xl py-2 pl-4" 
                                                    placeholder="EMAIL" 
                                                    value={signUpEmail}
                                                    onChange={(e) => setSignUpEmail(e.target.value)}
                                                />
                                                {signupEmailValid ? <GreenCheckIcon /> : <CrossIcon />}
                                            </div>
                                        </div>

                                        
                                        <div className="flex flex-col justify-between items-center w-full gap-0">
                                            <div className="flex flex-row justify-between items-center w-full">
                                                <div className="flex flex-col md:flex-row w-full">
                                                    <input 
                                                        required
                                                        pattern="[A-Za-z0-9?!]{8,}"
                                                        title="Password must be at least 8 characters long, consisting of letters and numbers."
                                                        type={"password"} 
                                                        name={"passwordSignUp1"} 
                                                        className="form-1 w-full md:w-1/2 flex flex-row rounded-2xl py-2 pl-4" 
                                                        placeholder="PASSWORD" 
                                                        value={signUpPassword}
                                                        onChange={(e) => setSignUpPassword(e.target.value)}
                                                    />
                                                    <input 
                                                        required 
                                                        pattern="[A-Za-z0-9?!]{8,}"
                                                        title="Passwords must match."
                                                        type={"password"} 
                                                        name={"passwordSignUp2"} 
                                                        className="form-1 w-full md:w-1/2 flex flex-row rounded-2xl py-2 pl-4" 
                                                        placeholder="...AND AGAIN"
                                                        value={repeatPassword}
                                                        onChange={(e) => setRepeatPassword(e.target.value)}
                                                    />
                                                </div>
                                                {signupPasswordValid ? <GreenCheckIcon /> : <CrossIcon />}
                                            </div>
                                            <p className="text-left grey-text pl-8 w-full opacity-40 h-2 text-xs md:text-sm ">At least 8 characters of letters and/or numbers</p>

                                        </div>

                                        
                                    
                                    </form>

                                    <div className="w-2/3 flex flex-row justify-between self-center">
                                        <motion.button 
                                        className="h-min p-2 aspect-square rounded-2xl brown-bg flex items-center justify-center"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={signInWithGoogle}
                                        >
                                            <motion.img 
                                                whileHover={{ rotate: 15 }} 
                                                whileTap={{ rotate: -180 }} 
                                                className="w-8" 
                                                src={googleLogo} 
                                                alt="" 
                                            />
                                        </motion.button>
                                        <motion.button 
                                        className="rounded-2xl green-bg grey-text text-lg w-1/2"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={ () => {
                                            if (!name) alert("Please enter name");

                                            if (signUpPassword === repeatPassword) {
                                                if (signupEmailValid) {
                                                    if (nameValid) {
                                                        registerWithEmailAndPassword(name, signUpEmail, signUpPassword);
                                                    } else {
                                                        alert("Is that really your name?")
                                                    }
                                                } else alert("Maybe try a valid email");
                                            } else alert("Passwords must match");
                                        }}
                                        >
                                        Let Me In
                                    </motion.button>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full h-12">
                        <div className="w-full h-72" />
                        <Footer />
                    </div>
                </div>
            </main>
        </body>



        // <body className="products-page-bg">
        //     {/* {user ? <Navbar2 icon={'logout'}/> : <Navbar2 icon={'avatar'}/> } */}
        //     <Navbar2 icon={'none'}/>
            
        //     {/* log in section */}
        //     <div id="log-in-backdrop-box">
        //         <div id="log-in-container">
        //             <div>
        //                 <h1>Log In</h1>
        //                 <h3>Welcome back, baby.</h3>
        //                 <h4>Pop your username and password in the boxes or sign in with google</h4>
        //             </div>
        //             <div id="login-entry-container">
        //                 <form className="login-form">
        //                     <input 
        //                         required 
        //                         type={"text"} 
        //                         name={"emailLogin"} 
        //                         className="login-input" 
        //                         placeholder="EMAIL" 
        //                         value={loginEmail}
        //                         onChange={(e) => setLoginEmail(e.target.value)}
        //                     />
        //                     <CrossIcon />                            
        //                 </form>
        //                 <form className="login-form">
        //                     <input 
        //                         required 
        //                         type={"password"} 
        //                         name={"passwordLogin"} 
        //                         className="login-input" 
        //                         placeholder="PASSWORD" 
        //                         value={loginPassword}
        //                         onChange={(e) => setLoginPassword(e.target.value)}
        //                     />
        //                     <CheckIcon />
        //                 </form>
        //             </div>
                    
        //             <div id="login-btn-container">
        //                 <motion.button 
        //                   className="login-page-btn google-login-btn"
        //                   whileHover={{ scale: 1.1 }}
        //                   whileTap={{ scale: 0.9 }}
        //                   onClick={signInWithGoogle}
        //                 >
        //                 <motion.img 
        //                         whileHover={{ rotate: 15 }} 
        //                         whileTap={{ rotate: -180 }} 
        //                         className="google-icon" 
        //                         src={googleLogo} 
        //                         alt="" 
        //                     />
        //                 </motion.button>
        //                 <motion.button 
        //                   className="login-page-btn email-login-btn"
        //                   whileHover={{ scale: 1.1 }}
        //                   whileTap={{ scale: 0.9 }}
        //                   onClick={() => logInWithEmailAndPassword(loginEmail, loginPassword)}
        //                 >
        //                 Let's Go
        //                 </motion.button>
        //             </div>
        //         </div>
        //         <motion.div id="forgot-pass-container" className="pointer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        //             <Link to={"/reset-password"}>
        //                 <p>yeah... i kinda forgot my password</p>
        //             </Link>
        //         </motion.div>
        //     </div>

        //     {/* sign up section  */}
        //     <div id="sign-up-backdrop-box">
        //         <div id="sign-up-container">
        //             <div id="sign-up-text">
        //                 <h1>Sign Up</h1>
        //                 <h3>First time here?</h3>
        //                 <h4>Fill in these details so we can get to know each other a bit better</h4>
        //             </div>
        //             <div id="login-entry-container">
        //                 <form className="sign-in-form">
        //                     <input 
        //                         required 
        //                         type={"text"} 
        //                         name={"usernameSignUp"} 
        //                         className="login-input" 
        //                         placeholder="FULL NAME" 
        //                         value={name}
        //                         onChange={(e) => setName(e.target.value)}
        //                     />
        //                     <CrossIcon />                            
        //                 </form>
        //                 <form className="sign-in-form">
        //                     <input 
        //                         required 
        //                         type={"email"} 
        //                         name={"passwordSignUp"} 
        //                         className="login-input" 
        //                         placeholder="EMAIL" 
        //                         value={signUpEmail}
        //                         onChange={(e) => setSignUpEmail(e.target.value)}
        //                     />
        //                     <CrossIcon />                            
        //                 </form>
        //                 <form className="sign-in-form">
        //                     <input 
        //                         required 
        //                         type={"password"} 
        //                         name={"passwordSignUp1"} 
        //                         className="sign-up-password-input" 
        //                         placeholder="PASSWORD" 
        //                         value={signUpPassword}
        //                         onChange={(e) => setSignUpPassword(e.target.value)}
        //                     />
        //                     <input 
        //                         // required 
        //                         type={"password"} 
        //                         name={"passwordSignUp2"} 
        //                         className="sign-up-password-input" 
        //                         placeholder="CONFIRM PASSWORD" 
        //                     />
        //                     <CrossIcon /> 
        //                 </form>
                    
        //             </div>
        //             <div id="login-btn-container">
        //                 <motion.button 
        //                   className="login-page-btn google-login-btn"
        //                   whileHover={{ scale: 1.1 }}
        //                   whileTap={{ scale: 0.9 }}
        //                   onClick={signInWithGoogle}
        //                 >
        //                     <motion.img 
        //                         whileHover={{ rotate: 15 }} 
        //                         whileTap={{ rotate: -180 }} 
        //                         className="google-icon" 
        //                         src={googleLogo} 
        //                         alt="" 
        //                     />
        //                 </motion.button>
        //                 <motion.button 
        //                   className="login-page-btn email-login-btn"
        //                   whileHover={{ scale: 1.1 }}
        //                   whileTap={{ scale: 0.9 }}
        //                   onClick={ () => {
        //                     if (!name) alert("Please enter name");
        //                     registerWithEmailAndPassword(name, signUpEmail, signUpPassword);
        //                   }}
        //                 >
        //                 Let Me In
        //                 </motion.button>
        //             </div>
        //         </div>
        //     </div>
        //     <SignOut />

        // </body>
    );
}

// i dont want this in final, just testing signout functionality
function SignOut() {
    return auth.currentUser && (
        <motion.button onClick={() => auth.signOut()}>Sign out of google</motion.button>
    )
}

export default LoginPage;