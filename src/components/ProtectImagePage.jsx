import { motion } from "framer-motion";
import React, { useState } from "react";
// import axios from "axios";

import Navbar2 from "./Navbar2";
import CheckIcon from "./ProtectPagesComponets/CheckIcon";
import CrossIcon from "./ProtectPagesComponets/CrossIcon";
import UploadIcon from "./ProtectPagesComponets/UploadIcon";

import { createProtectImage, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


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
        <body className="products-page-bg">
            <Navbar2  icon={'avatar'}/>

            <div id="proImg-vert-backdrop">
                <div id="proImg-thick-entry-container">
                    <form className="proImg-thick-form">
                        <textarea 
                            required 
                            type={"text"} 
                            name={"projectUnique"} 
                            value={projectJustif} 
                            onChange={ (e) => setProjectJustif(e.target.value) }
                            cols={"120"} 
                            rows={"4"} 
                            className="proImg-thick-input" 
                            placeholder="WHY IS THIS PROJECT UNIQUE?" 
                            
                        />
                    </form>
                    <div id="proImg-thick-entry-container-bottom">
                        <div id="proImg-upload-img-container">
                            <UploadIcon />
                            <p>Upload Image</p>
                        </div>
                        <div id="proImg-submit-container" >
                            <motion.button 
                                id="proImg-submit-btn" 
                                whileHover={{ scale: 1.1  }} 
                                whileTap={{ scale: 0.95 }}
                                onClick={handleClick}
                            >
                                Submit
                            </motion.button>
                        </div>
                    </div>
                   
                   
                  
                </div>
            </div>

            <div id="proImg-hor-backdrop">
                {/* page title */}
                <div id="proImg-title-container">
                    <h1>Ain't nobody<br />pinching my<br/> picture...</h1> 
                </div>
                {/* project title and description forms */}
                <div id="proImg-long-entry-container">
                    <form className="proImg-long-form">
                        <input 
                            required 
                            type={"text"} 
                            name={"projectName"} 
                            value={projectTitle} 
                            onChange={ (e) => setProjectTitle(e.target.value) }
                            className="proImg-long-input" 
                            placeholder="PROJECT NAME" 
                        
                        />
                        <CheckIcon />
                    {/* </form>
                    <form className="proImg-long-form"> */}
                        <input 
                            required 
                            type={"text"} 
                            name={"projectDescription"} 
                            value={projectDesc} 
                            onChange={ (e) => setProjectDesc(e.target.value) } 
                            className="proImg-long-input" 
                            placeholder="PROJECT DESCRIPTION" 
                        
                        />
                        <CrossIcon />
                    </form>
                </div>
            </div>

            <div id="proImg-text-container">
                <h2>Copying my canvas...</h2>
                <h3>Heisting my honest work.</h3>
                <h4>No?</h4>
                <h5>Anyway... to prevent people stealing your images (and these shitty one-liners) upload your file along with the other required information.</h5>
            </div>

        </body>
    );
}

export default ProtectImagePage;