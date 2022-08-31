import React from "react";
import { motion, useScroll } from "framer-motion";

import HomeButton from "./HomeButton";
import PricingCards from "./PricingCards";
// import HamburgerMenu from "./HamburgerMenu";

function PricePage() {

  const { scrollYProgress } = useScroll();

  
  return (
    <body className="pricing-page-bg">
      <HomeButton></HomeButton>
      <main>
        {/* <HamburgerMenu /> */}
        <PricingCards />
      </main>
      <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
      />
    </body>
  );
}


export default PricePage;
