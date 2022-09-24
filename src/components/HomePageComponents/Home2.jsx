import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

import Navbar3 from "../NavComponents/Navbar3";
import ExplainAccordian from "./ExplainAccordian";
import Footer from "../FooterComponents/Footer";
import TopRightArrow from "../../assets/Arrow1.svg";
import TopLeftArrow from "../../assets/Arrow2.svg";
import BottomRightArrow from "../../assets/Arrow3.svg";
import BottomLeftArrow from "../../assets/Arrow4.svg";


function Home2() {

    const [user] = useAuthState(auth);
    const [nerdIsHover, setNerdIsHover] = useState();
    const navigate = useNavigate();

    // for the scroll progress bar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // for the animated graphics
    const observerLeft = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-home-graphic");
            } 
            // this repeats each time you scroll past
            // else {
            //     entry.target.classList.remove("show-home-graphic");
            // }
        });
    });

    const hiddenElementsLeft = document.querySelectorAll(".hidden-home-graphic-left");
    hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

    const observerRight = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-home-graphic");
            } 
        });
    });

    const hiddenElementsRight = document.querySelectorAll(".hidden-home-graphic-right");
    hiddenElementsRight.forEach((el) => observerRight.observe(el));






    return (
        <body className="bg-color"> 
            {user ? <Navbar3 icon={'avatar'} /> : <Navbar3 icon={'login'} />}

            <main>
                <motion.div className="fixed top-0 left-0 right-0 h-2 brown-bg z-10" style={{ scaleX }} />

                <div className="absolute w-screen">
                    {/* from the company name at the top */}
                    <div className="w-screen flex flex-col items-center my-16 px-6 pb-6 lg:my-24 lg:px-12 lg:pb-12">
                        <h3 className="beige-text px-0 py-0 text-center md:text-2xl">Company Name</h3>
                        <div className="light-backdrop-box z-20 shadow-xl flex flex-col w-full h-max py-12 px-6 gap-3 md:py-24 md:px-24 md:gap-12 xl:px-48">
                            <h1 className="brown-text text-left text-5xl md:text-8xl">Copyrighting, </h1>
                            <h1 className="brown-text text-right text-5xl md:text-8xl">just better</h1>
                        </div>
                        <h2 className="brown-text opacity-50 px-0 py-0 text-center text-xl md:text-3xl">Protect your ideas and prove your creatorship</h2>
                        <motion.button 
                            className="green-bg w-1/3 md:w-1/6 aspect-[2/1] rounded-xl grey-text md:text-xl shadow-md" 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            onClick={ () => { if (user) {navigate("/products")} else {navigate("/login")} } }
                        >
                            Get Started
                        </motion.button>
                        <div className="px-3 w-full md:w-1/2 pt-6 text-center">
                            <h4 className="beige-text text-sm md:text-lg">You know what, fuck it ...</h4>
                            <h3 className="beige-text md:text-xl">... sign up today and get 3 free uploads</h3>
                        </div>
                    </div>

                    {/* from it's 'simple card' */}
                    <div className="relative w-full">
                        <div className="w-full relative top-0 left-0 z-20 px-6 md:px-52">
                            <div className="light-backdrop-box z-20 shadow-lg flex flex-col text-center w-full px-3 py-12 md:py-24">
                                <h3 className="p-0 brown-text text-xl md:text-3xl">It's simple</h3>
                                <div className="grid grid-flow-row grid-cols-2 grid-rows-4 gap-3 px-3 md:px-16">
                                    <div className="w-full h-full text-right flex flex-col gap-3">
                                        <h5 className="brown-text font-bold md:text-xl">Choose your creative works</h5>
                                        <p className="grey-text text-sm md:text-base">Photos, music, art? We got you</p>
                                    </div>
                                    <motion.div layout whileHover={{ rotate: 15 }} whileTap={{ rotate: 15 }} className="h-full w-full hidden-home-graphic-right flex justify-center">
                                        <img className="rotate-90 w-12 md:w-16 self-center" src={TopRightArrow} alt="Top Right Arow" />
                                    </motion.div>
                                    <div className="w-full h-full text-left flex flex-col gap-3 col-start-2 row-start-2">
                                        <h5 className="brown-text font-bold md:text-xl">Upload it</h5>
                                        <p className="grey-text text-sm md:text-base">It’s as simple as drag and drop</p>
                                    </div>
                                    <motion.div layout whileHover={{ rotate: 15 }} whileTap={{ rotate: 15 }} className="h-full w-full hidden-home-graphic-left flex justify-center">
                                        <img className="rotate-90 w-8 md:w-10 self-center" src={TopLeftArrow} alt="Top Right Arow" />
                                    </motion.div>
                                    <div className="w-full h-full text-right flex flex-col gap-3 col-start-1 row-start-3">
                                        <h5 className="brown-text font-bold md:text-xl">Get a recipt</h5>
                                        <p className="grey-text text-sm md:text-base">Proving you made what you made</p>
                                    </div>
                                    <motion.div layout whileHover={{ rotate: 15 }} whileTap={{ rotate: 15 }} className="h-full w-full hidden-home-graphic-right flex justify-center">
                                        <img className="rotate-90 w-10 md:w-14 self-center" src={BottomRightArrow} alt="Top Right Arow" />
                                    </motion.div>
                                    <motion.div layout whileHover={{ rotate: 15 }} whileTap={{ rotate: 15 }} className="h-full w-full hidden-home-graphic-left flex justify-center grey-text">
                                        <img className="rotate-90 w-10 md:w-12 self-center grey-text" src={BottomLeftArrow} alt="Top Right Arow" />
                                    </motion.div>
                                    <div className="w-full h-full text-left flex flex-col gap-3 col-start-2 row-start-4">
                                        <h5 className="brown-text font-bold md:text-xl">Save yourself from headaches</h5>
                                        <p className="grey-text text-sm md:text-base">Throw those ibuprofen away</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="dark-backdrop-box absolute top-16 left-0 w-full h-full flex flex-col justify-end text-center">
                        </div>
                    </div>
                    <div className="relative z-200 h-screen">
                        <div className="dark-backdrop-box h-96 flex flex-col justify-end px-12">
                            <div className="flex flex-col h-80 gap-6 justify-end items-center pb-24">
                                <div className="flex flex-col text-center gap-3">
                                    <h4 className="brown-text text-2xl md:text-4xl">Not sure what to protect?</h4>
                                    <h5 className="brown-text opacity-50 md:text-lg">Perhaps some inspiration</h5>
                                </div>
                                <motion.button 
                                    whileHover={{ scale: 1.1 }} 
                                    whileTap={{ scale: 0.9 }} 
                                    onClick={ () => navigate("/examples") }
                                    className="brown-bg aspect-[2/1] rounded-xl beige-text w-28 md:w-36 md:text-lg shadow-md"
                                >
                                    Examples
                                </motion.button>
                            </div>
                        </div>

                        <div className="flex flex-col text-center gap-0 px-6 py-20 h-max w-full md:px-12">
                            <div className="light-backdrop-box z-20 shadow-lg flex flex-col text-center px-3 pt-12 pb-3 md:px-8 md:pb-8 md:pt-20">
                                <div className="flex flex-col gap-3 md:pb-6">
                                    <h4 className="brown-text text-2xl md:text-5xl">You need more?</h4>
                                    <h5 className="brown-text opacity-50 md:text-2xl">Checkout our upgrade plans</h5>
                                </div>
                                <div className="h-full w-full grid grid-flow-row grid-cols-2 grid-rows-3 gap-3 md:grid-flow-col md:grid-cols-3 md:grid-rows-2 md:gap-8"> 
                                    <div className="h-full w-full col-start-1 row-start-1">
                                        <motion.button 
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={ () => navigate("/plans") }
                                            className="brown-bg w-full aspect-[2/1] first:rounded-xl flex flex-col justify-center items-center gap-2 shadow-md"
                                        >
                                            <p className="white-text font-bold text-lg md:text-2xl">Free</p>
                                            <p className="white-text opacity-50 text-xs md:text-lg">default plan</p>
                                        </motion.button>
                                    </div>
                                    <div className="h-full w-full flex flex-col justify-center gap-2 col-start-2 row-start-1 md:gap-4 md:col-start-1 md:row-start-2">
                                        <p className="brown-text opacity-50 md:text-lg">3 uploads</p>
                                        <p className="brown-text opacity-50 md:text-lg">0 strings</p>
                                    </div>
                                    <div className="h-full w-full col-start-2 row-start-2 md:col-start-2 md:row-start-2">
                                        <motion.button 
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={ () => navigate("/plans") }
                                            className="bg-color w-full h-full rounded-xl flex flex-col justify-center items-center gap-2 shadow-md"
                                        >
                                            <p className="brown-text font-bold text-lg md:text-2xl">£10/month</p>
                                            <p className="brown-text opacity-50 text-xs md:text-lg">£8/month**</p>
                                        </motion.button>
                                    </div>
                                    <div className="h-full w-full flex flex-col justify-center gap-2 col-start-1 row-start-2 md:gap-4 md:col-start-2 md:row-start-1">
                                        <p className="brown-text opacity-50 md:text-lg">point 1</p>
                                        <p className="brown-text opacity-50 md:text-lg">point 2</p>
                                    </div>
                                    <div className="h-full w-full col-start-1 row-start-3 md:col-start-3 md:row-start-1">
                                        <motion.button 
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={ () => navigate("/plans") }
                                            className="bg-color w-full h-full rounded-xl flex flex-col justify-center items-center gap-2 shadow-md"
                                        >
                                            <p className="brown-text font-bold text-lg md:text-2xl">£40/month</p>
                                            <p className="brown-text opacity-50 text-xs md:text-lg">£32/month**</p>
                                        </motion.button>
                                    </div>
                                    <div className="h-full w-full flex flex-col justify-center gap-2 col-start-2 row-start-3 md:gap-4 md:col-start-3 md:row-start-2">
                                        <p className="brown-text opacity-50 md:text-lg">point 3</p>
                                        <p className="brown-text opacity-50 md:text-lg">point 4</p>
                                    </div>
                                </div>
                            </div>
                            <p className="brown-text opacity-40 text-xs pt-1 md:pt-2">**clears throat sensually** yearly plans benefit from a 20% reduction in price</p>
                        </div>
                        <div className="relative dark-backdrop-box h-max flex flex-col py-12 mb-32 px-6 md:px-12">
                            <div className="flex flex-col text-center gap-3 md:my-12">
                                <h3 className="px-0 brown-text text-3xl md:text-6xl">"But how does it work?"</h3>
                                <h5 className="brown-text opacity-50 md:text-lg">Glad you asked, hypothetical person</h5>
                            </div>
                            <div className="light-backdrop-box z-20 shadow-lg flex flex-col pt-12 pb-8 px-6">
                                <div className="flex flex-col py-6 md:px-20">
                                    <h5 className="text-left brown-text text-xl md:text-3xl">Alright, i'ma give you the outline of the process.</h5>
                                    <motion.h6 className="w-full text-right brown-text opacity-50 md:text-xl" onHoverStart={ () => setNerdIsHover(!nerdIsHover) } onHoverEnd={ () => setNerdIsHover(!nerdIsHover) }>
                                        {nerdIsHover ? "nerd" : "If you’re smart like that just click the box and regret your decision"}     
                                    </motion.h6>
                                </div>
                                <div className="w-full">
                                    <ExplainAccordian />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>
        </body>
    )
}

export default Home2;