import React from "react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, sendPasswordReset } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { motion } from "framer-motion";
import Navbar2 from "../NavComponents/Navbar2";
import Navbar3 from "../NavComponents/Navbar3";

function ResetPassword() {
    const [email, setEmail] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        fetchUserDetails();
    });

    const fetchUserDetails = async () => {
        if (user) {
            try {
                const q = query(collection(db, "users"), where("uid", "==", user.uid));
                const doc = await getDocs(q);
                const data = doc.docs[0].data();
                setEmail(data.email)
              } catch (err) {
                console.error(err);
                alert("An error occured while fetching user data");
              }
        }
    };

    

    return (
        <body className="bg-color mt-16 lg:mt-20">
            {user ? <Navbar3  icon={'avatar'} /> : <Navbar3  icon={'login'}/>}
            <div className="light-backdrop-box flex flex-col absolute top-28 left-6 w-3/4 h-1/2 p-6 md:top-24 md:left-12 md:w-2/3 md:h-2/3 md:p-12 md:gap-20 shadow-md" >
                <h1 className="brown-text text-3xl md:text-5xl">You went and forgot your password, didn't you?</h1>
                <div className="flex flex-col">
                    <h2 className="brown-text opacity-60 text-xl md:text-3xl">Maybe you should be more careful</h2>
                    <h3 className="brown-text opacity-30 p-0 md:text-xl">Bozo</h3>
                </div>
            </div>
            <div className="dark-backdrop-box flex flex-col items-center absolute top-1/2 right-6 w-2/3 p-6 md:top-2/3 md:right-12 md:w-1/2 md:gap-2 shadow-lg">
                <input 
                    type="email"
                    className="form-1 rounded-2xl w-full h-12 p-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOUR EMAIL, SIRE">
                </input>
                <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    className="green-bg grey-text rounded-2xl w-40 md:w-max text-base py-2 sm:px-2 md:px-4 shadow-md"
                    onClick={() => {
                        sendPasswordReset(email); 
                        navigate("/login")}}
                    >
                    Request Password Reset
                </motion.button>
                <motion.div
                    onClick={() => {navigate("/login")}}
                    whileHover={{scale: 1.01}}
                    whileTap={{scale: 0.99}}
                    className="flex flex-col cursor-pointer gap-0 text-center text-sm md:text-base"
                    style={{color: "rgba(51, 40, 23, 0.3)"}}
                >
                    <span>You don't have an account, do you?</span> 
                    <span>Okay, register here.</span>
                </motion.div>
            </div>
            {/* <div className="z-20 w-full bg-slate-400 px-6 md:px-12 flex flex-col">
                <div id="reset-page-heading">
                    <h1 className="brown-text z-20">You went and forgot your</h1>
                    <h1 className="brown-text z-20">password, didn't you?</h1>
                </div>
            
                <div className="relative flex flex-row w-full">
                    <div>
                        <h2>Maybe you should be more careful</h2>
                        <h3>Bozo</h3>
                    </div>

                    <div className="reset-container">
                        <input
                        type="email"
                        className="reset-textbox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="YOUR EMAIL, SIRE"
                        />
                        <motion.button
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="reset-btn"
                        style={{fontSize: "1rem"}}
                        onClick={() => {
                            sendPasswordReset(email); 
                            navigate("/login")}}
                        >
                        Request Password Reset
                        </motion.button>
                        <motion.div
                            onClick={() => {navigate("/login")}}
                            whileHover={{scale: 1.01}}
                            whileTap={{scale: 0.99}}
                            className="pointer centered-column"
                            style={{color: "rgba(51, 40, 23, 0.3)"}}
                        >
                            <span>You don't have an account, do you?</span> 
                            <span>Okay, register here.</span>
                        </motion.div>
                    </div>
                </div>         
            </div>        */}
        </body>

        // <body id="reset-page-bg">
        //     {user ? <Navbar2  icon={'avatar'}/> : <Navbar2  icon={'login'}/>}
        //     <div id="reset-backdrop-box" />
        //     <div id="reset-page-parent">
        //         <div id="reset-page-heading">
        //             <h1>You went and forgot your</h1>
        //             <h1>password, didn't you?</h1>
        //         </div>
            
        //         <div id="reset-box-placement">
        //             <div id="reset-page-subheading">
        //                 <h2>Maybe you should be more careful</h2>
        //                 <h3>Bozo</h3>
        //             </div>

        //             <div className="reset-container">
        //                 <input
        //                 type="email"
        //                 className="reset-textbox"
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 placeholder="YOUR EMAIL, SIRE"
        //                 />
        //                 <motion.button
        //                 whileHover={{scale: 1.05}}
        //                 whileTap={{scale: 0.95}}
        //                 className="reset-btn"
        //                 style={{fontSize: "1rem"}}
        //                 onClick={() => {
        //                     sendPasswordReset(email); 
        //                     navigate("/login")}}
        //                 >
        //                 Request Password Reset
        //                 </motion.button>
        //                 <motion.div
        //                     onClick={() => {navigate("/login")}}
        //                     whileHover={{scale: 1.01}}
        //                     whileTap={{scale: 0.99}}
        //                     className="pointer centered-column"
        //                     style={{color: "rgba(51, 40, 23, 0.3)"}}
        //                 >
        //                     <span>You don't have an account, do you?</span> 
        //                     <span>Okay, register here.</span>
        //                 </motion.div>
        //             </div>
        //         </div>         
        //     </div>       
        // </body>
    );
}

export default ResetPassword;