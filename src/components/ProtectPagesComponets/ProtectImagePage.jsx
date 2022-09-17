import { motion } from "framer-motion";
import React, { useState } from "react";
// import axios from "axios";

import Navbar2 from "../NavComponents/Navbar2";
import Navbar3 from "../NavComponents/Navbar3";
import CheckIcon from "./CheckIcon";
import CrossIcon from "./CrossIcon";
import UploadIcon from "./UploadIcon";

import { createProtectImage, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "../FooterComponents/Footer";


function ProtectImagePage() { 

    const [user] = useAuthState(auth);

    const [projectTitle, setProjectTitle] = useState("");
    const [projectDesc, setProjectDesc] = useState("");
    const [projectJustif, setProjectJustif] = useState("");

    const handleClick = (e) => {
        const project = {projectTitle, projectDesc, projectJustif};
        createProtectImage(user, project);
    }

    return (

        <body className="absolute top-0 left-0 w-full bg-color">
            {user ? <Navbar3 icon={'avatar'} /> : <Navbar3 icon={'login'} />}

            <main className="bg-color w-full h-full mt-20 mb-80 md:my-24 px-6 md:px-12">

                <div className="absolute top-1/2 md:top-24 right-0 w-full md:w-2/5 h-1/2 md:h-full px-6 md:pr-12 md:pl-0">
                    <div className="light-backdrop-box h-full w-full" />
                </div>

                <div className="absolute w-full h-1/2 top-20 md:top-24 left-0 px-12 md:pt-8 md:pr-20">
                    <div className="dark-backdrop-box w-full h-full">
                    </div>
                </div>
                
                <div className="absolute w-full h-full left-0 top-20 md:top-24 px-6 pb-20 md:pb-0 md:px-12">
                    <form className="w-full h-full">

                        {/* top horizontal bar */}

                        <div className="w-full h-1/2 px-12 md:p-8 md:pt-16 md:pr-16">
                            <div className="flex flex-col md:flex-row w-full h-full pt-8 pb-6 md:pt-0">
                                <h1 className="brown-text text-4xl md:text-5xl lg:text-6xl w-full self-center">Ain't nobody<br />pinching my<br/> picture...</h1>
                                <div className="flex flex-col gap-3 w-full h-full justify-around">
                                    <div className="flex flex-row items-center">
                                        <input 
                                            className="form-1 w-full rounded-2xl p-3 text-sm md:text-base"
                                            required 
                                            type={"text"} 
                                            name={"projectName"} 
                                            value={projectTitle} 
                                            onChange={ (e) => setProjectTitle(e.target.value) }
                                            placeholder="PROJECT NAME" 
                                        />
                                        <CheckIcon />
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <input 
                                            className="form-1 w-full rounded-2xl p-3 text-sm md:text-base"
                                            required 
                                            type={"text"} 
                                            name={"projectDescription"} 
                                            value={projectDesc} 
                                            onChange={ (e) => setProjectDesc(e.target.value) } 
                                            placeholder="PROJECT DESCRIPTION"
                                        />
                                        <CrossIcon />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* bottom part */}
                        <div className="flex flex-col-reverse gap-0 md:flex-row w-full h-full md:h-1/2 pt-16 pb-6 px-6 md:px-8 md:py-8">
                            
                            {/* text */}
                            <div className="h-1/2 w-full  md:h-full md:w-3/5 flex flex-col pt-6 md:pr-6">
                                <h2 className="brown-text">Copying my canvas...</h2>
                                <h3 className="brown-text opacity-70">Heisting my honest work.</h3>
                                <h4 className="brown-text opacity-50">No?</h4>
                                <h5 className="brown-text opacity-50">Anyway... to prevent people stealing your images (and these shitty one-liners) upload your file along with the other required information.</h5>
                            </div>

                            {/* vertical part */}
                            <div className="flex flex-col w-full h-1/2 pb-10 md:h-full md:w-2/5 md:pl-12 md:pb-0">
                                <textarea 
                                    required 
                                    type={"text"} 
                                    name={"projectUnique"} 
                                    value={projectJustif} 
                                    onChange={ (e) => setProjectJustif(e.target.value) }
                                    cols={"120"} 
                                    rows={"4"} 
                                    className="form-1 w-full h-2/5 rounded-2xl p-3 text-sm md:text-base" 
                                    placeholder="WHY IS THIS PROJECT UNIQUE?" 
                                />
                                <div className="form-1 rounded-2xl h-3/5 flex justify-center items-center">
                                    <motion.button 
                                        class="green-bg rounded-2xl w-min p-3 grey-text self-center" 
                                        whileHover={{ scale: 1.1  }} 
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleClick}
                                    >
                                        Submit
                                    </motion.button>
                                </div>
                            </div>
                        </div>


                    </form>
                </div>

            </main>
            <div className="">
                <Footer />
            </div>
        </body>
    );
}

export default ProtectImagePage;