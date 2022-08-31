import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function LogoButton() {
    return(
        <Link className="links" to={'/'} style={{ textDecoration: 'none' }}>
            <motion.div whileHover={{ scale: 1.1, rotate: -15  }} whileTap={{ scale: 0.95, rotate: 15 }} >
                <BiHomeAlt style={{color: "#B6B2AB"}} size={25} />
            </motion.div>
        </Link>
    );
}

export default LogoButton;