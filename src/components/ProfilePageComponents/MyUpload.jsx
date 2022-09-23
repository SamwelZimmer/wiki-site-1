import { useNavigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { storage, auth } from "../../firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsInfoCircle } from "react-icons/bs";
import Navbar3 from "../../components/NavComponents/Navbar3";
import Footer from "../FooterComponents/Footer";


export default function MyUpload() {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [uploadUrl, setUploadUrl] = useState("");

    useEffect(() => {
        if (!user) {
            navigate("/profile");
        }
    })

    // const navigate = useNavigate();

    const location = useLocation();
    const title = location.state.title;
    const desc = location.state.content;
    const justif = location.state.justif;
    const uploadDate = location.state.date;
    const uploadType = location.state.type;
    const status = location.state.status;
    const storagePath = location.state.storePath;
    const firebaseDocId = location.state.firebaseDocId;


    useEffect(() => {
        if (storagePath === "dingDangDally") {
            setUploadUrl("https://firebasestorage.googleapis.com/v0/b/ip-blockchain.appspot.com/o/examples%2Fimages%2Fexample-image.png?alt=media&token=898e7574-f5bb-4466-8ab3-f810d4417977");
        } else {
        getDownloadURL(ref(storage, storagePath))
        .then((url) => {
            setUploadUrl(url)
        })
        .catch((error) => {
            alert("Error getting your uploaded document", error)
        });
        }
    }, [])
   
    // when we figure out how to get the blockchain certificates we should show them here
    // will this work for file types other than images?

    return (
        <body className="absolute top-0 left-0 w-full bg-color">
            {user ? <Navbar3 icon={'avatar'} /> : <Navbar3 icon={'login'} />}
            <main className="light-backdrop-box w-full h-full mt-20 mb-80 md:my-24 px-6 md:px-24 py-6 md:py-12 flex flex-col gap-1 items-center">
                <div className="bg-color flex flex-col items-center rounded-2xl shadow-lg w-full h-min md:w-2/3 text-center p-6 py-12">
                    <h1 className="text-4xl md:text-5xl">{title}</h1>
                    <div className="flex flex-col gap-1 w-full items-center">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {window.location.replace(uploadUrl)}}
                            className="light-backdrop-box shadow-md bg-opacity-10 w-max p-3 rounded-2xl flex justify-center pointer"
                        >
                            <img className="w-16" src={uploadUrl} alt="My Work"></img>
                        </motion.div>
                        <p className="text-xs opacity-60">click to view file in browser</p>
                    </div>

                    <div className="flex flex-col gap-0 w-full">
                        <p className="text-xs">Description:</p>
                        <h4 className="text-base" >{desc}</h4>
                    </div>

                    <div className="flex flex-col gap-0 w-full">
                        <div className="flex flex-row w-full justify-center items-center gap-1">
                            <div className="info-dropdown">
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="info-btn flex items-center justify-center">
                                    <BsInfoCircle size={10} color={"#B6B2AB"} />
                                </motion.button>
                                <div className="info-dropdown-menu left-0 flex flex-col bg-color rounded-2xl text-center w-52 p-4">
                                    <p className="brown-text opacity-80 text-sm">I made you fill this out when you uploaded your work. Why? Because it's funny.</p>
                                    <p className="brown-text opacity-50 text-xs">It's pretty much just a little test to see if this piece is yours or not.</p>
                                </div>
                            </div>
                            <p className="text-xs">Uniquenesses:</p>
                        </div>
                        <h4 className="brown-text text-base" >{justif}</h4>
                    </div>
                    
                    <div className="flex flex-row md:justify-around">
                        <div className="flex flex-col gap-0 w-full">
                            <div className="flex flex-row w-full justify-center items-center gap-1">
                                <div className="info-dropdown">
                                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="info-btn flex items-center justify-center">
                                        <BsInfoCircle size={10} color={"#B6B2AB"} />
                                    </motion.button>
                                    <div className="info-dropdown-menu left-0 flex flex-col bg-color rounded-2xl text-center w-52 p-4">
                                        <p className="brown-text opacity-80 text-sm">This is the date that you uploaded your work, not the date it was fully secured.</p>
                                        <p className="brown-text opacity-50 text-xs">I'm Bri-ish so it's day/month/year xx</p>
                                    </div>
                                </div>
                                <p className="text-xs">Date:</p>
                            </div>
                            <h4 className="brown-text text-base" >{uploadDate}</h4>
                        </div>

                        <div className="flex flex-col gap-0 w-full">
                            <p className="text-xs">Type:</p>
                            <h4 className="brown-text text-base" >{uploadType}</h4>
                        </div>

                        <div className="flex flex-col gap-0 w-full">
                            <div className="flex flex-row w-full justify-center items-center gap-1">
                                <div className="info-dropdown">
                                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="info-btn flex items-center justify-center">
                                        <BsInfoCircle size={10} color={"#B6B2AB"} />
                                    </motion.button>
                                    <div className="info-dropdown-menu right-0 flex flex-col bg-color rounded-2xl text-center w-52 p-4">
                                        <p className="brown-text opacity-80 text-sm">This'll go from 'uploaded' to 'secured' when you're fully protected.</p>
                                        <p className="brown-text opacity-50 text-xs">It shouldn't take long. Hold tight.</p>
                                    </div>
                                </div>
                                <p className="text-xs">State:</p>
                            </div>
                            <h4 className="text-base" >{status}</h4>
                        </div>

                    </div> 
                </div>
                <div className="flex flex-row w-full justify-center items-center gap-1">
                    <div className="info-dropdown">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="info-btn flex items-center justify-center">
                            <BsInfoCircle size={10} color={"#B6B2AB"} />
                        </motion.button>
                        <div className="info-dropdown-menu left-0 flex flex-col bg-color rounded-2xl text-center w-52 p-4">
                            <p className="brown-text opacity-80 text-sm">This is the unique ID for your project.</p>
                            <p className="brown-text opacity-50 text-xs">I would't worry about this too much unless you need to talk to use about something. Then keep it handy.</p>
                        </div>
                    </div>
                    <p className="text-xs">Project ID: {firebaseDocId}</p>
                </div>
                
                {/* <h1>{title}</h1>
                <div onClick={() => {window.location.replace(uploadUrl)}}>
                    <img src={uploadUrl} alt={uploadUrl}></img>
                </div> */}
            </main>
            <Footer />
        </body>
 
    
    )
};