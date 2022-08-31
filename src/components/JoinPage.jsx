import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HomeButton from "./HomeButton";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";


function JoinPage() {

    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [signupModalOpen, setSignupModalOpen] = useState(false);

    const closeLoginModal = () => setLoginModalOpen(false);
    const openLoginModal = () => setLoginModalOpen(true);
    const closeSignupModal = () => setSignupModalOpen(false);
    const openSignupModal = () => setSignupModalOpen(true);
 
    return (
        <body className="join-page-bg">
            <HomeButton />
            <main className="join-page-grid">

                <p>Already have an account?</p>
                <p>How about you join us?</p>

                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="join-page-btn login-btn" 
                    onClick={() => (loginModalOpen ? closeLoginModal() : openLoginModal())}
                >
                    Log In
                </motion.button>

                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="join-page-btn signin-btn glass-effect" 
                    onClick={() => (signupModalOpen ? closeSignupModal() : openSignupModal())}
                >
                    Sign Up
                </motion.button>

                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                >
                    {loginModalOpen && <LoginModal modalOpen={loginModalOpen} handleClose={closeLoginModal} />}
                </AnimatePresence>


                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                >
                    {signupModalOpen && <SignUpModal modalOpen={signupModalOpen} handleClose={closeSignupModal} />}
                </AnimatePresence>
            </main>
        </body>
    );
}

export default JoinPage;