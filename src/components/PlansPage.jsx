import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar2 from "./Navbar2";
import PlansCard from "./PlansPageComponents/PlansCard";
import TimeSwitch from "./PlansPageComponents/TimeSwitch";
import CurrencyDropdrown from "./PlansPageComponents/CurrencyDropdown";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

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
        <body className="products-page-bg">
            {user ? <Navbar2  icon={'avatar'}/> : <Navbar2  icon={'login'}/>}
            <motion.div 
              id="plans-cards-container"
              variants={container}
              initial="hidden"
              animate="visible"
            >
                <PlansCard dealNo={1} darkCard={true} time={time} />
                <PlansCard dealNo={2} time={time}  />
                <PlansCard dealNo={3} time={time} />
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