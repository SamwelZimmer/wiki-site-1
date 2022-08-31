// import { useEffect } from "react";
import { motion } from "framer-motion";

function ProductPageModalBackdrop( {children, onClick} ) {

    return(
        <motion.div 
        className="products-page-modal-backdrop"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
}

export default ProductPageModalBackdrop;