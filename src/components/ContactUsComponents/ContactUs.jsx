import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Navbar2 from "../NavComponents/Navbar2";

const COMPANY_EMAIL = "samwel.dev.test@gmail.com"
const formSubmissionUrl = `https://formsubmit.co/${COMPANY_EMAIL}`
const REDIRECT_URL = "http://localhost:3000/contact-us-thanks"

const ContactUs = () => {

    const [user, loading] = useAuthState(auth);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const fetchUserDetails = async () => {
        if (user) {
            try {
                const q = query(collection(db, "users"), where("uid", "==", user.uid));
                const doc = await getDocs(q);
                const data = doc.docs[0].data();
                setName(data.name);
                setEmail(data.email)
              } catch (err) {
                console.error(err);
                alert("An error occured while fetching user data");
              }
        }
    };
    
    // the empty array is neccesary to stop useEffect 
    // constantly resetting the name and email field
    useEffect(() => {
        if (loading) return;
        fetchUserDetails();
    },[]);

    const [disable, setDisable] = useState(false);

    const handleSubmit = (e) => {
        setDisable(true);
    }

    return (
        <body className="products-page-bg">
            {user ? <Navbar2 icon={"avatar"}/> : <Navbar2 icon={"login"} />}
            <div id="contact-bg-strip" />
            <div id="contact-box" className="centered-column justify-around">
                <div className="centered-column text-center">
                    <h1>Wanna Talk?</h1>
                    <h4><strike>I've got a spare pillow</strike></h4>
                </div>
                <div className="centered-row contact-row">
                    <form id="form-column" action={formSubmissionUrl} method="POST" onSubmit={handleSubmit}>
                        <input type="hidden" name="_subject" value="Client Email"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="hidden" name="_next" value={REDIRECT_URL}></input>
                        <div className="centered-row contact-long-form-container">
                            <div className="contact-long-form">
                                <input 
                                    required 
                                    type={"text"} 
                                    name={"enquirerName"} 
                                    className="contact-long-input" 
                                    placeholder="YOUR NAME" 
                                    value={name}
                                    onChange={ (e) => setName(e.target.value) }
                                />
                            </div>
                            <div className="contact-long-form">
                                <input 
                                    required 
                                    type={"text"} 
                                    name={"enquirerEmail"} 
                                    className="contact-long-input" 
                                    placeholder="YOUR EMAIL"
                                    pattern="[A-Za-z0-9._+-?!]+@[A-Za-z0-9 -]+\.[A-Za-z]{2,}"
                                    title="How about you try a valid email address??"
                                    value={email}
                                    onChange={ (e) => setEmail(e.target.value) }
                                />
                            </div>
                        </div>
                        <div className="contact-thick-form">
                            <textarea 
                                required 
                                type={"text"} 
                                name={"enquirerMsg"} 
                                cols={"120"} 
                                rows={"4"} 
                                className="contact-thick-input" 
                                placeholder="SPIT IT OUT, WE'LL LISTEN" 
                                value={msg}
                                onChange={ (e) => setMsg(e.target.value) }
                            />
                        </div>
                        {disable ? <h4 style={{color: "#332817", opacity: "0.2" }}>Hold on whilst we send your message. I'm sure it was insightful</h4> :
                        <div id="contact-submit-container">
                            <motion.button 
                                id="contact-submit-btn" 
                                whileHover={{ scale: 1.1  }} 
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                            >
                                Submit
                            </motion.button>
                        </div>
                        }


                    </form>
                    <div id="socials-column" className="centered-column">
                        <h5>Drop us an email <br /> or <br /> give us a shout on our socials</h5>
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
                                </motion.button><span className="social-tag" style={{paddingLeft: "1rem"}}>@companyTwitter</span>
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
                                <span className="social-tag" style={{paddingLeft: "1rem"}}>@companyYoutube</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </body>
    );
}

export default ContactUs;