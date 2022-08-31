import React from "react";
import { motion } from "framer-motion";
import { useCycle } from "framer-motion";

const currencyItems = ["GBP", "EUR", "USD"];

const slideVerticalAnimation = {
    open: {
      rotateX: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        mass: 0.8,
        type: "spring"
      },
      display: "block"
    },
    close: {
      rotateX: -15,
      y: -320,
      opacity: 0,
      transition: {
        duration: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
};



function CurrencyDropdrown() {

    const [toggleIsOpen, setToggleisOpen] = useCycle(false, true);
    const menuHeight = (currencyItems.length + 1) * 65;

    return (
        <div>
            {toggleIsOpen ? null : 
                <motion.button 
                    className="pointer"
                    whileHover={{scale:1.1}}
                    onClick={setToggleisOpen}
                >
                    <span style={{fontWeight: "bold"}}>
                        XYZ
                    </span>
                    <span>^</span>
                </motion.button>}
            

            <motion.div
                style={{ menuHeight }}
                initial="close"
                animate={toggleIsOpen ? "open" : "close"}
                variants={slideVerticalAnimation}
            >
                <motion.div>
                    <motion.div>
                        <ul className="pointer">
                            {currencyItems.map( (currency, i) => (
                                <motion.li key={i} onClick={setToggleisOpen}>
                                    {currency}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

            </motion.div>
        </div>
    
    );
}

export default CurrencyDropdrown;