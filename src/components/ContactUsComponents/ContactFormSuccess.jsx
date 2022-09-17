import { motion } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Navbar2 from "../NavComponents/Navbar2";
import Navbar3 from "../NavComponents/Navbar3";
import Footer from "../FooterComponents/Footer";
import { useNavigate } from "react-router-dom";

const ContactFormSuccess = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    return (

        <body className="bg-color my-36">
        {user ? <Navbar3 icon={"avatar"}/> : <Navbar3 icon={"login"} />}
        <div className="light-backdrop-box absolute left-0 w-full h-1/2 top-20 md:top-24 " />
        <div className="w-full h-full absolute flex flex-col items-center" >
            <div className="dark-backdrop-box flex flex-col w-min justify-around mx-6 p-6 py-12 md:mx-12 md:p-12">
                <div className="flex flex-col text-center gap-2">
                    <h1 className="brown-text" >Cheers</h1>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-6 py-12 md:py-6">
                        <h5 className="text-center brown-text opacity-40">Drop us an email <br /> or <br /> give us a shout on our socials</h5>
                        <div className="flex flex-col w-min h-full px-12 self-center">
                            <div className="flex flex-row justify-between self-center">
                                <motion.button whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.95 }}>
                                    <FaInstagram size={25} style={{ color: "#332817"}}/>
                                </motion.button>
                                <span className="social-tag" style={{paddingLeft: "1rem"}}>@companyInstagram</span>
                            </div>
                            <div className="flex flex-row justify-between">
                                <motion.button whileHover={{ scale: 1.1  }}  whileTap={{ scale: 0.95 }}>
                                    <FaTwitter size={25} style={{ color: "#332817"}}/>
                                </motion.button><span >@companyTwitter</span>
                            </div>
                            <div className="flex flex-row justify-between">
                                <motion.button whileHover={{ scale: 1.1  }}  whileTap={{ scale: 0.95 }}>
                                    <FaTiktok size={25} style={{ color: "#332817"}}/>
                                </motion.button>
                                <span className="social-tag" style={{paddingLeft: "1rem"}}>@companyTikTok</span>
                            </div>
                            <div className="flex flex-row justify-between">
                                <motion.button whileHover={{ scale: 1.1  }}  whileTap={{ scale: 0.95 }}>
                                    <FaYoutube size={25} style={{ color: "#332817"}}/>
                                </motion.button>
                                <span className="social-tag" style={{paddingLeft: "1rem"}}>@companyYoutube</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full">
                <div className="h-full" />
                <Footer />
            </div>
        </div>
    </body>
    
    );
}

export default ContactFormSuccess;