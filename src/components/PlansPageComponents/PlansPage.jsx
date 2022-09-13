import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar2 from "../NavComponents/Navbar2";
import PlansCard from "./PlansCard";
import TimeSwitch from "./TimeSwitch";
import CurrencyDropdrown from "./CurrencyDropdown";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const pointers1 = [
    "The default one",
    "Uhh.. shit's free",
    "Enjoy 5 free uploads"
];

const pointers2 = [
    "Mid Pointer 1",
    "Mid Pointer 2",
    "Mid Pointer 3"
];

const pointers3 = [
    "High Pointer 1",
    "High Pointer 2",
    "High Pointer 3"
];



function PlansPage() {

    const [data, setData] = useState('');
    const childToParent = (childData) => {
        setData(childData)
    }

    const [user] = useAuthState(auth);

    let time = ""
    if (!data) {
        time = "month";
    } else {
        time = data;
    }

    const container = {
        hidden: { opacity: 1, scale: 0.5 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
    };

    return (
        <body className="subtle-shifting-bg">
            {user ? <Navbar2  icon={'avatar'}/> : <Navbar2  icon={'login'}/>}
            <motion.div 
              id="plans-cards-container"
              variants={container}
              initial="hidden"
              animate="visible"
            >   
                
                <PlansCard dealNo={1} darkCard={true} time={time} hasButton={false} pointers={pointers1}/>
                <PlansCard dealNo={2} time={time} hasButton={true}  pointers={pointers2}/>
                <div className="small-screen-plan-spacing" />
                <PlansCard dealNo={3} time={time} hasButton={true} pointers={pointers3}/>
            </motion.div>

            <div id="plan-page-backdrop">
                <div id="plan-page-bottom-row">
                    <div className="centered-row">
                        <p style={time === "month" ? {color: "rgba(32, 28, 17, 0.3"} : {color: "#332817"}}>yearly</p>
                        <TimeSwitch childToParent={childToParent}/>
                        <p style={time === "month" ? {color: "#332817"} : {color: "rgba(32, 28, 17, 0.3"}}>monthly</p>
                    </div>
                    <div className="centered-row">
                        <p style={{color: "rgba(32, 28, 17, 0.3"}}>currency:</p>
                        <CurrencyDropdrown />
                    </div>

                    
                </div>
            </div>
        </body>
    );
}

export default PlansPage;