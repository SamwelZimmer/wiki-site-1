import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import profileAvatar from "./avatar_img.png"
import PrivateSwitch from "./PrivateSwitch";
import LockIcon from "./LockIcon";
import UnlockIcon from "./UnlockIcon";
import EditPlanButton from "./EditPlanButton";
import MyWorkWindow from "./MyWorkWindow";
import { BsInfoCircle } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";

import LogoutButton from "../NavComponents/LogoutButton";

import Navbar2 from "../NavComponents/Navbar2";
import Navbar3 from "../NavComponents/Navbar3";
import Footer from "../FooterComponents/Footer";

function ProfilePage() {

    const [user, loading ] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    let mql = window.matchMedia('(max-width: 35em)');

    const fetchUserName = async () => {
        try {
          const q = query(collection(db, "users"), where("uid", "==", user.uid));
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          setName(data.name);
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);

    return(

        <body className="bg-transparent">
            <Navbar3 icon={'settings'} color={false} /> 
            <main className="w-full mt-10 lg:mt-12 h-full">
                <div className="bg-color fixed top-0 left-0 -z-20 h-full w-full">
                    <div className="dark-backdrop-box fixed left-0 -z-10 w-full flex flex-col justify-center items-center top-1/3 h-1/2 md:top-1/2 md:pt-16">
                        <h1 className="brown-text font-bold">My Work</h1>
                        <Link className="links" to={'/products'} style={{ textDecoration: 'none' }}>
                            <motion.button
                                className="brown-bg rounded-2xl w-28 aspect-[2/1] light-text text-sm"
                                whileHover={{ scale: 1.1 }} 
                                whileTap={{ scale: 0.9 }}
                            >
                                make more
                            </motion.button>
                        </Link>
                        <BsArrowDownShort size={15} color={"#332817"} />
                    </div>
                </div>
                <div className="w-full z-10 px-6 pt-12 md:p-12">
                    <div className="light-backdrop-box flex flex-col px-6 py-6 md:px-12">
                        <div className="dark-backdrop-box items-center w-full flex flex-row p-3 h-28 md:p-6 md:h-48 md:gap-12">
                            <img className="h-full aspect-square rounded-full" src={profileAvatar} alt="Avatar" />
                            <h1 className="brown-text text-center text-lg md:text-5xl">{name}</h1>
                        </div>
                        <div className="flex flex-row self-center justify-between items-center w-full md:px-6 md:w-1/2">
                            <div className="flex flex-col text-center gap-2">
                                <p className="grey-text text-sm md:text-base">Current Plan:</p>
                                <div className="flex flex-row items-center justify-center gap-2">
                                    <p className="beige-text md:text-lg">Indie Artist</p>
                                    <EditPlanButton />
                                </div>
                                
                            </div>
                            <div className="flex flex-col text-center gap-2">
                                <p className="grey-text text-sm md:text-base">Profile Status:</p>
                                <div className="flex flex-row gap-2 items-center justify-center">
                                    <p className="beige-text md:text-lg">Public</p>
                                    <div className="info-dropdown">
                                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="info-btn flex items-center justify-center">
                                            <BsInfoCircle size={15} color={"#B6B2AB"} className="opacity-80" />
                                        </motion.button>
                                        <div className="info-dropdown-menu flex flex-col bg-color rounded-2xl text-center">
                                            <p className="brown-text opacity-80 text-sm">Once day (hopefully) you will have the option of showing your designs on a shared page and have ranking and all that nice stuff.</p>
                                            <p className="brown-text opacity-50 text-xs">But not yet, and for now your account is private by default</p>
                                        </div>

                                    </div>
                                </div>
                            </div>  
                            <div className="flex flex-col text-center items-center gap-0">
                                <LogoutButton />    
                                <p className="grey-text opacity-60 text-xs md:text-sm">Logout</p>
                            </div>  
                        </div>
                    </div>
                  
                    <MyWorkWindow />
                

                </div>


               


            </main>
        </body>

        // <body className="products-page-bg">
        //     <Navbar2 icon={'settings'} />

        //     {/* the top part - name etc */}
        //     <div id="profile-backdrop" />
        //     <div id="id-strip" className="flex">
        //         <div id="personal-details" className="flex items-center">
        //             <img src={profileAvatar} alt="Avatar" />
        //             <div id="profile-name">
        //                 <h1>{name}</h1>

        //                 <LogoutButton/>
        //             </div>
        //         </div>
        //         <div id="impersonal-details">
        //             <div>
        //                 <div className="impersonal-cat items-center">
        //                     Current Plan:
        //                 </div>
        //                 <div className="impersonal-cat items-center">
        //                     Privacy:
        //                 </div>
        //             </div>
        //             <div>
        //                 <div className="impersonal-status items-center" >
        //                     <motion.span >"Indie Artist"</motion.span>
        //                     <EditPlanButton />
        //                 </div>
        //                 <div className="impersonal-status items-center">
        //                     <div className="flex">
        //                         <LockIcon />
        //                         <PrivateSwitch />
        //                         <UnlockIcon />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div id="profile-page-central-text">
        //         <h1>My Work</h1>
        //         <Link className="links" to={'/products'} style={{ textDecoration: 'none' }}>
        //             <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>I wanna make more</motion.h3>
        //         </Link>

        //     </div>

        //     <MyWorkWindow />

        // </body>
    );
}

export default ProfilePage;