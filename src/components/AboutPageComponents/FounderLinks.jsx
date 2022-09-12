import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function FounderLinks(name) {

    const navigate = useNavigate();

    let color;
    // let padding;
    let twitLink;
    let instaLink;

    let mql = window.matchMedia('(max-width: 40em)');
    let iconSize = 15;
  
    if (mql.matches === false) {
      iconSize = 35;
    }

    if (name === "sam") {
        color = "#C0A483";
        // padding = "paddingRight";
        twitLink = "";
        instaLink = "";
    } else if (name === "greg") {
        color = "#332817";
        // padding = "paddingLeft";
        twitLink = "";
        instaLink = "";
    }


    return (
        <div className="flex flex-col h-full justify-around gap-0">
            <motion.button whileHover={{ scale: 1.1 }} onTap={{ scale: 0.9 }} onClick={ () => navigate({instaLink}) } >
                <FaTwitter size={iconSize} color={"#B6B2AB"} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={ () => navigate({instaLink}) }>
                <FaInstagram size={iconSize} color={"#B6B2AB"}/>
            </motion.button>
        </div>
        
        // <div className="flex flex-col justify-center h-full w-min">
        //     <motion.button 
        //         whileHover={{ scale: 1.1 }} 
        //         onTap={{ scale: 0.9 }} 
        //         onClick={ () => navigate({twitLink}) }
        //         // style={{ padding: "1rem"}}
        //     >
        //         <FaTwitter size={iconSize} color={color} />
        //     </motion.button>
        //     <motion.button 
        //         whileHover={{ scale: 1.1 }} 
        //         whileTap={{ scale: 0.9 }}
        //         onClick={ () => navigate({instaLink}) }
        //     >
        //         <FaInstagram size={iconSize} color={color}/>
        //     </motion.button>
        // </div>
    );
}