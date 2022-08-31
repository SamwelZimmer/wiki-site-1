import React from "react";
import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";

function IconPlaceholder() {
    return(
            <motion.div >
                <CgProfile style={{color: "transparent"}} size={25} />
            </motion.div>
    );
}

export default IconPlaceholder;