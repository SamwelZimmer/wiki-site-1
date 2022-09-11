import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function FounderLinks(name) {

    const navigate = useNavigate();

    let color;
    let padding;
    let twitLink;
    let instaLink;

    if (name === "sam") {
        color = "#3c4733";
        padding = "paddingRight";
        twitLink = "";
        instaLink = "";
    } else if (name === "greg") {
        color = "#332817";
        padding = "paddingLeft";
        twitLink = "";
        instaLink = "";
    }


    return (
        <div className="centered-column" style={{padding: "3rem"}}>
            <motion.button 
                whileHover={{ scale: 1.1 }} 
                onTap={{ scale: 0.9 }} 
                onClick={ () => navigate({twitLink}) }
            >
                <FaTwitter style={{paddingBottom: "0.5rem"}} size={35} color={color} />
            </motion.button>
            <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                onClick={ () => navigate({instaLink}) }
            >
                <FaInstagram style={{paddingTop: "0.5rem"}} size={35} color={color}/>
            </motion.button>
        </div>
    );
}