import React from "react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";
import { motion } from "framer-motion";
import Navbar2 from "./Navbar2";

function ResetPassword() {
    const [email, setEmail] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
      });

    return (
        <body id="reset-page-bg">
            {user ? <Navbar2  icon={'avatar'}/> : <Navbar2  icon={'login'}/>}
            <div id="reset-backdrop-box" />
            <div id="reset-page-parent">
                <div id="reset-page-heading">
                    <h1>You went and forgot your</h1>
                    <h1>password, didn't you?</h1>
                </div>
            
                <div id="reset-box-placement">
                    <div id="reset-page-subheading">
                        <h2>Maybe you should be more careful</h2>
                        <h3>Bozo</h3>
                    </div>

                    <div className="reset-container">
                        <input
                        type="email"
                        className="reset-textbox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="YOUR EMAIL, SIRE"
                        />
                        <motion.button
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="reset-btn"
                        style={{fontSize: "1rem"}}
                        onClick={() => {
                            sendPasswordReset(email); 
                            navigate("/login")}}
                        >
                        Request Password Reset
                        </motion.button>
                        <motion.div
                            onClick={() => {navigate("/login")}}
                            whileHover={{scale: 1.01}}
                            whileTap={{scale: 0.99}}
                            className="pointer centered-column"
                            style={{color: "rgba(51, 40, 23, 0.3)"}}
                        >
                            <span>You don't have an account, do you?</span> 
                            <span>Okay, register here.</span>
                        </motion.div>
                    </div>
                </div>         
            </div>       
        </body>
    );
}

export default ResetPassword;