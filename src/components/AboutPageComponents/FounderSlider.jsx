import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import { useState } from "react";
import FounderLinks from "./FounderLinks";

import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function FounderSlider() {
  const [samClicked, setSamClicked] = useState(false);
  const [gregClicked, setGregClicked] = useState(false);

  let mql = window.matchMedia('(max-width: 40em)');
  let profileSize = 75;

  if (mql.matches === false) {
    profileSize = 150;
  }
    

  console.log(mql)
  console.log(profileSize)


  const handleSamClicked = () => {
    setSamClicked(!samClicked);
    if (gregClicked) {
      setGregClicked(false);
    }
  };

  const handleGregClicked = () => {
    setGregClicked(!gregClicked);
    if (samClicked) {
      setSamClicked(false);
    }
  };

  const GregContent = () => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col items-center gap-0 justify-around w-28 md:w-96">
              <h4 className="md:text-3xl font-bold grey-text">Gregory</h4>
              <h5 className="md:text-xl grey-text">Co-founder</h5>
            </div>
        </div>

    )
  }

  const SamContent = () => {
    return (
      <div className="flex flex-col items-center gap-0 justify-around w-28 md:w-96">
        <h4 className="md:text-3xl font-bold grey-text">Samwel</h4>
        <h5 className="md:text-xl grey-text">Co-founder</h5>
      </div>
    )
  }

  return (
    <div className="w-full h-[75px] md:h-[150px] flex flex-row justify-between">
      <motion.div
        className="brown-bg flex flex-row w-min gap-3 md:gap-16 rounded-2xl"
        data-isOpen={samClicked}
        onClick={handleSamClicked}
      >
        <motion.div whileHover={{ translateX: -5 }} whileTap={{ translateX: 30 }} className="pointer">
          <CgProfile size={profileSize}color={"#3c4733"}/>
        </motion.div>
        { samClicked && (
          <motion.div data-isOpen={samClicked}>
            <div className="flex flex-row h-[75px] md:h-[150px] w-min gap-0">
              <FounderLinks name={"sam"} />
              <SamContent />
            </div>
          </motion.div>
        )}
        
      </motion.div>

      <motion.div
        className="green-bg flex flex-row w-min gap-3 rounded-2xl"
        data-isOpen={gregClicked}
        onClick={handleGregClicked}
      >
        { gregClicked && (
          <motion.div id="greg-content" data-isOpen={gregClicked}>
            <div className="flex flex-row h-[75px] md:h-[150px] w-min gap-0">
              <GregContent />
              <FounderLinks name={"greg"} />
            </div>
          </motion.div>
        )}
        
        <motion.div
          whileHover={{ translateX: 5 }}
          whileTap={{ translateX: -30 }}
          className="pointer"
        >
          <CgProfile
            size={profileSize}
            color={"#332817"}
          />
        </motion.div>
      </motion.div>
    </div>
);

  // return (
  //     <div className="centered-row justify-between founder-strip">
  //       <motion.div
  //         className="sam-container"
  //         data-isOpen={samClicked}
  //         onClick={handleSamClicked}
  //       >
  //         <motion.div
  //           whileHover={{ translateX: -5 }}
  //           whileTap={{ translateX: 30 }}
  //           className="pointer"
  //         >
  //           <CgProfile
  //             size={150}
  //             color={"#3c4733"}
  //           />
  //         </motion.div>
  //         <motion.div id="sam-content" data-isOpen={samClicked}>
  //           {samClicked ? <SamContent /> : ""}
  //         </motion.div>
  //       </motion.div>

  //       <motion.div
  //         className="greg-container"
  //         data-isOpen={gregClicked}
  //         onClick={handleGregClicked}
  //       >
  //         <motion.div id="greg-content" data-isOpen={gregClicked}>
  //           {gregClicked ? <GregContent /> : ""}
  //         </motion.div>
  //         <motion.div
  //           whileHover={{ translateX: 5 }}
  //           whileTap={{ translateX: -30 }}
  //           className="pointer"
  //         >
  //           <CgProfile
  //             size={150}
  //             color={"#332817"}
  //           />
  //         </motion.div>
  //       </motion.div>
  //     </div>
  // );

}
