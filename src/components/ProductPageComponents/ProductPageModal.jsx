import React from "react";
import { motion } from "framer-motion";
import ProductPageModalBackdrop from "./ProductPageModalBackdrop";
import { Link } from "react-router-dom";
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
    <div className="products-page-text">
      <h3 style={{"padding-bottom": "1rem", "padding-top": "1rem", "color": "#C0A483", fontSize: "3rem", textAlign: "center", paddingRight: "25px" }}>{title}</h3>
      <h5 style={{"color": "#463C2C", fontSize: "1.5rem", "padding-bottom": "1rem", textAlign: "center" }}>
        {content}
      </h5>
      {/* <h4 style={{"color": "#3C4733" }}>{featureStatus}</h4> */}
    </div>
);

export const ModalButton = ({ onClick }) => (
    <motion.div
      style={{"padding-top": "1rem", "color": "#C0A483", height: "10%" }}
      type="button"
      whileHover={{ scale: 1.1, rotate: 0 }}
      whileTap={{ scale: 0.95, rotate: 0 }}
      onClick={onClick}
    >
      <CgCloseO />
    </motion.div>
);

const StartProjectButton = ({ btnText, btnLink }) => (
  <Link className="links" to={btnLink} style={{ textDecoration: 'none' }}>
    <motion.button 
      id="start-project-btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      { btnText }
    </motion.button>
  </Link>
  
)


const ProductsPageModal = ({ handleClose, content, title, btnText, btnLink }) => {
  
    return (
      <ProductPageModalBackdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
            className="products-page-modal"
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