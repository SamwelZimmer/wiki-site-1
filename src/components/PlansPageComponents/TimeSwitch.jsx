import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";


let data = "month"


export default function TimeSwitch({ childToParent }) {


    const [montly, setMonthly] = useState('true');
    const toggleSwitch = () => {
        setMonthly(!montly)
        if (montly) {
            data = "year"
            childToParent(data);
        } else {
            data = "month"
            childToParent(data);
        }
    }


    return(
        <div className="privacy-switch" data-isOn={montly} onClick={toggleSwitch}>
            <motion.div className="privacy-switch-handle" layout transition={spring}></motion.div>
        </div>
    );
}


const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

