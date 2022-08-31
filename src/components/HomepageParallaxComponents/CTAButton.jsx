import React from "react";
import { motion } from "framer-motion";

function CTAButton() {
    return (
        <motion.button 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className="cta-btn glass-effect">
                Join
        </motion.button>
    );
}

export default CTAButton;
