import React from "react";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

import GetProfilePicture from "../ProfilePageComponents/GetProfilePicture";


function AvatarButton() {
    return(
        <Link className="links" to={'/profile'} style={{ textDecoration: 'none' }}>
            <motion.div className="w-[25px]" whileHover={{ scale: 1.1, rotate: 15  }} whileTap={{ scale: 0.95, rotate: -15 }}>
                <GetProfilePicture nav={true} />
            </motion.div>
        </Link> 
    );

    // return(
    //     <Link className="links" to={'/profile'} style={{ textDecoration: 'none' }}>
    //         <motion.div whileHover={{ scale: 1.1, rotate: 15  }} whileTap={{ scale: 0.95, rotate: -15 }}>
    //             <CgProfile style={{color: "#B6B2AB"}} size={25} />
    //         </motion.div>
    //     </Link> 
    // );
}

export default AvatarButton;