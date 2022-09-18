import React from "react";
import { motion } from "framer-motion";
import ProductPageModalBackdrop from "./ProductPageModalBackdrop";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";


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

const ModalText = ({ title, content }) => (
    <div className="products-page-text flex flex-col text-center">
      <h3 className="green-text text-2xl md:text-4xl">{title}</h3>
      <h5 className="brown-text opacity-60 md:text-lg">{content}</h5>
    </div>
);

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

function StartProjectButton( {btnText, btnLink} ) {
  const navigate = useNavigate();
  return (
    <motion.button 
      className="green-bg w-max p-3 rounded-2xl grey-text"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(btnLink)}
    >
      { btnText }
    </motion.button>
  );
}


const ProductsPageModal = ({ handleClose, content, title, btnText, btnLink }) => {
  
    return (
      <ProductPageModalBackdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
            className="light-backdrop-box flex flex-col items-center justify-center rounded-2xl w-2/3 md:w-1/2 px-4 py-8"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
          <ModalText content={content} title={title} />
            <StartProjectButton btnText={btnText} btnLink={btnLink} />
            <ModalButton onClick={handleClose} />
          </motion.div>

  
      </ProductPageModalBackdrop>
    );
};
  

export default ProductsPageModal;