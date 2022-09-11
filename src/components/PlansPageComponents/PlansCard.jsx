import React from "react";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth"; 

import { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart }from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";

import { useStripe } from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../helpers";



// let stripePromise;
// // to improve performance, will only call stripe when needed.
// // this function returns stripe when needed
// const getStripe = () => {
//   if (!stripePromise) {
//     // stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
//     stripePromise = loadStripe("pk_test_51LdInQLHyqPzaBemXRaWYv44BL3xXVHKsTSz4gaarLqPd7hCSfKV5R3ZilmpesvQUdjA9sIwcz6CIk1lxNGzrA4b00fUct4VVa");
//   }
//   return stripePromise;
// };

// function PlansCard({ darkCard, dealNo, time, hasButton, pointers }) {

  
//   // ---------------------------------------------------- Button Selction Bullshit
//   let bgColor = "#E7E0D6";
//   let cardTextColor = "#332817";
//   let cardPriceColor = "#FFFBF6"

//   if (darkCard) {
//     bgColor = "#332817";
//     cardTextColor = "#E7E0D6";
//     cardPriceColor = "#FFFBF6";
//   }

//   let dealTitle = "";
//   let price = "";
//   // let point1 = "";
//   // let point2 = "";
//   // let point3 = "";

//   if (dealNo === 1) {
//     dealTitle = "a lil toe-tipper";
//     if (time === "month") {
//       price = "Free"
//     } else if (time ==='year') {
//       price = "Free"
//     }
//   } else if (dealNo === 2) {
//     dealTitle = "indie-creative";
//     if (time === "month") {
//       price = "10"
//     } else if (time ==='year') {
//       price = "95"
//     }
//   } else if (dealNo === 3) {
//     dealTitle = "kinda big-shot";
//     if (time === "month") {
//       price = "40"
//     } else if (time ==='year') {
//       price = "380"
//     }
//   }

//   let timeText = ""
//   if (dealNo !== 1) {
//     if (time === "month") {
//       timeText = "/MONTH";
//     } else if (time === "year") {
//       timeText = "/YEAR"
//     }
//   }
  

//   const motionItem = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1
//     }
//   };

//   const CardPointers = () => {
//     return (  
//       <ul style={{ color: cardTextColor }}>
//         <li>{pointers[0]}</li>
//         <li>{pointers[1]}</li>
//         <li>{pointers[2]}</li>
//       </ul>)
//   }

//   const BuyButton = () => {
  
//     // let planPrice = "";
//     // let planTime = "";
//     let plan 
//     // there has to be a more elegant way than these for loops but the question is - does it fuckin matter
//     if (time === "month") {
//       if (dealNo === 1) {
//         // planPrice = "£0";
//         // planTime = "none";
//         // plan = {
//         //   price: "price_1LdzP5LHyqPzaBemMfMQhZfJ",
//         //   quantity: 1
//         // };
//       } else if (dealNo === 2) {
//         // planPrice = "£10";
//         // planTime = "monthly recurring";
//         plan = {
//           price: "price_1LdJIbLHyqPzaBemnnJmVo9n",
//           quantity: 1
//         };
//       } else if (dealNo === 3) {
//         // planPrice = "£40";
//         // planTime = "monthly recurring";
//         plan = {
//           price: "price_1LdJKzLHyqPzaBemZEMLGmkW",
//           quantity: 1
//         };
//       }
//     } else if (time === "year") {
//       if (dealNo === 1) {
//         // planPrice = "£0";
//         // planTime = "none";
//         // plan = {
//         //   price: "price_1LdzP5LHyqPzaBemMfMQhZfJ",
//         //   quantity: 1
//         // };
//       } else if (dealNo === 2) {
//         // planPrice = "£95";
//         // planTime = "yearly recurring";
//         plan = {
//           price: "price_1LdJJILHyqPzaBemtQCenmeX",
//           quantity: 1
//         };
//       } else if (dealNo === 3) {
//         // planPrice = "£380";
//         // planTime = "yearly recurring";
//         plan = {
//           price: "price_1LdJLPLHyqPzaBemUZCo4KX1",
//           quantity: 1
//         };
//       }
//     }

//     const [user] = useAuthState(auth);

