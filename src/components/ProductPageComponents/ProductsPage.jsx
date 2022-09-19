import React from "react";
import ProductsPageProduct from "./ProductsPageProduct";
import { motion } from "framer-motion";
// import HamburgerMenu from "./HamburgerMenu";
import Navbar2 from "../NavComponents/Navbar2";
import Navbar3 from "../NavComponents/Navbar3";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Footer from "../FooterComponents/Footer";

import Camera from "../../assets/Camera.svg";
import Polaroids from "../../assets/Polaroids.svg";
import iPod from "../../assets/iPod.svg";
import FilingCabinet from "../../assets/FilingCabinet.svg";
import Tablet from "../../assets/Tablet.svg";
import PlayButton from "../../assets/PlayButton.svg";
import FilmReel from "../../assets/FilmReel.svg";

const productTitles = ["Sound", "Images", "Documents", "Videos"];
const productDescription = [
    "Upload an MP3  to save your audioclips, beats and soundbites from piracy.",
    "Artwork. Photographs. T-shirt graphics. Upload as a JPG or PNG to keep your images safe.",
    "Your creative writing is your creative writing. Prove your creative writing (or non-creative writing) is your creative creation. We'll also secure code, powerpoints, 3D model files and pretty much any document type.",
    "Save your short or long-form media from content leeches.",
];

const productGraphics = [
    <motion.div className="w-full h-full flex flex-row">
        <img className="w-full" src={iPod} alt="iPod" />
    </motion.div>,

    <motion.div className="w-full h-full flex flex-row justify-center items-center p-4">
        <img className="w-1/2 h-min" src={Camera} alt="Camera" />
        <img className="w-1/2 h-min" src={Polaroids} alt="Polaroids" />
    </motion.div>,

    <motion.div className="w-full h-full flex flex-row justify-center items-center p-4">
        <img className="w-1/2 h-min" src={FilingCabinet} alt="Filing Cabinet" />
        <img className="w-1/2 h-min" src={Tablet} alt="Tablet" />
    </motion.div>,

    <motion.div className="w-full h-full flex flex-col justify-around items-center">
        <img className="w-full" src={PlayButton} alt="Play Button" />
        <img className="w-full" src={FilmReel} alt="Film Reel" />
    </motion.div>,
];

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
        <div className="w-full h-full bg-color">
            <body className="products-page-bg bg-color w-full h-full absolute top-0 left-0 -z-20">
                {user ? <Navbar3  icon={'avatar'}/> : <Navbar3  icon={'login'}/>}

                <div id="backdrop-box" className="shadow-xl"></div>
                <motion.div id="products-grid"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="product-grid-item products-box" id="products-heading-position">
                        <div className="w-full h-full flex items-center ">
                            <h1 className="text-6xl md:text-7xl p-4">It's time to <br></br>pick your poison ...</h1>
                        </div>
                    </div>
                    
                    <ProductsPageProduct boxColor={"offwhite"} img={productGraphics[0]} title={productTitles[0]} content={productDescription[0]} btnText={"Feature Coming Soon"}  btnLink={''}/>
                    <ProductsPageProduct boxColor={"green"} img={productGraphics[1]} title={productTitles[1]} content={productDescription[1]} btnText={"Let's Get Going"} btnLink={user ? "/protect-image" : "/loginprompt"}/>
                    <ProductsPageProduct boxColor={"brown"} img={productGraphics[2]} title={productTitles[2]} content={productDescription[2]} btnText={"Feature Coming Soon"} btnLink={''} />
                    <ProductsPageProduct boxColor={"grey"} img={productGraphics[3]} title={productTitles[3]} content={productDescription[3]} btnText={"Feature Coming Soon"} btnLink={''} />
                
                    <div className="product-grid-item products-box" id="products-subheading-position">
                        <div className="w-full h-full flex items-center"> 
                            <h2 className="brown-text opacity-70 p-4 text-2xl md:text-4xl -z-10">Which of your creations will you protect?</h2>
                        </div>
                    </div>
                </motion.div>
            </body>
            <div className="absolute top-full left-0 w-full">
                <Footer  />
            </div>
        </div>


        // <body className="products-page-bg">
        //     {/* {user ? <Navbar2  icon={'avatar'}/> : <Navbar2  icon={'login'}/>} */}
        //     {user ? <Navbar3  icon={'avatar'}/> : <Navbar3  icon={'login'}/>}

        //     <div id="backdrop-box"></div>
        //     <motion.div id="products-grid"
        //         variants={container}
        //         initial="hidden"
        //         animate="visible"
        //     >
        //         <div className="product-grid-item products-box" id="products-heading-position">
        //             <div id="product-page-heading">
        //                 <h1>It's time to <br></br>pick your poison ...</h1>
        //             </div>
        //         </div>
                
        //         <ProductsPageProduct boxColor={"offwhite"} title={productTitles[0]} content={productDescription[0]} btnText={"Feature Coming Soon"}  btnLink={''}/>
        //         <ProductsPageProduct boxColor={"green"} title={productTitles[1]} content={productDescription[1]} btnText={"Let's Get Going"} btnLink={user ? "/protect-image" : "/loginprompt"}/>
        //         <ProductsPageProduct boxColor={"brown"} title={productTitles[2]} content={productDescription[2]} btnText={"Feature Coming Soon"} btnLink={''} />
        //         <ProductsPageProduct boxColor={"grey"} title={productTitles[3]} content={productDescription[3]} btnText={"Feature Coming Soon"} btnLink={''} />
               
        //         <div className="product-grid-item products-box" id="products-subheading-position">
        //             <div id="product-page-subheading">
        //                 <h2>Which of your creations will you protect?</h2>
        //             </div>
        //         </div>
        //     </motion.div>
        // </body>

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