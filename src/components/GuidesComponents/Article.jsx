import { useNavigate, useLocation } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { motion } from "framer-motion";

import Navbar3 from "../NavComponents/Navbar3";
import Footer from "../FooterComponents/Footer";

import BlogExample1 from "./BlogExample1";
import BlogExample2 from "./BlogExample2";
import { useEffect, useState } from "react";

const articles = {
    "BlogExample1": <BlogExample1 />,
    "BlogExample2": <BlogExample2 />,
};

export default function Article() {

    const [docVisible, setDocVisible] = useState(false);
    const [isUser, setIsUser] = useState();

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const component = location.state.componentName;
    const access = location.state.access;

    useEffect(() => {
        // if ([user].length === 1) { setIsUser(true) }
        // console.log("[user].length: ", [user].length)

        if ( [user][0] === null ) { 
            setIsUser(false) 
        } else {
            setIsUser(true) 
        }
        console.log("isUser: ", isUser)

        if (isUser) {
            if (access === "free")  { 
                setDocVisible(true) 
            }
        } 
        if (access === "public") { setDocVisible(true) }
        console.log("access: ", access)
        console.log("docVisible: ", docVisible)
    })

    

    return (
        <body className="bg-color"> 
        {user ? <Navbar3 icon={'avatar'} /> : <Navbar3 icon={'login'} />}

        { !docVisible && 
            <div className="fixed z-40 top-0 left-0 flex flex-col items-center justify-center w-full h-full">
                <h3 className="text-xl">Fuck...</h3>
                <h3 className="text-3xl">... a free paywall</h3>
                <h3 className="text-2xl">Sign up to access this stuff</h3>
                <motion.button className="w-32 grey-text green-bg rounded-2xl p-3" onClick={() => navigate("/login")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    Okay, Dad
                </motion.button>
            </div>
        }
        

        <main className={`flex flex-col items-center py-20 md:py-24 px-12 ${!docVisible && "blur-sm"}`}>
            <div className="text-justify md:w-7/12">
                {articles[component]}
            </div>
        </main>
        <Footer />
    </body>
    );
}