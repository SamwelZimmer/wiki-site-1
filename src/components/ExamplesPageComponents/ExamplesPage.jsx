import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Navbar3 from "../NavComponents/Navbar3";
import { motion } from "framer-motion";

export default function ExamplesPage() {

    const [user] = useAuthState(auth);

    return (
        <body className="bg-color">
            {user ? <Navbar3  icon={'avatar'}/> : <Navbar3  icon={'login'}/>}

            <div className="light-backdrop-box absolute mx-12 top-16 w-full ">
                Backdropbox
            </div>

            {/* <div class="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden md:max-w-2xl py-6">
            <div class="md:flex">
                <div class="md:shrink-0">
                </div>
                <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                </div>
            </div>
            </div> */}
{/* 
            <div className=" light-backdrop-box   ">
                <h1>Still Unsure?</h1>
                <h2>Check out some example work</h2>
            </div> */}
            

        </body>
    );
}