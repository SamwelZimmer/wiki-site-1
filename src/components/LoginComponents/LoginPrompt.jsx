import React from "react";
import Navbar3 from "../NavComponents/Navbar3";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../FooterComponents/Footer"

function LoginPrompt() {
    return (

        <body className="bg-color md:py-24 h-screen">
            <Navbar3 icon={'login'} />
            <div className="h-1/6 md:h-0" />
            <div className="absolute w-full h-full">
                <div className="w-full h-full px-6 md:px-12">
                    <h1 className="brown-text text-center text-5xl md:text-7xl">Nuh uh uh.</h1>
                    <div className="light-backdrop-box flex flex-col mt-8 py-12 px-12 md:px-28">
                        <div className="w-full flex flex-col">
                            <h2 className="brown-text text-3xl md:text-5xl">You're not going</h2>
                            <h2 className="brown-text text-3xl md:text-5xl">anywhere...</h2>
                        </div>
                        <div className="w-full flex flex-col text-right">
                            <h2 className="brown-text text-3xl md:text-5xl">... at least until</h2>
                            <h2 className="brown-text text-3xl md:text-5xl">you sign in</h2>
                        </div>
                    </div>
                    <Link to={'/login'} className="flex flex-col justify-center items-center">
                        <motion.button 
                        className="dark-backdrop-box rounded-2xl p-4 mt-8"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        >
                            <p className="brown-text">Okay, let's see then</p>
                        </motion.button>
                    </Link>
                </div>
                <Footer />
            </div>
    </body>


    );
}

export default LoginPrompt;