//     const navigate = useNavigate();

//     // this data not needed as stripe handles it now with price_id's
//     // const data = {price: planPrice, recurring: planTime};

//     // const toPayPage = () => {
//     //   if (user) {
//     //     navigate('/pay', {state: data})
//     //   } else {
//     //     navigate('/loginprompt', {state: data})
//     //   }
//     // }


//     // ---------------------------------------------------- Stripe Stuff
//   // to sent an alert for stripe error
//   const [stripeError, setStripeError] = useState(null);
//   // to disable the checkout button when loading stripe
//   const [isLoading, setIsLoading] = useState(false);

//   // this holds all of checkout items
//   const checkoutOptions = {
//     lineItems: [plan],
//     mode: "subscription",
//     successUrl: `${window.location.origin}/success`,
//     cancelUrl: `${window.location.origin}/cancel`
//   };
//   // can also use customer email to prefill email address
//   //strip docs - https://stripe.com/docs/api/checkout/sessions/object

//   const redirectToCheckout = async () => {
//     setIsLoading(true);
//     if (user) {
//       console.log("redirect to checkout");
//       const stripe = await getStripe();
//       // this returns a promise error if there is one
//       const { error } = await stripe.redirectToCheckout(checkoutOptions);
//       console.log("stripe checkout error", error);
  
//       if (error) setStripeError(error.message);
//     } else {
//       navigate('/loginprompt')
//     }
//     setIsLoading(false);
  
//   };

//   //send error to user with an alert
//   if (stripeError) alert(stripeError);



//     return (
//         <div className="buy-plan-container">
//           <div className="buy-plan-link">
//               {/* <Link to={user ? toComponentB : "/loginprompt"} className="buy-plan-link"> */}
//               <motion.div 
//                 className="buy-plan-btn centered-column"
//                 whileHover={{scale: 1.1}}
//                 whileTap={{scale: 0.9}}
//                 // onClick={()=>{toPayPage()}}
//                 onClick={redirectToCheckout}
//                 disabled={isLoading}
//                 >
//                 <p style={{paddingBottom: "1rem", color: "#E7E0D6", fontSize: '0.75rem'}}>{isLoading ? "Chill, i'm loading..." : "I'ma buy this one"}</p>
//                 <FiShoppingCart style={{ color: "#C0A483" }}/>
//               </motion.div>
//             {/* </Link>  */}
//           </div>
//         </div>
     
//     )
//   }

//   const [buyVisible, setBuyVisible] = useState('');

//   const togglePlanCardBody = () => {
//     setBuyVisible(!buyVisible)
//   }

//   return (
//       <motion.div 
//         className="plans-card pointer"
//         whileHover={{scale: 1.1}}
//         style={{ background: bgColor }}
//         onClick={togglePlanCardBody}
//         variants={motionItem}
//       >
//           <h2 style={{ color: cardTextColor }}>{dealTitle}</h2>
//           <h3 className="strokeme" style={{ color: cardPriceColor }}>
//               <span className="currencey-symbol">{dealNo !== 1 ? "£" : "" }</span>
//               <span className="price-card-value">{price}</span>
//               <span className="price-card-timeperiod">{timeText}</span>
//           </h3>
//           <Divider
//               primaryColor="red"
//               secondaryColor="grey"
//               heightValue={1}
//           ></Divider>
//           { buyVisible && hasButton ?  <BuyButton/> : <CardPointers/>}
          
          
//       </motion.div>
//   );
// }



// function Divider(props) {
//     const { primaryColor, secondaryColor, heightValue } = props;
//     console.log(heightValue);
//     return (
//       <hr
//         className="plans-card-hr"
//         style={{
//           color: primaryColor,
//           backgroundColor: secondaryColor,
//           height: heightValue
//         }}
//       />
//     );
//   }













// --------------------------------------------------------------------------- FIRESHIP TUTORIAL



