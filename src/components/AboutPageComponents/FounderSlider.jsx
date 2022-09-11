import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import { useState } from "react";
import FounderLinks from "./FounderLinks";

export default function FounderSlider() {
  const [samClicked, setSamClicked] = useState(false);
  const [gregClicked, setGregClicked] = useState(false);

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
        <div className="centered-column founder-content-div">
            <div className="centered-column">
                <h4>Gregory</h4>
                <h5>Co-founder</h5>
            </div>
            <FounderLinks name={"greg"} />
        </div>

    )
  }

  const SamContent = () => {
    return (
        <div className="centered-row founder-content-div">
            <FounderLinks name={"sam"} />
            <div className="centered-column">
                <h4>Samwel</h4>
                <h5>Co-founder</h5>
            </div>
        </div>
    )
  }

  return (
      <div className="centered-row justify-between founder-strip">
        <motion.div
          className="sam-container"
          data-isOpen={samClicked}
          onClick={handleSamClicked}
        >
          <motion.div
            whileHover={{ translateX: -5 }}
            whileTap={{ translateX: 30 }}
            className="pointer"
          >
            <CgProfile
              size={150}
              color={"#3c4733"}
            />
          </motion.div>
          <motion.div id="sam-content" data-isOpen={samClicked}>
            {samClicked ? <SamContent /> : ""}
          </motion.div>
        </motion.div>

        <motion.div
          className="greg-container"
          data-isOpen={gregClicked}
          onClick={handleGregClicked}
        >
          <motion.div id="greg-content" data-isOpen={gregClicked}>
            {gregClicked ? <GregContent /> : ""}
          </motion.div>
          <motion.div
            whileHover={{ translateX: 5 }}
            whileTap={{ translateX: -30 }}
            className="pointer"
          >
            <CgProfile
              size={150}
              color={"#332817"}
            />
          </motion.div>
        </motion.div>
      </div>
  );
}
