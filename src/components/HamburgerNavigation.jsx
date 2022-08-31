import * as React from "react";
import { motion } from "framer-motion";
import HamburgerMenuItem from "./HamburgerMenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [0, 1, 2, 3, 4];

function HamburgerNavigation() {
  return (
    <motion.ul className="hamburger-nav hamburger-menu-list" variants={variants}>
      {itemIds.map((i) => (
        <HamburgerMenuItem i={i} key={i} />
      ))}
    </motion.ul>
  );
}

export default HamburgerNavigation;
