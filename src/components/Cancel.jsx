import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import Navbar2 from "./NavComponents/Navbar2";

const Cancel = () => {

  const [isHover, setisHover] = useState();
  const [user, loading ] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();


  const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
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
}, );

  const toggleHover = () => {
    if (isHover) {
      setisHover(false);
    } else {
      setisHover(true);
    }
  }

  return (
    <body className="products-page-bg">
      <Navbar2 icon={'avatar'} />

    <div id="cancel-pg-container">
      <div id="cancel-backdrop-box">
        <h2 style={{'color': '#3c4733'}}>What happened, {name.split(" ")[0]}?</h2>
        <h1 style={{'color': '#332817'}}>Did the thought of power scare you?</h1>
      </div>

      <div id="cancel-pg-bottom">
        <div className="centered-column">
          <h4 style={{'color': '#C0A483', 'fontSize': '2rem', 'paddingBottom': '1rem'}}>Nevermind...</h4>
          <h4 style={{'color': '#332817', 'fontSize': '1.25rem'}}>Do you wanna head back home or try again?</h4>
        </div>
      
        <div id="cancel-btn-row">
          <motion.button 
            id="cancel-pg-home-btn" 
            className="cancel-pg-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onTap={() => navigate("/")}
          >
            Take me home
          </motion.button>
          <motion.button 
            id="cancel-pg-retry-btn" 
            className="cancel-pg-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={toggleHover}
            onHoverEnd={toggleHover}
            onTap={() => navigate("/plans")}
          >
            {isHover ? "Good choice" : "We go again"}
          </motion.button>
        </div>
      </div>
    </div>


    </body>
  );
};
  
export default Cancel;  