import React from "react";
import { motion } from "framer-motion";
import { BsGear } from "react-icons/bs";
import { Link } from "react-router-dom";


function GearButton() {
    return(
        <Link className="links" to={'/settings'} style={{ textDecoration: 'none' }}>
            <motion.div whileHover={{ scale: 1.1, rotate: 15  }} whileTap={{ scale: 0.95, rotate: -15 }}>
                <BsGear style={{color: "#B6B2AB"}} size={25} />
            </motion.div>
        </Link> 
    );
}

export default GearButton;