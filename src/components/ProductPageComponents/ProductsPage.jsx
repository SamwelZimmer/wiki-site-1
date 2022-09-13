import React from "react";
import ProductsPageProduct from "./ProductsPageProduct";
import { motion } from "framer-motion";
// import HamburgerMenu from "./HamburgerMenu";
import Navbar2 from "../NavComponents/Navbar2";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const productTitles = ["Sound", "Images", "Documents", "Models"];
const productDescription = [
    "Upload an MP3  to save your audioclips, beats and soundbites from piracy.",
    "Artwork. Photographs. T-shirt graphics. Upload as a JPG or PNG to keep your images safe",
    "Your creative writing is your creative writing. Prove your creative writing (or non-creative writing) is your creative creation.",
    "Some text about CAD models or something. IDK",
]

export function ProductsPageContent() {

    const [user] = useAuthState(auth);


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
            
            <div id="backdrop-box"></div>
            <motion.div id="products-grid"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <div className="product-grid-item products-box" id="products-heading-position">
                    <div id="product-page-heading">
                        <h1>It's time to <br></br>pick your poison ...</h1>
                    </div>
                </div>
                
                <ProductsPageProduct boxColor={"offwhite"} title={productTitles[0]} content={productDescription[0]} btnText={"Feature Coming Soon"}  btnLink={''}/>
                <ProductsPageProduct boxColor={"green"} title={productTitles[1]} content={productDescription[1]} btnText={"Let's Get Going"} btnLink={user ? "/protect-image" : "/loginprompt"}/>
                <ProductsPageProduct boxColor={"brown"} title={productTitles[2]} content={productDescription[2]} btnText={"Feature Coming Soon"} btnLink={''} />
                <ProductsPageProduct boxColor={"grey"} title={productTitles[3]} content={productDescription[3]} btnText={"Feature Coming Soon"} btnLink={''} />
               
                <div className="product-grid-item products-box" id="products-subheading-position">
                    <div id="product-page-subheading">
                        <h2>Which of your creations will you protect?</h2>
                    </div>
                </div>
            </motion.div>


        </body>
    );
}

function ProductsPage() {

    return (
        <div>
            <ProductsPageContent />
            {/* I thought it should be the other way around but idk */}
            {/* {user ?  <ProductsPageContent /> : <LoginPrompt />} */}
        </div>
    );
}

export default ProductsPage;