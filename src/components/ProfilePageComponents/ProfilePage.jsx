import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import profileAvatar from "./avatar_img.png"
import PrivateSwitch from "./PrivateSwitch";
import LockIcon from "./LockIcon";
import UnlockIcon from "./UnlockIcon";
import EditPlanButton from "./EditPlanButton";
import MyWorkWindow from "./MyWorkWindow";

import LogoutButton from "../NavComponents/LogoutButton";

import Navbar2 from "../NavComponents/Navbar2";

function ProfilePage() {

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
    }, [user, loading]);

    return(
        <body className="products-page-bg">
            <Navbar2 icon={'settings'} />

            {/* the top part - name etc */}
            <div id="profile-backdrop" />
            <div id="id-strip" className="flex">
                <div id="personal-details" className="flex items-center">
                    <img src={profileAvatar} alt="Avatar" />
                    <div id="profile-name">
                        <h1>{name}</h1>

                        <LogoutButton/>
                    </div>
                </div>
                <div id="impersonal-details">
                    <div>
                        <div className="impersonal-cat items-center">
                            Current Plan:
                        </div>
                        <div className="impersonal-cat items-center">
                            Privacy:
                        </div>
                    </div>
                    <div>
                        <div className="impersonal-status items-center" >
                            <motion.span >"Indie Artist"</motion.span>
                            <EditPlanButton />
                        </div>
                        <div className="impersonal-status items-center">
                            <div className="flex">
                                <LockIcon />
                                <PrivateSwitch />
                                <UnlockIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="profile-page-central-text">
                <h1>My Work</h1>
                <Link className="links" to={'/products'} style={{ textDecoration: 'none' }}>
                    <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>I wanna make more</motion.h3>
                </Link>

            </div>

            <MyWorkWindow />

        </body>
    );
}

export default ProfilePage;