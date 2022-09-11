import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Navbar2 from "../Navbar2";
import FounderSlider from "./FounderSlider";
// import AboutPageContainer from "./AboutPageContainer";

const About = () => {

    const [user] = useAuthState(auth);
    const [h2Hover, seth2Hover] = useState(false);

    const handleMouseOver = () => {
        seth2Hover(true);
      };
    
      const handleMouseOut = () => {
        seth2Hover(false);
      };

    return (
        <body className="products-page-bg">
            {user ? <Navbar2 icon={"avatar"}/> : <Navbar2 icon={"login"} />}
            <h1>About Page</h1>
            <div id="about-pg-backdrop" />
            <div id="about-pg-grid">
                <div id="about-grid-text" className="about-box">
                    <h1>Who are we?</h1>
                    <motion.h2 onHoverStart={handleMouseOver} onHoverEnd={handleMouseOut}>
                        Wouldn't you like to know{h2Hover ? <span>, weather boy</span> : "" }
                    </motion.h2>
                </div>
                <div id="about-grey" className="about-box"></div>
                <div id="about-transp" className="about-box">
                    <div className="centered-column">
                        <h2 style={{ fontSize: "3rem", textAlign: "center"}}>Check the team.</h2>
                        <h3 style={{ fontSize: "1rem", color: "rgba(51, 40, 23, 0.2)", textAlign: "center"}}>don't be shy, click my face.</h3>
                    </div>
                    <FounderSlider />
                </div>
                <div id="about-long-box" className="about-box"></div>
            </div>
            
        </body>
    );
}

export default About;