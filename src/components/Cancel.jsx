import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import Navbar2 from "./NavComponents/Navbar2";
import Navbar3 from "./NavComponents/Navbar3";
import Footer from "./FooterComponents/Footer";

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

      <body className="absolute top-0 left-0 w-full bg-color">
        {user ? <Navbar3 icon={'avatar'} /> : <Navbar3 icon={'login'} />}

        <main className="flex flex-col w-full h-full mt-32 md:mt-24 px-6 md:px-12">
          <div className="flex flex-col w-full">
            <div className="dark-backdrop-box flex flex-col w-full py-12 px-12 text-center">
              <h2 className="opacity-40 text-2xl md:text-4xl">What happened, {name.split(" ")[0]}?</h2>
              <h1 className="text-5xl md:text-6xl">Did the thought of power scare you?</h1>
            </div>
            
            <div className="flex flex-col text-center gap-2">
              <h4 className="beige-text text-xl md:text-3xl">Nevermind...</h4>
              <h4 className="brown-text md:text-xl">Do you wanna head back home or try again?</h4>
            </div>

            <div className="flex flex-row w-full justify-center p-4">
            <div className="flex flex-row w-full md:w-1/2 justify-between">
              <motion.button 
                  className="w-40 rounded-2xl p-3 brown-bg light-text"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onTap={() => navigate("/")}
                >
                  Take me home
                </motion.button>
                <motion.button 
                  className="rounded-2xl w-40 p-3 green-bg grey-text"
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
        </main>

        <Footer />

      </body>




    // <body className="products-page-bg">
    //   <Navbar2 icon={'avatar'} />

    // <div id="cancel-pg-container">
    //   <div id="cancel-backdrop-box">
    //     <h2 style={{'color': '#3c4733'}}>What happened, {name.split(" ")[0]}?</h2>
    //     <h1 style={{'color': '#332817'}}>Did the thought of power scare you?</h1>
    //   </div>

    //   <div id="cancel-pg-bottom">
    //     <div className="centered-column">
    //       <h4 style={{'color': '#C0A483', 'fontSize': '2rem', 'paddingBottom': '1rem'}}>Nevermind...</h4>
    //       <h4 style={{'color': '#332817', 'fontSize': '1.25rem'}}>Do you wanna head back home or try again?</h4>
    //     </div>
      
    //     <div id="cancel-btn-row">
    //       <motion.button 
    //         id="cancel-pg-home-btn" 
    //         className="cancel-pg-btn"
    //         whileHover={{ scale: 1.05 }}
    //         whileTap={{ scale: 0.95 }}
    //         onTap={() => navigate("/")}
    //       >
    //         Take me home
    //       </motion.button>
    //       <motion.button 
    //         id="cancel-pg-retry-btn" 
    //         className="cancel-pg-btn"
    //         whileHover={{ scale: 1.05 }}
    //         whileTap={{ scale: 0.95 }}
    //         onHoverStart={toggleHover}
    //         onHoverEnd={toggleHover}
    //         onTap={() => navigate("/plans")}
    //       >
    //         {isHover ? "Good choice" : "We go again"}
    //       </motion.button>
    //     </div>
    //   </div>
    // </div>


    // </body>
  );
};
  
export default Cancel;  