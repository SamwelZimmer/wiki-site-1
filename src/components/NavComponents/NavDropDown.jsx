import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavDropDown() {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

   

    return(

        <motion.div onClick={ () => setIsOpen(!isOpen) } >
            {!isOpen && (
                <BsThreeDots style={{color: "#B6B2AB"}} size={25} />
            )}
            
            {isOpen && (
                <motion.div
                    // layout
                    // id="nav-drop-container"
                    // data-isOpen={isOpen}
                    className="absolute top-0 left-0 rounded-b-2xl bg-color shadow-2xl w-full py-12 flex items-center justify-center text-center"
                >     
                <motion.ul>
                    <div className="w-full text-center items-center">
                        <motion.li className="brown-text opacity-70 text-lg" whileTap={{ scale: 0.9 }} onClick={() => navigate("/products")} >
                            Products
                        </motion.li>
                    </div>

                    <motion.li className="centered-column">
                        <BsDot size={25} color={"#B6B2AB"} />
                    </motion.li>

                    <div className="w-full text-center items-center">
                        <motion.li className="brown-text opacity-70 text-lg text-center" whileTap={{ scale: 0.9 }} onClick={() => navigate("/plans")}>
                            Plans
                        </motion.li>
                    </div>
                    
                    <motion.li className="centered-column">
                        <BsDot size={25} color={"#B6B2AB"} />
                    </motion.li>


                    <div className="w-full text-center items-center">
                        <motion.li className="brown-text opacity-70 text-lg" whileTap={{ scale: 0.9 }} onClick={() => navigate("/about")}>
                            About
                        </motion.li>
                    </div>

                    <motion.li className="centered-column">
                        <BsDot size={25} color={"#B6B2AB"} />
                    </motion.li>    
                    
                    <div className="w-full text-center items-center">
                        <motion.li className="brown-text opacity-70 text-lg" whileTap={{ scale: 0.9 }} onClick={() => navigate("/contact-us")}>
                            Contact
                        </motion.li>
                    </div>

                </motion.ul>

                <motion.div id="drop-nav-exit-btn" className="pointer" whileTap={{ scale: 0.8 }}>
                    <BsX size={25} color={"#B6B2AB"} />
                </motion.div>

                </motion.div>


            )}
        </motion.div>


        // <motion.div onClick={ () => setIsOpen(!isOpen) } >
        //     {!isOpen && (
        //         <BsThreeDots style={{color: "#B6B2AB"}} size={25} />
        //     )}
            
        //     {isOpen && (
        //         <motion.div
        //             layout
        //             id="nav-drop-container"
        //             data-isOpen={isOpen}
        //         >     

        //         <motion.ul>
        //             <Link className="links" to={'/products'} style={{ textDecoration: 'none' }}>
        //                 <motion.li whileTap={{ scale: 0.9 }} >
        //                     Products
        //                 </motion.li>
        //             </Link>

        //             <motion.li className="centered-column">
        //                 <BsDot size={25} color={"#B6B2AB"} />
        //             </motion.li>

        //             <Link className="links" to={'/plans'} style={{ textDecoration: 'none' }}>
        //                 <motion.li whileTap={{ scale: 0.9 }}>
        //                     Plans
        //                 </motion.li>
        //             </Link>
                    
        //             <motion.li className="centered-column">
        //                 <BsDot size={25} color={"#B6B2AB"} />
        //             </motion.li>

        //             <Link className="links" to={'/about'} style={{ textDecoration: 'none' }}>
        //                 <motion.li whileTap={{ scale: 0.9 }}>
        //                     About
        //                 </motion.li>
        //             </Link>

        //             <motion.li className="centered-column">
        //                 <BsDot size={25} color={"#B6B2AB"} />
        //             </motion.li>    

        //             <Link className="links" to={'/contact-us'} style={{ textDecoration: 'none' }}>
        //                 <motion.li whileTap={{ scale: 0.9 }}>
        //                     Contacts
        //                 </motion.li>
        //             </Link>

        //         </motion.ul>

        //         <motion.div id="drop-nav-exit-btn" className="pointer" whileTap={{ scale: 0.8 }}>
        //             <BsX size={25} color={"#B6B2AB"} />
        //         </motion.div>

        //         </motion.div>
        //     )}
        // </motion.div>
    );
}
  
export default NavDropDown;