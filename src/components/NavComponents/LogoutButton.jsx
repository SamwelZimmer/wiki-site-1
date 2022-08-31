import React from "react";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";

import { logout } from "../../firebase";





function LogoutButton() {
    return(
            <motion.button onClick={logout} whileHover={{ scale: 1.1, x: 6  }} whileTap={{ scale: 0.95 }} className="pointer" >
                <FiLogOut style={{color: "#B6B2AB"}} size={25} />
            </motion.button>
    );
}

export default LogoutButton;