import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import Face1 from "../../assets/Face1.svg";
import Face2 from "../../assets/Face2.svg";
import Face3 from "../../assets/Face3.svg";
import Face4 from "../../assets/Face4.svg";
import Face5 from "../../assets/Face5.svg";
import Face6 from "../../assets/Face6.svg";
import Face7 from "../../assets/Face7.svg";
import Face8 from "../../assets/Face8.svg";
import Face9 from "../../assets/Face9.svg";
import Face10 from "../../assets/Face10.svg";
import Face11 from "../../assets/Face11.svg";
import { useState } from "react";

const graphics = [Face1, Face2, Face3, Face4, Face5, Face6, Face7, Face8, Face9, Face10, Face11];

const colorDir = ["bg-gradient-to-t", "bg-gradient-to-tr", "bg-gradient-to-r", "bg-gradient-to-br", "bg-gradient-to-b", "bg-gradient-to-bl", "bg-gradient-to-l", "bg-gradient-to-tl"];
const fromColor = ["from-slate-700", "from-gray-600", "from-red-800", "from-amber-700", "from-lime-800", "from-teal-800", "from-sky-800", "from-indigo-600"];
const toColor = ["to-slate-400", "to-gray-400", "to-red-400", "to-amber-400", "to-lime-500", "to-teal-400", "to-sky-400", "to-indigo-400"];




const getPart = (i, arr) => {
    return arr[i]
}

export default function GetProfilePicture() {

    const [bgValue, setBgValue] = useState("");
    const [imgValue, setImgValue] = useState("");

    const [user] = useAuthState(auth);

    const fetchPP = async () => {
        try {
          const q = query(collection(db, "users"), where("uid", "==", user.uid));
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          return data.avatar
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
    };

    fetchPP().then(
        (res) => {
            setBgValue(res.split("-")[0]);
            setImgValue(res.split("-")[1]);
        }
    )

    return (
        <div className={`${getPart(bgValue.split('.')[0], colorDir)} ${getPart(bgValue.split('.')[1], fromColor)} ${getPart(bgValue.split('.')[2], toColor)} w-full aspect-square rounded-full p-3 md:p-4`}>
            <img className="w-full aspect-square" src={getPart(imgValue, graphics)} alt="Avatar" />
        </div>
    );

}

