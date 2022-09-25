import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Navbar3 from "../NavComponents/Navbar3";
import Footer from "../FooterComponents/Footer";
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

export default function GuidesPage() {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [visible, setVisible] = useState(false)

    return (
        <body className="bg-color"> 
        {user ? <Navbar3 icon={'avatar'} /> : <Navbar3 icon={'login'} />}
        <main className="flex flex-col items-center py-20 md:py-24">
            <div className="flex flex-col gap-2 text-center px-6 md:px-12">
                <h1 className="text-4xl md:text-6xl">A tad confused?</h1>
                <h2 className="text-base md:text-lg opacity-30">You look like you need some help (no offense)</h2>
            </div>
            <div className="w-full md:px-12 xl:px-20">
                <div className="light-backdrop-box flex flex-col text-center w-full p-6 px-20">
                    <h3 className="text-base md:text-lg opacity-60">Maybe you can find what you need here.</h3>
                    <h3 className="text-base md:text-lg opacity-60">We’ve got a bunch of guides to help you out. </h3>
                </div>
            </div>
            <div className="flex flex-col text-center px-6 md:px-12 md:w-1/2">
                <h2 className="text-lg md:text-2xl opacity-60">From step-by-step instructions on how to use this app to dealing with pesky picture pinchers.</h2>
            </div>
            <div className="flex flex-col w-full items-center px-6 md:px-20 lg:px-32 gap-1">
                <div className="light-backdrop-box shadow-md w-full grid grid-flow-row md:grid-cols-2 gap-6 p-6">
                    {items.map((i) => {
                        const data = {componentName: i.component, access: i.access};

                        return (
                        <motion.div className="flex flex-col gap-2 aspect-[2/1] justify-center bg-color shadow-md rounded-2xl pointer p-6" onClick={() => {navigate("/article", {state: data})}} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}> 
                            <div className="flex flex-row justify-between items-center">
                                <h5>{i.title}</h5>
                                {i.access === "free" && <BsFillStarFill color="#3C4733" /> }
                                
                            </div>
                            <p>{i.desc}</p>
                        </motion.div>
                    )})}
                </div>

                <div className="flex flex-col md:flex-row gap-1 justify-between items-center">
                    <div className="flex flex-row gap-1">
                        <p className="text-xs opacity-60">Articles with this:</p>
                        <BsFillStarFill color="#3C4733" />
                    </div>
                    <p className="text-xs opacity-60">icon are only accessible to members.</p>
                    <p className="text-xs opacity-60 underline pointer" onClick={() => navigate("/login")}>Sign up</p>
                </div>

                <div className="py-6" />

                <div className="flex flex-col gap-1 text-center">
                    <p>Canny find what you’re looking for?</p>
                    <p className="opacity-70"><span onClick={() => navigate("/contact-us")} className="pointer">Touch</span> me.</p>
                    <p className="opacity-70">I mean, <span onClick={() => navigate("/contact-us")} className="pointer">touch</span> me.</p>
                    <p className="opacity-70">I mean, <span onClick={() => navigate("/contact-us")} className="pointer">touch</span> me.</p>
                    <p className="opacity-70">I mean <span onClick={() => navigate("/contact-us")} className="pointer underline">get in touch</span>.</p>
                </div>

            </div>
        </main>
        <Footer />
    </body>
    );
};

// access - I want "public" to not require logging in, "free" to be available for anyone logged in and "paid" for people who pay for a plan

const items = [
    {key: 0, title: "Blog 1 Title", access: "free", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra ante vel augue pulvinar commodo. Ut gravida elit placerat accumsan tempor.", component: "BlogExample1" },
    {key: 2, title: "Title of Blog 2", access: "public", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis semper est. Cras eu ex et lacus iaculis blandit.", component: "BlogExample2" },
    {key: 3, title: "Blog Three's Title", access: "public", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra ultrices metus pharetra posuere. Integer placerat dui sit amet neque.", component: "BlogExample3"},
    {key: 3, title: "4th Title Here", access: "public", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum tempor cursus. Donec euismod dapibus tortor, in euismod ex gravida.", component: "BlogExample4"},
];