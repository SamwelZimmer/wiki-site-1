import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import SplashSVG from "./PricingSplash";

function cardVarientsFunction() {
  var RandomOrientation =  (Math.random() < 0.5 ? -1 : 1) * Math.random() * 10

  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 30,
      rotate: RandomOrientation,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  return (
    cardVariants
  );
}

const hue = (h) => `hsl(${h}, 100%, 50%)`;


function Card({ index, content, hueA, hueB, title, price }) {

    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    const [cardIsActive, setCardIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle cardIsActive state on click
    setCardIsActive(current => !current);
  };
  
    return (
      <motion.div
        className="price-card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div onClick={handleClick} className={cardIsActive ? "selected-price-card-splash-test" : "deselected-price-card-splash-test"}>
          <div  style={{ background }}>
            <SplashSVG />
          </div>
        </div>

        <motion.div onClick={handleClick} className={cardIsActive ? "price-card dark-glass-effect selected-price-card" : "price-card glass-effect"} variants={ cardVarientsFunction() }>
          <h3>{title}</h3>
          <h4>{price}</h4>
          {content}
        </motion.div>
      </motion.div>
    );
}

const food = [
    ["1", "🍅", 340, 10, "Deal Name 1", "$1 / month"],
    ["2", "🍊", 20, 40, 'Deal Name 2', "$2 / month"],
    ["3", "🍋", 60, 90, 'Deal Name 3', "$3 / month"],
    ["4", "🍐", 80, 120, 'Deal Name 4', "$5 / month"],
    ["5", "🍏", 100, 140, 'Deal Name 5', "$10 / month"],
    ["6", "🫐", 205, 245, 'Deal Name 6', "$20 / month"],
    ["7", "🍆", 260, 290, 'Deal Name 7', "$50 / month"],
    ["8", "🍇", 290, 320, 'Deal Name 8', "$100 / month"]
];

function PricingCards() {

    return (
      food.map(([index, content, hueA, hueB, title, price]) => (
        <Card key={index} content={content} hueA={hueA} hueB={hueB} title={title} price={price} />
        ))
    );
}

export default PricingCards;