import { motion } from "framer-motion";
import React from "react";
import ModalBackdrop from "./ModalBackdrop";

import phantomImg from "./Logos/PhantomLogo.png";
import metamaskImg from "./Logos/MetamaskLogo.png";
import yoroiImg from "./Logos/YoroiLogo.png";
import googleImg from "./Logos/googleLogo.png";
import fbImg from "./Logos/facebookLogo.png";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

function LoginModal({ handleClose, text }) {


    return (
        <ModalBackdrop onClick={handleClose}>
            <motion.div

                drag

                onClick={ (e) => e.stopPropagation() }
                className="modal modal-container"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
            {/* <button onClick={handleClose}>Close</button> */}
            <h3 className="modal-text">I think I'll log in using ...</h3>

            <div className="modal-grid">
                <div className="google-div general-modal-div">
                    <div>google</div>
                    <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="crypto-icon-btn"
                    >
                        <img className="crypto-icon" src={googleImg} alt=""></img>
                    </motion.button>
                </div>
                <div className="fb-div general-modal-div">
                    <div>facebook</div>
                    <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="crypto-icon-btn"
                    >
                        <img className="crypto-icon" src={fbImg} alt=""></img>
                    </motion.button>
                </div>
                <div className="general-modal-div crypto-div">
                    <div>Crypto</div>
                        <div className="crypto-join-div phantom">
                            <div>
                                Phantom
                            </div>
                            <motion.button 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="crypto-icon-btn"
                            >
                                <img className="crypto-icon" src={phantomImg} alt=""></img>
                            </motion.button>
                        </div>
                        <motion.div 
                            className="crypto-join-div metamask"
                            whileHover={{scale: 2}}>
                            <div>
                                Metamask
                            </div>
                            <motion.button 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="crypto-icon-btn"
                            >
                                <img className="crypto-icon metamask" src={metamaskImg} alt=""></img>
                            </motion.button>
                        </motion.div>
                        <div className="crypto-join-div yoroi">
                            <div>
                                Yoroi
                            </div>
                            <motion.button 
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="crypto-icon-btn"
                            >
                                <img className="crypto-icon" src={yoroiImg} alt=""></img>
                            </motion.button>
                        </div>
                </div>
                <div className="general-modal-div email-div">
                    <div>email</div>
                    <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="crypto-icon-btn"
                    >
                        <i className="fa fa-envelope"></i>
                    </motion.button>
                </div>
                <div className="general-modal-div exit-modal-div">
                    <div>Nah</div>
                    <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="crypto-icon-btn"
                    >
                        <i className="fa fa-exit"></i>
                    </motion.button>
                </div>
            </div>

            </motion.div>
        </ModalBackdrop>
    )
}

export default LoginModal;