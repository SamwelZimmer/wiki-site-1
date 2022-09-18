import React from "react";
import { motion } from "framer-motion";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";


function EditPlanButton() {
    return(
        <Link className="links" to={'/plans'} style={{ textDecoration: 'none' }} >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                <AiOutlineEdit style={{color: "#B6B2AB"}} size={20} />
            </motion.div>
        </Link> 
    );
}

export default EditPlanButton;