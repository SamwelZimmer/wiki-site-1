import React from "react";
import { BsUpload }from "react-icons/bs";
import { motion } from "framer-motion";

function UploadIcon() {
    return(
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="pointer">
            <BsUpload style={{color: "#574E3F"}} size={20} />
        </motion.div>
    );
}

export default UploadIcon;