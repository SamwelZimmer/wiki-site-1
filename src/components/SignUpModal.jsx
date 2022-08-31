import { motion } from "framer-motion";
import React from "react";
import ModalBackdrop from "./ModalBackdrop";

import phantomImg from "./Logos/PhantomLogo.png";
import metamaskImg from "./Logos/MetamaskLogo.png";
import yoroiImg from "./Logos/YoroiLogo.png";

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

function SignUpModal({ handleClose, text }) {
    return (
        <div className="center">
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
                <h3 className="modal-text">I think I'll sign up with ...</h3>

                <div className="modal-grid">
                    <button className="google-btn general-modal-btn">google</button>
                    <button className="fb-btn general-modal-btn">facebook</button>
                    <div className="general-modal-btn crypto-div">
                        <div>Crypto</div>
                            <div className="crypto-join-div phantom">
                                <div>
                                    Phantom
                                </div>
                                <motion.button className="crypto-icon-btn">
                                    <img className="crypto-icon" src={phantomImg} alt=""></img>
                                </motion.button>
                            </div>
                            <div className="crypto-join-div metamask">
                                <div>
                                    Metamask
                                </div>
                                <motion.button className="crypto-icon-btn">
                                    <img className="crypto-icon metamask" src={metamaskImg} alt=""></img>
                                </motion.button>
                            </div>
                            <div className="crypto-join-div yoroi">
                                <div>
                                    Yoroi
                                </div>
                                <motion.button className="crypto-icon-btn">
                                    <img className="crypto-icon" src={yoroiImg} alt=""></img>
                                </motion.button>
                            </div>
                            
                        
                    </div>
                    <button className="general-modal-btn email-btn" general-modal-btn>email</button>
                    <button className="general-modal-btn exit-modal-btn general-modal-btn">Nah</button>
                </div>


                </motion.div>
            </ModalBackdrop>
        </div>
        
    )
}

export default SignUpModal;