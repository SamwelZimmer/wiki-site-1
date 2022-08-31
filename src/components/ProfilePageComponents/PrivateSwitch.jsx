import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function PrivateSwitch() {

    const [isPrivacyOn, setIsPrivacyOn] = useState('false');

    const toggleSwitch = () => setIsPrivacyOn(!isPrivacyOn)

    return(
        <div className="privacy-switch" data-isOn={isPrivacyOn} onClick={toggleSwitch} >
            <motion.div className="privacy-switch-handle" layout transition={spring} ></motion.div>
        </div>
    );
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

export default PrivateSwitch;