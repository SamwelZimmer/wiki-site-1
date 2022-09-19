import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExamplesPageModal from "./ExamplesPageModal";
import Tshirt from "../../assets/Tshirt2.svg";
import MyCode from "../../assets/MyCode.svg";
import CAD from "../../assets/CAD.svg";
import PaintPalette from "../../assets/PaintPalette.svg";
import Lock1 from "../../assets/Lock1.svg";
import Lock2 from "../../assets/Lock2.svg";
import Lock3 from "../../assets/Lock3.svg";
import Lock4 from "../../assets/Lock4.svg";


const extImg = [Tshirt, PaintPalette, MyCode, CAD];

const position = [
    "aspect-[2/1] md:row-start-1 md:row-span-1 md:col-start-2 md:col-span-2",
    "aspect-[2/1] md:aspect-[1/2] md:row-start-1 md:col-start-1 md:row-span-2 md:col-span-1",
    "aspect-[2/1] md:row-start-2 md:col-start-2 md:col-span-2",
    "aspect-[2/1] md:aspect-[1/2] md:row-start-1 md:row-span-2 md:col-start-4"
];

const exampleText = [
    "Draw something and slap it on a t-shirt. Why TF not.",
    "You into microsoft paint? I haven't touched the thing since I was 6.",
    "A codey boy? Don't worry, not grass needs to be touched.",
    `We're not leaving the "architect's" behind, 3D models can join the party.`
];

const imgClass = ["w-1/3", "h-1/2", "w-1/3", "h-1/2"];

const textColor = ["grey-text opacity-70", "brown-text opacity-50", "beige-text opacity-60", "light-text"];




export default function Example({ exampleNo }) {
    const bgColor = ["green-bg", "dark-backdrop-box", "brown-bg", "grey-bg"];
    const flexType = ["sm:flex-row md:aspect-[2/1] md:h-min", "sm:flex-row md:flex-col md:h-full md:w-full", "flex-row md:aspect-[2/1] md:h-min", "sm:flex-row md:flex-col md:h-full md:w-full"];

    let extClass = `w-full h-full pointer rounded-2xl shadow-md flex items-center justify-center p-4 ${flexType[exampleNo]}  ${bgColor[exampleNo]}`;
    let exampleClass = `w-full h-full flex text-base md:text-xl text-center items-center justify-center h-min z-0 ${textColor[exampleNo]}`;

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    };

    return (

        <motion.div className={position[exampleNo]} variants={item}>
            <motion.div className={extClass} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={ () => (modalOpen ? close() : open()) }>
                <img className={imgClass[exampleNo]} src={extImg[exampleNo]} alt="T-Shirt" />
                <h3 className={exampleClass}>
                    {exampleText[exampleNo]}
                </h3>
            </motion.div>
            <AnimatePresence
    
            // disable any intial animations on children which are present when component first rendered
            initial={false}
            // only render components one at a time
            exitBeforeEnter={true}
            // fires when all animated nodes have exited out
            onExitComplete={() => null}
            >
                {modalOpen && <ExamplesPageModal exampleNo={exampleNo} modalOpen={modalOpen} handleClose={close}  />}
            </AnimatePresence>
        </motion.div>

        // {/* <motion.div className="product-grid-item products-box" id={divId} variants={item}>
        //     <motion.div id={motionDivId} className="pointer p-4 shadow-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={ () => (modalOpen ? close() : open()) }>
        //         {img}
        //     </motion.div>
        //     <AnimatePresence
    
        //     // disable any intial animations on children which are present when component first rendered
        //     initial={false}
        //     // only render components one at a time
        //     exitBeforeEnter={true}
        //     // fires when all animated nodes have exited out
        //     onExitComplete={() => null}
        //     >
        //         {modalOpen && <ExamplesPageModal modalOpen={modalOpen} handleClose={close} content={content} title={title} btnText={btnText} btnLink={btnLink} />}
        //     </AnimatePresence>

        // </motion.div> */}
    );
}