function PlansCard({ darkCard, dealNo, time, hasButton, pointers }) {

  const [user] = useAuthState(auth);


  let plan 
  // there has to be a more elegant way than these for loops but the question is - does it fuckin matter
  if (time === "month") {
    if (dealNo === 1) {
    } else if (dealNo === 2) {
      plan = {
        price: "price_1LdJIbLHyqPzaBemnnJmVo9n",
        quantity: 1
      };
    } else if (dealNo === 3) {
      plan = {
        price: "price_1LdJKzLHyqPzaBemZEMLGmkW",
        quantity: 1
      };
    }
  } else if (time === "year") {
    if (dealNo === 1) {
    } else if (dealNo === 2) {
      plan = {
        price: "price_1LdJJILHyqPzaBemtQCenmeX",
        quantity: 1
      };
    } else if (dealNo === 3) {
      plan = {
        price: "price_1LdJLPLHyqPzaBemUZCo4KX1",
        quantity: 1
      };
    }
  }

  const stripe = useStripe();

  // const product = {
  //   name: 'Hat',
  //   description: 'Pug hat. A hat your pug will love.',
  //   images: [
  //     'your-img',
  //   ],
  //   amount: 799,
  //   currency: 'usd',
  //   quantity: 1,
  // };

  // const product =  {price: "price_1LdJJILHyqPzaBemtQCenmeX", quantity: 1};


  const handleClick = async (event) => {

    const body = { line_items: [plan], userId: user.uid }
    // const body = { line_items: [plan] }
    const { id: sessionId } = await fetchFromAPI('checkouts', {
      body
    });

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error.message);
    }

  };
  
  // ---------------------------------------------------- Button Selction Bullshit
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
    dealTitle = "a lil toe-tipper";
    if (time === "month") {
      price = "Free"
    } else if (time ==='year') {
      price = "Free"
    }
  } else if (dealNo === 2) {
    dealTitle = "indie-creative";
    if (time === "month") {
      price = "10"
    } else if (time ==='year') {
      price = "95"
    }
  } else if (dealNo === 3) {
    dealTitle = "kinda big-shot";
    if (time === "month") {
      price = "40"
    } else if (time ==='year') {
      price = "380"
    }
  }

  let timeText = ""
  if (dealNo !== 1) {
    if (time === "month") {
      timeText = "/MONTH";
    } else if (time === "year") {
      timeText = "/YEAR"
    }
  }
  

  const motionItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const CardPointers = () => {
    return (  
      <ul style={{ color: cardTextColor }}>
        <li>{pointers[0]}</li>
        <li>{pointers[1]}</li>
        <li>{pointers[2]}</li>
      </ul>)
  }

  const BuyButton = () => {

    return (
        <div className="buy-plan-container">
          <div className="buy-plan-link">
              {/* <Link to={user ? toComponentB : "/loginprompt"} className="buy-plan-link"> */}
              <motion.div 
                className="buy-plan-btn centered-column"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                // onClick={()=>{toPayPage()}}
                onClick={handleClick}
                // disabled={isLoading}
                >
                <p style={{paddingBottom: "1rem", color: "#E7E0D6", fontSize: '0.75rem'}}>I'ma buy this one</p>
                <FiShoppingCart style={{ color: "#C0A483" }}/>
              </motion.div>
            {/* </Link>  */}
          </div>
        </div>
     
    )
  }

  const [buyVisible, setBuyVisible] = useState('');

  let mql = window.matchMedia('(max-width: 35em)');

  const togglePlanCardBody = () => {
    setBuyVisible(!buyVisible);
  }

  return (
      <motion.div 
        className="plans-card pointer"
        whileHover={{scale: 1.1}}
        style={ (mql && dealNo !== 1) ? { background: bgColor } : { background: bgColor, justifyContent: "center" } }
        onClick={togglePlanCardBody}
        variants={motionItem}
      >
          <h2 style={{ color: cardTextColor }}>{dealTitle}</h2>
          <h3 style={{ color: cardPriceColor }}>
              <span className="currencey-symbol">{dealNo !== 1 ? "£" : "" }</span>
              <span className="price-card-value"  style={dealNo === 1 ? {paddingRight: "1rem"} :  {paddingRight: "0"}}>{price}</span>
              <span className="price-card-timeperiod">{timeText}</span>
          </h3>
          <Divider
              primaryColor="red"
              secondaryColor="grey"
              heightValue={1}
          ></Divider>
          { buyVisible && hasButton ?  <BuyButton/> : <CardPointers/>}
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