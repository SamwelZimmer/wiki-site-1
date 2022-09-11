import { motion } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Navbar2 from "./Navbar2";
import { useNavigate } from "react-router-dom";

const ContactFormSuccess = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    return (
            <body className="products-page-bg">
                {user ? <Navbar2 icon={"avatar"}/> : <Navbar2 icon={"login"} />}
                <div id="contact-bg-strip" />
                <div id="contact-box" className="centered-column justify-around">
                    <div className="centered-column">
                        <h1>Cheers</h1>
                    </div>
                    <div className="centered-row contact-row">
                     
                        <div id="socials-column-thanks" className="centered-column">
                            <h5>We'll get back to you as soon as possible</h5>
                            <div className="centered-column socials-layout">
                                <div className="centered-row socials-row">
                                    <motion.button whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.95 }}>
                                        <FaInstagram size={25} style={{ color: "#332817"}}/>
                                    </motion.button>
                                    <span className="social-tag" style={{paddingLeft: "1rem"}}>@companyInstagram</span>
                                </div>
                                <div className="centered-row socials-row">
                                    <motion.button whileHover={{ scale: 1.1  }}  whileTap={{ scale: 0.95 }}>
                                        <FaTwitter size={25} style={{ color: "#332817"}}/>
                                    </motion.button>                                <span className="social-tag" style={{paddingLight: "1rem"}}>@companyTwitter</span>
                                </div>
                                <div className="centered-row socials-row">
                                    <motion.button whileHover={{ scale: 1.1  }}  whileTap={{ scale: 0.95 }}>
                                        <FaTiktok size={25} style={{ color: "#332817"}}/>
                                    </motion.button>
                                    <span className="social-tag" style={{paddingLeft: "1rem"}}>@companyTikTok</span>
                                </div>
                                <div className="centered-row socials-row">
                                    <motion.button whileHover={{ scale: 1.1  }}  whileTap={{ scale: 0.95 }}>
                                        <FaYoutube size={25} style={{ color: "#332817"}}/>
                                    </motion.button>
                                    <span className="social-tag" style={{paddingLight: "1rem"}}>@companyYoutube</span>
                                </div>
                            </div>
                            <div style={{width: "50%", height: "20%"}}>
                                <motion.button 
                                  id="contact-submit-btn"
                                  whileHover={{ scale: 1.1 }}  
                                  whileTap={{ scale: 0.95 }}
                                  onClick={ () => navigate("/") }
                                >
                                    Take me home
                                </motion.button>
                            </div>
                        </div>
                    </div>
    
                </div>
            </body>
    );
}

export default ContactFormSuccess;