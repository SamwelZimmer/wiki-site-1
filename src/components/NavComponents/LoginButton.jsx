import React from "react";
import { FiLogIn } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function LoginButton() {
    return(
        <Link className="links" to={'/login'} style={{ textDecoration: 'none' }}>
            <motion.button whileHover={{ scale: 1.1, x: 6  }} whileTap={{ scale: 0.95 }} className="pointer" >
                <FiLogIn style={{color: "#B6B2AB"}} size={25} />
            </motion.button>
        </Link>
         
    );
}

export default LoginButton;