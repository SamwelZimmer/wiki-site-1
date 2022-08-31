import React from "react";
import { motion } from "framer-motion";
import logo from "/Users/user/Documents/wiki-project/wiki-site-1/src/logo.svg";


function HomeButton() {
    return (
        <button className="home-button">
            <motion.div
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            > 
                <a href="/">
                    <img src={logo} alt="" className="navbar-logo"/>
                </a>
            </motion.div>
        </button>

        
    );
}

export default HomeButton;