import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



import ProductsPageModal from "./ProductPageModal";

function ProductsPageProduct({ boxColor, title, content, btnText, btnLink }) {


    const divId = boxColor + "-box-position"
    const motionDivId = boxColor + "-box"

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
        <motion.div className="product-grid-item products-box" id={divId} variants={item}>
            <motion.div id={motionDivId} className="pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={ () => (modalOpen ? close() : open()) }></motion.div>

            <AnimatePresence
            // disable any intial animations on children which are present when component first rendered
            initial={false}
            // only render components one at a time
            exitBeforeEnter={true}
            // fires when all animated nodes have exited out
            onExitComplete={() => null}
            >
                {modalOpen && <ProductsPageModal modalOpen={modalOpen} handleClose={close} content={content} title={title} btnText={btnText} btnLink={btnLink} />}
            </AnimatePresence>

        </motion.div>
    );
}

export default ProductsPageProduct;