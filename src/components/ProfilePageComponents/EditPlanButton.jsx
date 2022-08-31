import React from "react";
import { motion } from "framer-motion";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";


function EditPlanButton() {
    return(
        <Link className="links" to={'/plans'} style={{ textDecoration: 'none' }} >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
                <AiOutlineEdit style={{color: "#B6B2AB"}} size={25} />
            </motion.div>
        </Link> 
    );
}

export default EditPlanButton;