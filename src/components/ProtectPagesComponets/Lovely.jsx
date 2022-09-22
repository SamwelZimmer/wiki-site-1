import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Navbar3 from "../NavComponents/Navbar3";
import Footer from "../FooterComponents/Footer";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { storage, getDocData, updateStorageMetadata } from "../../firebase";
import { ref, getMetadata } from "firebase/storage";

import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useState } from "react";


export default function Lovely() {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    // i am getting the metadata from firestore storage because I can pass down the storage file path using react router
    // i am getting the firestore document id from this metadata so i can get the upload info from firestore
    // i think it is better to get it from firetore than storage as the data is easier to update using firestore

    const storagePath = location.state.storagePath;
    const docId = location.state.docId;
    updateStorageMetadata(storagePath, docId)
    const storageRef = ref(storage, storagePath); 

    const [docTitle, setDocTitle] = useState("");
    const [docDesc, setDocDesc] = useState("");
    const [docDate, setDocDate] = useState("");
    const [docStatus, setDocStatus] = useState("");

    // Get metadata properties
    getMetadata(storageRef)
    .then((metadata) => {
        const firestoreDocId = metadata.customMetadata.firestoreDocId;
        getDocData(user, firestoreDocId)
            .then((response) => {
                setDocStatus(response["secureStatus"])
                setDocTitle(response["project"]["projectTitle"])
                setDocDesc(response["project"]["projectDesc"])
                setDocDate(response["project"]["uploadDate"])
        })
    })
    .catch((error) => {
        console.log(`Error occured -- ${error}`)
    });



    return (
        <body className="absolute top-0 left-0 w-full bg-color">
            {user ? <Navbar3 icon={'avatar'} /> : <Navbar3 icon={'login'} />}
            <main className="bg-color w-full h-full mt-20 mb-80 md:my-24 px-6 md:px-24">
                <div className="light-backdrop-box w-full shadow-md flex flex-col md:flex-row p-6 pt-12 md:pt-6">
                    <div className="flex flex-col w-full text-center justify-center">
                        <h1 className="brown-text text-3xl md:text-5xl">All locked up</h1>
                        <div className="flex flex-col w-full gap-2">
                            <h2 className="brown-text opacity-60 text-lg md:text-2xl">Just like uncle derrick</h2>
                            <h3 className="brown-text opacity-30 text-xs md:text-base">It's okay, it was only aggravated assault</h3>
                        </div>

                    </div>
                    <div className="bg-color rounded-2xl flex flex-col w-full shadow-md p-4">
                        <div className="flex flex-col text-center gap-1">
                            <p className="text-xs">Title</p>
                            <p className="text-sm brown-text opacity-70">{docTitle}</p>
                        </div>
                        <div className="flex flex-col text-center gap-1">
                            <p className="text-xs">Description</p>
                            <p className="text-sm brown-text opacity-70">{docDesc}</p>
                        </div>
                        <div className="flex flex-col text-center gap-1">
                            <p className="text-xs">Date</p>
                            <p className="text-sm brown-text opacity-70">{docDate}</p>
                        </div>
                        <div className="flex flex-col text-center gap-1">
                            <p className="text-xs">Status</p>
                            <p className="text-sm brown-text opacity-70">{docStatus}</p>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-center p-1">We'll update your project status once it's been processed</p>
                <div className="grid gap-4 md:gap-2 grid-cols-2 grid-rows-3 grid-flow-row md:grid-cols-3 md:grid-rows-2 md:grid-flow-col items-center justify-center p-6 py-12 md:py-6">
                    <p className="text-center md:row-start-1 md:col-start-1">Let's make another</p>
                    <div className="w-full flex justify-center items-center md:row-start-2 md:col-start-1">
                        <motion.button 
                            className="w-12 md:w-16 aspect-square rounded-xl green-bg shadow-md flex justify-center items-center" 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate("/protect-image")}
                        >
                            <BsFillArrowLeftCircleFill size={25} color={"#B6B2AB"} />
                        </motion.button>
                    </div>
                    <div className="w-full flex justify-center items-center md:row-start-2 md:col-start-2">
                        <motion.button 
                            className="w-12 md:w-16 aspect-square rounded-xl grey-bg shadow-md flex justify-center items-center" 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate("/")}
                        >
                            <BiHomeAlt size={25} color={"#332817"} />
                        </motion.button>
                    </div>
                    <p className="text-center md:row-start-1 md:col-start-2">Take me home</p>
                    <p className="text-center md:row-start-1 md:col-start-3">Let's check it out</p>
                    <div className="w-full flex justify-center items-center md:row-start-2 md:col-start-3">
                        <motion.button 
                            className="w-12 md:w-16 aspect-square rounded-xl brown-bg shadow-md flex justify-center items-center" 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate("/profile")}
                        >
                            <CgProfile size={25} color={"#C0A483"} />
                        </motion.button>
                    </div>
                </div>
            </main>
            <Footer />
        </body>
    );
};