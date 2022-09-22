import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

import Navbar2 from "../NavComponents/Navbar2";
import Navbar3 from "../NavComponents/Navbar3";
import CheckIcon from "./CheckIcon";
import CrossIcon from "./CrossIcon";
import UploadIcon from "./UploadIcon";

import { createProtectImage, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "../FooterComponents/Footer";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase"

let mql = window.matchMedia('(max-width: 35em)');

const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
];
  
function validFileType(file) {
    return fileTypes.includes(file.type);
};


export default function ProtectImagePage() { 

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [projectTitle, setProjectTitle] = useState("");
    const [projectDesc, setProjectDesc] = useState("");
    const [projectJustif, setProjectJustif] = useState("");
    const [progress, setProgress] = useState(0);
    const [showProgress, setShowProgress] = useState(false);
    const [showSubmit, setShowSubmit] = useState(true);
    const [imgName, setImgName] = useState("");

    let nameValid;
    let descValid;

    function validation(str) {
        return /^[A-Za-z0-9?!./ |£#%/\-]+$/.test(str);
    }

    if (projectTitle.length > 1 && validation(projectTitle)) nameValid = true;
    if (projectDesc.length > 10 && validation(projectDesc)) descValid = true;


    const toKebabCase = str =>
        str &&
        str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('-');

    const uploadFiles = (file, title) => {
        if (!file) return;
        const storageRef = ref(storage, `/${user.uid}/images/${title}`);
        const metadata = {
            contentType: file.type,
            customMetadata: {
                imageTitle: projectTitle,
                imageDesc: projectDesc,
                imageJustif: projectJustif,
                imageName: file.name,
            },
        };

        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(prog);
        }, 
        (err) => console.log(err),
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then(url => console.log(url))
            }
        );
    }

    const handleClick = (e) => {
        e.preventDefault();
        const file = e.target[3].files[0];
        const fileType = file.type;
        const uploadTimeStamp = file.lastModifiedDate;
        let date = new Date(uploadTimeStamp);
        const uploadDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const kebabTitle = toKebabCase(projectTitle)
        if (validFileType(file)) {
            setShowProgress(true);
            setShowSubmit(false);
            uploadFiles(file, kebabTitle);
            const project = {fileType, projectTitle, projectDesc, projectJustif, uploadDate};
            createProtectImage(user, project, `/${user.uid}/images/${kebabTitle}`);
        } else {
            alert("Use an image, yeah?");
        }
    }

    if (progress === 100) {
        const data = {storagePath: `/${user.uid}/images/${toKebabCase(projectTitle)}`};
        setTimeout(() => { navigate("/lovely", {state: data}) }, 2000);
    }

    return (

        <body className="absolute top-0 left-0 w-full bg-color">
            {user ? <Navbar3 icon={'avatar'} /> : <Navbar3 icon={'login'} />}

            <main className="bg-color w-full h-full mt-20 mb-80 md:my-24 px-6 md:px-12">

                <div className="absolute top-1/2 md:top-24 right-0 w-full md:w-2/5 h-1/2 md:h-full px-6 md:pr-12 md:pl-0">
                    <div className="light-backdrop-box shadow-md h-full w-full" />
                </div>

                <div className="absolute w-full h-1/2 top-20 md:top-24 left-0 px-12 md:pt-8 md:pr-20">
                    <div className="dark-backdrop-box shadow-lg w-full h-full">
                    </div>
                </div>
                
                <div className="absolute w-full h-full left-0 top-20 md:top-24 px-6 pb-20 md:pb-0 md:px-12">
                    <form onSubmit={handleClick} className="w-full h-full">

                        {/* top horizontal bar */}

                        <div className="w-full h-1/2 px-12 md:p-8 md:pt-16 md:pr-16">
                            <div className="flex flex-col md:flex-row w-full h-full pt-8 pb-6 md:pb-0 md:pt-0 md:items-center">
                                <h1 className="brown-text text-4xl md:text-5xl lg:text-6xl w-full self-center">Ain't nobody<br />pinching my<br/> picture...</h1>
                                <div className="flex flex-col gap-3 w-full h-full justify-around">
                                    <div className="flex flex-row items-center">
                                        <div className="flex flex-col w-full h-full gap-0">
                                            <input 
                                                className="form-1 w-full rounded-2xl p-3 text-sm md:text-base"
                                                required 
                                                pattern="[A-Za-z0-9?!. /\|£#%]{2,}"
                                                title="Y'all can use letters, numbers or '?!./\|£#%'"
                                                type={"text"} 
                                                name={"projectName"} 
                                                value={projectTitle} 
                                                onChange={ (e) => setProjectTitle(e.target.value) }
                                                placeholder="PROJECT NAME" 
                                            />
                                            {/* <p className="text-xs px-4 brown-text opacity-40">your masterpiece's name?</p> */}
                                        </div>
                                        {nameValid ? <CheckIcon /> : <CrossIcon />}
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <div className="flex flex-col w-full h-full gap-0">
                                            <input 
                                                className="form-1 w-full rounded-2xl p-3 text-sm md:text-base"
                                                required
                                                pattern="[A-Za-z0-9?!. /-\|£#%]{10,}"
                                                title="Y'all can use letters, numbers or '?!./\|£#%'. Oh, and gimme at least 10 characters. Cheers."
                                                type={"text"} 
                                                name={"projectDescription"} 
                                                value={projectDesc} 
                                                onChange={ (e) => setProjectDesc(e.target.value) } 
                                                placeholder="PROJECT DESCRIPTION"
                                            />
                                            {/* <p className="text-xs px-4 brown-text opacity-40">summarise this thing for me, please</p> */}
                                        </div>
                                        {descValid ? <CheckIcon /> : <CrossIcon />}
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
                                <div className="flex flex-col gap-0 h-2/5 w-full">
                                    <textarea 
                                        required 
                                        type={"text"} 
                                        name={"projectUnique"}
                                        pattern="[A-Za-z0-9?!./-\|£#%]{10,}"
                                        title="Just tell me why your projects really good and stuff. Use words, numbers or these '?!./\|£#%' thing."
                                        value={projectJustif} 
                                        onChange={ (e) => setProjectJustif(e.target.value) }
                                        cols={"120"} 
                                        rows={"4"} 
                                        className="form-1 w-full h-full rounded-2xl p-3 text-sm md:text-base" 
                                        placeholder="WHY IS THIS PROJECT UNIQUE?" 
                                    />
                                    {/* <p className="text-xs px-4">go on, gimme a couple words</p> */}
                                </div>
                                <div className="form-1 rounded-2xl h-3/5 flex flex-col justify-center items-center px-6 gap-3">
                                    {showProgress && <p>Shit's {progress} % ready</p>}
                                    { !showProgress && imgName.length > 0 && (<p className="text-xs">Protect: {imgName} ?</p>)}
                                    <div className="flex flex-row">
                                        {showSubmit && (
                                            <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="pointer brown-bg rounded-2xl p-3 flex justify-center items-center beige-text text-sm md:text-base" for="upload-photo">Find Image</motion.label>    
                                        )}
                                        <input 
                                            required 
                                            type="file" 
                                            className="absolute -z-50 opacity-0" 
                                            name="photo" 
                                            id="upload-photo" 
                                            value={imgName} 
                                            onChange={ (e) => setImgName(e.target.value) }
                                        />
                                        
                                        { imgName.length > 0 && showSubmit && (<motion.button 
                                            className="green-bg rounded-2xl w-min p-3 grey-text self-center" 
                                            whileHover={{ scale: 1.1  }} 
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Submit
                                        </motion.button>) }
                                    </div>
                                    
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