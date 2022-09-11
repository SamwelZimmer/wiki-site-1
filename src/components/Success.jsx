import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import { FaSpinner } from "react-icons/fa";
import Navbar2 from "./Navbar2";


const SpinnerIcon = () => {
  return (
    <motion.div 
      whileHover={{rotate: 30}}
      whileTap={{rotate: -180}}
    >
      <FaSpinner size={25} color={"#C0A483"}/>
    </motion.div>
  )
}


const Success = () => {

  const [user, loading ] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const url = window.location.href;
  const sessionId = new URL(url).searchParams.get('session_id');



  const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setEmail(data.email)
        setName(data.name);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
});



    return (
      <body className="products-page-bg">
          <Navbar2 icon={'avatar'} />
          <div id="success-pg-container">
            <div className="centered-column">
              <h4 style={{'color': '#332817', 'fontSize': '1.5rem'}}>Cheers, {name.split(" ")[0]}</h4>
              <h2 style={{'color': '#C0A483', 'padding': '2rem 0 4rem 0'}}>You signed up, nice.</h2>
            </div>
            <div id="success-backdrop-box">
              <h1 style={{'color': '#332817', 'fontSize': '3rem'}}>Wanna make use of your new-found powers?</h1>
              <motion.button
                id="success-pg-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onTap={() => {navigate("/products")}}
              >
                <span style={{paddingRight: '1rem'}}>Let's give it a spin</span>
                <SpinnerIcon />
              </motion.button>
            </div>
            <div className="centered-column" style={{"paddingTop": "5%"}}>
              <h4 style={{'color': '#C0A483'}}>
                An electronic letter (aka. an email) was sent to: {email}
              </h4>
              <h4 style={{'color': '#C0A483'}}>
                ** the session id is: {sessionId}
              </h4>
            </div>
          </div>

        {/* <h1>Successful Transaction</h1>
        <h2>Thanks for you purchase *name*</h2> */}
      </body>
    );
};
  
export default Success;