import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavDropDown() {

    const [isOpen, setIsOpen] = useState(false);
   

    return(
        <motion.div onClick={ () => setIsOpen(!isOpen) } >
            {!isOpen && (
                <BsThreeDots style={{color: "#B6B2AB"}} size={25} />
            )}
            
            {isOpen && (
                <motion.div
                    layout
                    id="nav-drop-container"
                    data-isOpen={isOpen}
                >     

                <motion.ul>
                    <Link className="links" to={'/products'} style={{ textDecoration: 'none' }}>
                        <motion.li whileTap={{ scale: 0.9 }} >
                            Products
                        </motion.li>
                    </Link>

                    <motion.li className="centered-column">
                        <BsDot size={25} color={"#B6B2AB"} />
                    </motion.li>

                    <Link className="links" to={'/plans'} style={{ textDecoration: 'none' }}>
                        <motion.li whileTap={{ scale: 0.9 }}>
                            Plans
                        </motion.li>
                    </Link>
                    
                    <motion.li className="centered-column">
                        <BsDot size={25} color={"#B6B2AB"} />
                    </motion.li>

                    <Link className="links" to={'/about'} style={{ textDecoration: 'none' }}>
                        <motion.li whileTap={{ scale: 0.9 }}>
                            About
                        </motion.li>
                    </Link>

                    <motion.li className="centered-column">
                        <BsDot size={25} color={"#B6B2AB"} />
                    </motion.li>    

                    <Link className="links" to={'/contact-us'} style={{ textDecoration: 'none' }}>
                        <motion.li whileTap={{ scale: 0.9 }}>
                            Contacts
                        </motion.li>
                    </Link>

                </motion.ul>

                <motion.div id="drop-nav-exit-btn" className="pointer" whileTap={{ scale: 0.8 }}>
                    <BsX size={25} color={"#B6B2AB"} />
                </motion.div>

                </motion.div>
            )}
        </motion.div>
    );
}
  
export default NavDropDown;