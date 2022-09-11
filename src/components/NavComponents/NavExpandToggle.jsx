import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavExpandToggle() {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

   

    return(
        <motion.div onHoverStart={handleMouseOver} onHoverEnd={handleMouseOut} >

            {!isHovering && (
                <BsThreeDots style={{color: "#B6B2AB"}} size={25} />
            )}
            
            {isHovering && (
                <div className="flex items-center justify-between content-center" style={{color: "#B6B2AB"}}>
                    <Link className="links" to={'/products'} style={{ textDecoration: 'none' }}>
                        <motion.p style={{width: '3rem', color: '#B6B2AB'}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Products</motion.p>
                    </Link>
                    <BsDot size={25} />
                    <Link className="links" to={'/plans'} style={{ textDecoration: 'none' }}>
                        <motion.p style={{width: '3rem', color: '#B6B2AB'}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Plans</motion.p>
                    </Link>      
                    <BsDot size={25} />
                    <Link className="links" to={'/about'} style={{ textDecoration: 'none' }}>
                        <motion.p style={{width: '3rem', color: '#B6B2AB'}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>About</motion.p>
                    </Link>   
                    <BsDot size={25} />
                    <Link className="links" to={'/contact-us'} style={{ textDecoration: 'none' }}>
                        <motion.p style={{width: '3rem', color: '#B6B2AB'}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Contacts</motion.p>
                    </Link>      
                   
                </div>
            )}
        </motion.div>
    );
}
  
export default NavExpandToggle;