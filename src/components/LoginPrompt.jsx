import React from "react";
import Navbar2 from "./Navbar2";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LoginPrompt() {
    return (
        <body className="products-page-bg">
            <Navbar2 icon={'none'} />
            <div className="centered-column">
                <h1 style={{ color: '#332817'}}>Nuh uh uh.</h1>
                <div id="loginprompt-backdrop" className="loginprompt-text">
                    <div id="loginprompt-Ltext">
                        <h2>You're not going</h2>
                        <h2>anywhere ...</h2>
                    </div>
                    <div id="loginprompt-Rtext" className="loginprompt-text">
                        <h2>... at least until</h2>
                        <h2>you sign in</h2>
                    </div>
                </div>
                <Link to={'/login'} className="centered-column">
                    <motion.button 
                      id="loginprompt-loginbtn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                        <p>Okay, let's see then</p>
                        <p></p>
                    </motion.button>
                </Link>
            </div>
        </body>
    );
}

export default LoginPrompt;