import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const pageNames = ["Login", "Pricing", "Products", "SignUp", "Label 5"];
const pageRoutes = ["/join", "/pricing", "/products", "/login", ""]

function HamburgerMenuItem({ i }) {
  const style = { border: `2px solid ${colors[i]}`};
  const textStyle = { color: `${colors[i]}` };
  const hamburgerLabels = `${pageNames[i]}`;
  const navTo = `${pageRoutes[i]}`;

  return (
    <Link className="links" to={navTo} style={{ textDecoration: 'none' }}>
        <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="hamburger-menu-item"
        >
            <div className="hamburger-icon-placeholder" style={style}></div>
            <span style={textStyle}>{hamburgerLabels}</span>
            {/* <div className="hamburger-text-placeholder" style={style}></div> */}
        </motion.li>
    </Link>
    
  );
}

export default HamburgerMenuItem;
