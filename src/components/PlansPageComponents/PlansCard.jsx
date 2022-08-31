import React from "react";

import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth"; 

import { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart }from "react-icons/fi";
import { Link, createSearchParams, useNavigate } from "react-router-dom";





function PlansCard({ darkCard, dealNo, time }) {
  let bgColor = "#E7E0D6";
  let cardTextColor = "#332817";
  let cardPriceColor = "#FFFBF6"

  if (darkCard) {
    bgColor = "#332817";
    cardTextColor = "#E7E0D6";
    cardPriceColor = "#FFFBF6";
  }

  let dealTitle = "";
  let price = "";
  // let point1 = "";
  // let point2 = "";
  // let point3 = "";

  if (dealNo === 1) {
    dealTitle = "a lil toe tipper";
    if (time === "month") {
      price = "0"
    } else if (time ==='year') {
      price = "0"
    }
  } else if (dealNo === 2) {
    dealTitle = "indie creative";
    if (time === "month") {
      price = "10"
    } else if (time ==='year') {
      price = "95"
    }
  } else if (dealNo === 3) {
    dealTitle = "kinda big shot";
    if (time === "month") {
      price = "40"
    } else if (time ==='year') {
      price = "380"
    }
  }

  let timeText = ""
  if (time === "month") {
    timeText = "/MONTH";
  } else if (time === "year") {
    timeText = "/YEAR"
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const CardPointers = () => {
    return (  
      <ul style={{ color: cardTextColor }}>
        <li>This is point 1</li>
        <li>And point 2</li>
        <li>With point 3</li>
      </ul>)
  }

  const BuyButton = () => {

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const data = {price: "this is price", recurring: "this is recurring"};
    
    if (time === "month") {
      if (dealNo === 1) {
        // when clicked send info -> £0 non-recurring 
      } else if (dealNo === 2) {
        // when clicked send info -> £10 monthly recurring
      } else if (dealNo === 3) {
        // when clicked send info -> £40 monthly recurring
      }
    } else if (time === "year") {
      if (dealNo === 1) {
        // when clicked send info -> £0 non-recurring 
      } else if (dealNo === 2) {
        // when clicked send info -> 95 yearly recurring
      } else if (dealNo === 3) {
        // when clicked send info -> £380 yearly recurring
      }
    }


    return (
        <div className="buy-plan-container">
        <Link to={user ? {pathname: "/pay", state: data} : "/loginprompt"} className="buy-plan-link">
            <motion.div 
              className="buy-plan-btn centered-column"
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              onClick={null}
              >
              <p style={{paddingBottom: "1rem", color: "#B6B2AB"}}>Ima buy this one</p>
              <FiShoppingCart style={{ color: "#332817" }}/>
            </motion.div>
          </Link> 
        </div>
     
    )
  }

  const [buyVisible, setBuyVisible] = useState('');

  const togglePlanCardBody = () => {
    setBuyVisible(!buyVisible)
  }

  return (
      <motion.div 
        className="plans-card pointer"
        whileHover={{scale: 1.1}}
        style={{ background: bgColor }}
        onClick={togglePlanCardBody}
        variants={item}
      >
          <h2 style={{ color: cardTextColor }}>{dealTitle}</h2>
          <h3 className="strokeme" style={{ color: cardPriceColor }}>
              <span className="currencey-symbol">£</span>
              <span className="price-card-value">{price}</span>
              <span className="price-card-timeperiod">{timeText}</span>
          </h3>
          <Divider
              primaryColor="red"
              secondaryColor="grey"
              heightValue={1}
          ></Divider>
          { buyVisible ?  <BuyButton/> : <CardPointers/>}
          
          
      </motion.div>
  );
}



function Divider(props) {
    const { primaryColor, secondaryColor, heightValue } = props;
    console.log(heightValue);
    return (
      <hr
        className="plans-card-hr"
        style={{
          color: primaryColor,
          backgroundColor: secondaryColor,
          height: heightValue
        }}
      />
    );
  }

export default PlansCard;