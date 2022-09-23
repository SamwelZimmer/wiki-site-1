import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BiTimer } from "react-icons/bi";
import { BsLock }from "react-icons/bs";


import SecuredProjects from "./SecuredProjects";
import UnderwayProjects from "./UnderwayProjects";
import Footer from "../FooterComponents/Footer";


const allIngredients = [
  { icon: <BsLock/>, label: "Secured", content: <SecuredProjects /> },
  { icon: <BiTimer/>, label: "Underway", content: <UnderwayProjects /> },
] ;

const [tomato, lettuce] = allIngredients;
const tabs = [tomato, lettuce];




function MyWorkWindow() {

  const [selectedTab, setSelectedTab] = useState(tabs[0]);


  return (
    <div className="absolute left-0 w-full flex flex-col top-3/4 md:top-full">
      <div className=" w-full flex flex-col  px-6  md:px-12">
        <div className="my-work-window w-full h-min rounded-t-2xl overflow-hidden flex flex-col light-backdrop-box shadow-lg">
          <nav className="my-work-navigation green-bg pt-3 rounded-t-2xl h-16 brown-text">
            <ul id="my-work-map" class="p-0 m-0 text-sm font-medium list-none flex flex-row h-full gap-0 px-3 justify-between">
              {tabs.map((i) => (
                <li
                  key={i.label}
                  className={i === selectedTab ? "relative light-backdrop-box w-1/2 rounded-t-2xl cursor-pointer flex flex-col items-center text-center justify-center gap-0 text-xl md:text-2xl" : "w-1/2 rounded-t-2xl cursor-pointer flex flex-col items-center justify-center gap-0 text-xl md:text-2xl"}
                  onClick={() => setSelectedTab(i)}
                >
                  <div className="flex flex-row gap-3 items-center self-center">
                    <div 
                    className="brown-text"
                    >
                        {i.icon}
                    </div>
                    {`${i.label}`}
                  </div>
                  
                  {i === selectedTab ? (
                    <motion.div className="my-work-underline z-50" layoutId="my-work-underline" />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main className="relative">
            <AnimatePresence exitBeforeEnter>
              <motion.div
                  className="text-2xl md:text-5xl min-h-[20rem]"
                  key={selectedTab ? selectedTab.label : "empty"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
              >
                {selectedTab ? selectedTab.content : "😋"}
              </motion.div>
            </AnimatePresence>
          </main>
          
        </div>
        
      </div>
      <div className="w-full mt-16">
        <Footer />
      </div>
    </div>
    

    // <div className="my-work-position">
    //   <div className="my-work-window">
    //     <nav className="my-work-navigation">
    //       <ul id="my-work-map">
    //         {tabs.map((i) => (
    //           <li
    //             id="my-work-map-item"
    //             key={i.label}
    //             className={i === selectedTab ? "selected" : ""}
    //             onClick={() => setSelectedTab(i)}
    //           >
    //             <div className="my-work-icon">
    //                 {i.icon}
    //             </div>
    //             {`${i.label}`}
    //             {i === selectedTab ? (
    //               <motion.div className="underline" layoutId="underline" />
    //             ) : null}
    //           </li>
    //         ))}
    //       </ul>
    //     </nav>
    //     <main id="my-work-content-container">
    //       <AnimatePresence exitBeforeEnter>
    //         <motion.div
    //             id="my-work-content"
    //             key={selectedTab ? selectedTab.label : "empty"}
    //             initial={{ y: 10, opacity: 0 }}
    //             animate={{ y: 0, opacity: 1 }}
    //             exit={{ y: -10, opacity: 0 }}
    //             transition={{ duration: 0.2 }}
    //         >
    //           {selectedTab ? selectedTab.content : "😋"}
    //         </motion.div>
    //       </AnimatePresence>
    //     </main>
    //   </div>
    // </div>
  );
}

export default MyWorkWindow;
