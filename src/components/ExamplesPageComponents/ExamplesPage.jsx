import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Navbar3 from "../NavComponents/Navbar3";
import Footer from "../FooterComponents/Footer"
import { motion } from "framer-motion";
import Example from "./Example";

export default function ExamplesPage() {

    const [user] = useAuthState(auth);

    return (
        <body className="bg-color">
            {user ? <Navbar3  icon={'avatar'}/> : <Navbar3  icon={'login'}/>}

            <main>
                <div className="relative w-screen h-screen my-16 px-6 py-6 lg:my-24 lg:px-12 lg:py-12">
                    <div className="light-backdrop-box shadow-md relative w-full h-max z-0">
                        <div className="w-full flex flex-col text-center justify-around py-12 h-56 lg:h-60 ">
                            <h1 className="brown-text text-5xl md:text-7xl">Still Unsure?</h1> 
                            <h3 className="brown-text opacity-30 text-l md:text-xl ">Check out some examples.</h3>
                        </div>
                        {/* not sure how to make it so these spacers work for every screen size */}
                        <div className="h-44"/>
                        <div className="h-2 lg:h-12"/>
                        <div className="lg:h-0.5"/>
                    </div>
                </div>
                <div className="absolute w-full top-80 lg:top-96 px-10 lg:px-16">
                    <div className="z-10 grid grid-flow-row grid-rows-4 grid-cols-1 w-full gap-3 md:grid-rows-2 md:grid-cols-4 md:gap-6">
                        {/* <div className="row-start-1 col-start-1 col-span-2 aspect-[2/1] lg:row-start-1 lg:row-span-1 lg:col-start-2 lg:col-span-2">
                            <div className="w-full h-full rounded-2xl green-bg shadow-md" />
                        </div> */}

                        <Example exampleNo={0} />
                        <Example exampleNo={1} />
                        <Example exampleNo={2} />
                        <Example exampleNo={3} />

                        {/* <div className="row-start-2 row-span-2 col-start-1 lg:row-start-1 lg:col-start-1 lg:row-span-2 lg:col-span-1">
                            <div className="w-full h-full rounded-2xl dark-backdrop-box shadow-md" />
                        </div>
                        <div className="row-start-2 row-span-2 col-start-2 lg:row-start-2 lg:col-start-2 lg:col-span-2">
                            <div className="w-full h-full rounded-2xl brown-bg lg:h-min lg:aspect-[2/1] shadow-md" />
                        </div>
                        <div className="row-start-4 col-start-1 col-span-2 lg:row-start-1 lg:row-span-2 lg:col-start-4">
                            <div className="w-full h-full rounded-2xl grey-bg shadow-md" />
                        </div> */}
                    </div>
                </div>
                {/* footer spacer */}
                <div className="h-64 lg:h-32" />
                <div className="md:h-96 lg:h-0" />

            </main>
            <Footer />
        </body>
    );
}