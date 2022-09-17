import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
// import Navbar2 from "../Navbar2";
import Navbar3 from "../NavComponents/Navbar3";
import FounderSlider from "./FounderSlider";
import Footer from "../FooterComponents/Footer"
// import AboutPageContainer from "./AboutPageContainer";



const ExpandingTile = (num) => {
    const cards = { 
        1: {title: "The What", color: "grey-bg", text: "brown-text", content: "Mauris ipsum lectus, efficitur quis turpis et, imperdiet eleifend risus. Donec cursus nibh sed justo molestie, id maximus neque consequat.", btmText: "Reasonable question, I guess"},
        2: {title: "The Why", color: "green-bg", text: "grey-text opacity-60", content: "Mauris ipsum lectus, efficitur quis turpis et, imperdiet eleifend risus. Donec cursus nibh sed justo molestie, id maximus neque consequat.", btmText: "Because why TF not"},
        3: {title: "The How", color: "bg-color", text: "grey-text", content: "Mauris ipsum lectus, efficitur quis turpis et, imperdiet eleifend risus. Donec cursus nibh sed justo molestie, id maximus neque consequat.", btmText: "Black magic, essentially"},
        4: {title: "The When", color: "grey-bg", text: "brown-text", content: "Mauris ipsum lectus, efficitur quis turpis et, imperdiet eleifend risus. Donec cursus nibh sed justo molestie, id maximus neque consequat.", btmText: "Whenever you're ready, darlin"},
    }

    const [tileOpen, setTileOpen] = useState(false);
    let closedClass = `h-1/3 aspect-[2/1] rounded-2xl ${cards[num.num].color} flex justify-center items-center pointer`;
    let openClass = `h-full w-full rounded-2xl ${cards[num.num].color} flex flex-col px-4 py-8 md:px-12 md:py-12 justify-around items-left gap-2 pointer`;

    return (
        <div className="w-full aspect-[2/1] flex flex-col justify-center items-center">
            <motion.div layout whileHover={tileOpen ? { scale: 1.0 } : {scale: 1.1}} whileTap={tileOpen ? { scale: 1.05 } : {scale: 0.9 }} onClick={() => setTileOpen(!tileOpen)} className={tileOpen ? openClass : closedClass}>
                    <motion.h4 layout="position" className={`${(num.num === 2) ? "grey-text opacity-60" : "brown-text"} font-bold md:text-xl md:px-6`}>{cards[num.num].title}</motion.h4>
                    {tileOpen && (
                    <motion.div>
                    <motion.p className={`${cards[num.num].text} text-sm md:text-lg md:px-6`}>{cards[num.num].content}</motion.p> 
                    </motion.div>
                )}
                </motion.div>
            
            {!tileOpen && (
                <p className="brown-text opacity-20 text-xs md:text-base">{cards[num.num].btmText}</p>
            )}
        </div>
        );
}

const About = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    const [h2Hover, seth2Hover] = useState(false);

    const handleMouseOver = () => {
        seth2Hover(true);
      };
    
      const handleMouseOut = () => {
        seth2Hover(false);
      };

    return (

        <body className="bg-color">
            {user ? <Navbar3 icon={"avatar"} /> : <Navbar3 icon={"login"} />}

            <main>
                <div className="dark-backdrop-box absolute w-full top-20 h-1/4 md:top-24 md:h-1/2" />
                <div className="relative w-screen my-20 px-6 py-6 lg:my-24 lg:px-12 lg:py-12">
                    <div className="light-backdrop-box relative w-full h-max z-0 pb-3">
                        <div className="text-center mb-6 lg:mb-12 py-12 lg:py-16">
                            <h1 className="brown-text text-5xl md:text-8xl">Who are we?</h1>
                            <motion.h3 onHoverStart={handleMouseOver} onHoverEnd={handleMouseOut} className="brown-text opacity-50 text-1xl md:text-2xl">
                                {h2Hover ? "weather boy" : "wouldn't you like to know"}
                            </motion.h3>

                        </div>
                        <div className="flex flex-col items-center px-3">
                            <p className="w-full text-center opacity-30">click to expand</p>
                            <div className="grid grid-flow-row grid-rows-4 grid-cols-1 w-full gap-3 md:grid-rows-2 md:grid-cols-2">
                                <ExpandingTile num={1} />
                                <ExpandingTile num={2} />
                                <ExpandingTile num={3} />
                                <ExpandingTile num={4} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-0 mt-12 mb-6">
                        <p className="brown-text opacity-50 md:text-xl">And finally ...</p>
                        <p className="brown-text opacity-50 md:text-xl">... our turn</p>
                    </div>
                    <div className="dark-backdrop-box flex flex-col w-full h-max py-3 px-3 md:py-12 md:px-12">
                        <div className="flex flex-col justify-center gap-2 md:gap-3 items-center md:py-4">
                            <h4 className="brown-text text-2xl md:text-5xl" >Check the team.</h4>
                            <h5 className="brown-text opacity-40 md:text-xl">don't be shy, click my face.</h5>
                        </div>
                        <FounderSlider />
                    </div>
                    <div className="flex flex-col w-full items-center gap-0 mt-12 md:mt-24">
                        <p className="brown-text opacity-50 md:text-xl">Want to know more?</p>
                        <p className="brown-text opacity-50 md:text-xl">Drop us an <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={ () => navigate("/contact-us") } className="pointer underline underline-offset-1 w-min">email</motion.span></p>
                    </div>
                </div>
            </main>

            <Footer />

        </body>


        // <body className="products-page-bg">
        //     {user ? <Navbar2 icon={"avatar"}/> : <Navbar2 icon={"login"} />}
        //     <h1>About Page</h1>
        //     <div id="about-pg-backdrop" />
        //     <div id="about-pg-grid">
        //         <div id="about-grid-text" className="about-box">
        //             <h1>Who are we?</h1>
        //             <motion.h2 onHoverStart={handleMouseOver} onHoverEnd={handleMouseOut}>
        //                 Wouldn't you like to know{h2Hover ? <span>, weather boy</span> : "" }
        //             </motion.h2>
        //         </div>
        //         <div id="about-grey" className="about-box"></div>
        //         <div id="about-transp" className="about-box">
        //             <div className="centered-column">
        //                 <h2 style={{ fontSize: "3rem", textAlign: "center"}}>Check the team.</h2>
        //                 <h3 style={{ fontSize: "1rem", color: "rgba(51, 40, 23, 0.2)", textAlign: "center"}}>don't be shy, click my face.</h3>
        //             </div>
        //             <FounderSlider />
        //         </div>
        //         <div id="about-long-box" className="about-box"></div>
        //     </div>
            
        // </body>
    );
}

export default About;