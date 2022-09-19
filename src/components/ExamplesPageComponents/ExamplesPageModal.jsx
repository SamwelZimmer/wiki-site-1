import React from "react";
import { motion } from "framer-motion";
import ExamplesPageModalBackdrop from "./ExamplesPageModalBackdrop";
import { useNavigate } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";
import Tshirt from "../../assets/Tshirt2.svg";
import MyCode from "../../assets/MyCode.svg";
import CAD from "../../assets/CAD.svg";
import PaintPalette from "../../assets/PaintPalette.svg";
import Lock1 from "../../assets/Lock1.svg";
import Lock2 from "../../assets/Lock2.svg";
import Lock3 from "../../assets/Lock3.svg";
import Lock4 from "../../assets/Lock4.svg";

const sticker = [Lock1, Lock2, Lock3, Lock4];
const intImg = [Tshirt, PaintPalette, MyCode, CAD];
const title = ["The Porcelain Throne", "The Ol' Bob Ross", "Inception", "It's Not Weird, I Swear"];
const desc = ["A t-shirt design that makes me feel relieved.", "A computer painting me buddy Eric did last weekend (he's 24).", "The entire code-base for this website.", "This 'exaggerated' digital model of Gardevoir was a school project. It was homework. Honest."];

const creator = ["Tai Lopez's Dog", "Mybuddy Eric", "Samwel", "Also Samwel"];

const date = ["04/11/21", "24/04/19", "21/09/22", "08/09/22"];

const file = ["SVG", "JPG", "JSX", "STL"];

const goTo = ["/protect-image", "/protect-image", "/products", "/products"]

// this is used as the modal has 3 possible states
const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
};

export const ModalButton = ({ onClick }) => (
    <motion.div
      className="beige-text"
      type="button"
      whileHover={{ scale: 1.1, rotate: 0 }}
      whileTap={{ scale: 0.95, rotate: 0 }}
      onClick={onClick}
    >
      <CgCloseO />
    </motion.div>
);

export default function ExamplesPageModal({handleClose, exampleNo}) {

    const navigate = useNavigate();

    return (
        <ExamplesPageModalBackdrop onClick={handleClose}>
            <motion.div
              onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
              className="bg-color z-30 flex flex-col items-center justify-center w-full p-4 px-4 py-8 shadow-2xl"
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
                <div className="light-backdrop-box rounded-2xl flex flex-col md:flex-row items-center justify-center w-full p-4 shadow-md gap-3">
                    <div className="bg-color w-full aspect-[2/1] rounded-2xl flex flex-row p-4 justify-around">
                        <img className="w-1/2" src={intImg[exampleNo]} alt="T-Shirt" />
                        <img className="w-1/4" src={sticker[exampleNo]} alt="Sticker" />
                    </div>
                    <div className="w-full md:w-2/3 md:px-6 flex flex-col text-center gap-3">
                        <h1 className="brown-text text-base">{title[exampleNo]}</h1>
                        <h2 className="brown-text text-sm">{desc[exampleNo]}</h2>
                        <div className="w-full flex flex-row text-center justify-between gap-1">
                            <p className="brown-text opacity-50 text-xs">Creator:</p>
                            <p className="brown-text opacity-70 text-xs">{creator[exampleNo]}</p>
                        </div>
                        <div className="w-full flex flex-row text-center justify-between gap-1">
                            <p className="brown-text opacity-50 text-xs">Upload Date:</p>
                            <p className="brown-text opacity-70 text-xs">{date[exampleNo]}</p>
                        </div>
                        <div className="w-full flex flex-row text-center justify-between gap-1">
                            <p className="brown-text opacity-50 text-xs">File Type:</p>
                            <p className="brown-text opacity-70 text-xs">{file[exampleNo]}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full px-4 gap-3">
                    <p>You wanna make one like this?</p>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => navigate(goTo[exampleNo])} className="green-bg grey-text rounded-2xl w-max p-3">
                        Please, Papa
                    </motion.button>
                    <ModalButton onClick={handleClose} />

                </div>

            
            </motion.div>
  
    
        </ExamplesPageModalBackdrop>
      );
}


