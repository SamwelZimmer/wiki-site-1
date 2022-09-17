import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar2 from "../NavComponents/Navbar2";
import Navbar3 from "../NavComponents/Navbar3";
import Footer from "../FooterComponents/Footer";
import PlansCard from "./PlansCard";
import TimeSwitch from "./TimeSwitch";
import CurrencyDropdrown from "./CurrencyDropdown";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const pointers1 = [
    "The default one",
    "Uhh.. shit's free",
    "Enjoy 5 free uploads"
];

const pointers2 = [
    "Mid Pointer 1",
    "Mid Pointer 2",
    "Mid Pointer 3"
];

const pointers3 = [
    "High Pointer 1",
    "High Pointer 2",
    "High Pointer 3"
];



function PlansPage() {

    // let mql = window.matchMedia('(min-width: 768px)');
    // console.log(mql)

    const [data, setData] = useState('');
    const childToParent = (childData) => {
        setData(childData)
    }

    const [user] = useAuthState(auth);

    let time = ""
    if (!data) {
        time = "month";
    } else {
        time = data;
    }

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

        <body className="absolute top-0 left-0 w-full bg-color">
            {user ? <Navbar3  icon={'avatar'}/> : <Navbar3  icon={'login'}/>}

            <main className="w-full mt-20 md:my-28 md:mb-80 px-6 md:px-12">

                <div className="dark-backdrop-box fixed flex flex-col md:flex-row md:absolute top-20 pb-24 px-6 md:top-2/3 left-0 w-full h-1/2 md:h-2/3 md:pt-24 md:px-12">
                    <div className="w-full md:w-1/2 flex flex-col px-12 pt-12 md:pb-12 md:justify-end">
                        <h1 className="w-full text-3xl md:text-6xl">Pick a card ...</h1>
                        <h1 className="w-full text-right text-3xl md:text-6xl">... any card</h1>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 z-50 pt-2 md:justify-center"> 
                        <div className="flex flex-row justify-center items-start">
                            <p style={time === "month" ? {color: "rgba(32, 28, 17, 0.3"} : {color: "#332817"}}>yearly</p>
                            <TimeSwitch childToParent={childToParent}/>
                            <p style={time === "month" ? {color: "#332817"} : {color: "rgba(32, 28, 17, 0.3"}}>monthly</p>
                        </div>
                        <p className="brown-text opacity-30 text-center text-xs">a yearly deal saves you XX %, so maybe havea think about it</p>
                    </div>
        
                </div>

                <div className="w-full absolute left-0 top-1/2 px-6 md:px-0 content-center md:top-0 md:relative md:w-full">
                    <motion.div 
                    className="flex flex-col md:flex-row justify-between md:justify-around"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    >   
                        
                        <PlansCard dealNo={1} darkCard={true} time={time} hasButton={false} pointers={pointers1}/>
                        <PlansCard dealNo={2} time={time} hasButton={true}  pointers={pointers2}/>
                        {/* <div className="small-screen-plan-spacing" /> */}
                        <PlansCard dealNo={3} time={time} hasButton={true} pointers={pointers3}/>
                    </motion.div>
                </div>

            </main>
                
            <div className="absolute top-full left-0 flex flex-col w-full">
                <div className="h-40 md:h-0" />
                <div className="h-96 md:h-0" />
                <div className="h-96 md:h-0" />
                <div className="h-96 md:h-0" />
                <Footer />
            </div>

            
        </body>



        // <body className="subtle-shifting-bg">
        //     {user ? <Navbar2  icon={'avatar'}/> : <Navbar2  icon={'login'}/>}
        //     <motion.div 
        //       id="plans-cards-container"
        //       variants={container}
        //       initial="hidden"
        //       animate="visible"
        //     >   
                
        //         <PlansCard dealNo={1} darkCard={true} time={time} hasButton={false} pointers={pointers1}/>
        //         <PlansCard dealNo={2} time={time} hasButton={true}  pointers={pointers2}/>
        //         <div className="small-screen-plan-spacing" />
        //         <PlansCard dealNo={3} time={time} hasButton={true} pointers={pointers3}/>
        //     </motion.div>

        //     <div id="plan-page-backdrop">
        //         <div id="plan-page-bottom-row">
        //             <div className="centered-row">
        //                 <p style={time === "month" ? {color: "rgba(32, 28, 17, 0.3"} : {color: "#332817"}}>yearly</p>
        //                 <TimeSwitch childToParent={childToParent}/>
        //                 <p style={time === "month" ? {color: "#332817"} : {color: "rgba(32, 28, 17, 0.3"}}>monthly</p>
        //             </div>
        //             <div className="centered-row">
        //                 <p style={{color: "rgba(32, 28, 17, 0.3"}}>currency:</p>
        //                 <CurrencyDropdrown />
        //             </div>

                    
        //         </div>
        //     </div>
        // </body>
    );
}

export default PlansPage;