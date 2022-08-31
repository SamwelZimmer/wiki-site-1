import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import HamburgerMenuToggle from "./HamburgerMenuToggle";
import HamburgerNavigation from "./HamburgerNavigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 80% 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 80% 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function HamburgerMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="hamburger-background glass-effect" variants={sidebar} />
      {/* .glass-effect slows down the page a bit. Consider alternative */}
      <HamburgerNavigation />
      <HamburgerMenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

export default HamburgerMenu;
