import React from "react";
import { useState } from "react"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


function CreateProjectBox({ title, content, justif, date, type, status, storePath, firebaseDocId }) {

    const navigate = useNavigate();

    function pseudoRandomProjectContainer() {

        function projectContainerColour() {
            const colourWeights = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
            const colorIdx =  Math.floor(Math.random() * colourWeights.length);
    
            if ( colourWeights[colorIdx] === 4 ) {
                return "green-block";
            }
            else if ( colourWeights[colorIdx] === 3 ) {
                return "brown-block";
            }
            else if ( colourWeights[colorIdx] === 2 ) {
                return "grey-block";
            }
            else {
                return "offwhite-block";
            }
        }
    
        function projectContainerShape() {
            const sizeWeights = [1, 1, 1, 1, 1, 2, 2, 3, 3, 4];
            const sizeIdx =  Math.floor(Math.random() * sizeWeights.length);
    
            if ( sizeWeights[sizeIdx] === 4 ) {
                return "big-square";
            }
            else if ( sizeWeights[sizeIdx] === 3 ) {
                return "hz-rect";
            }
            else if ( sizeWeights[sizeIdx] === 2 ) {
                return "vr-rect";
            }
            else {
                return "";
            }
        }
    
        return `project-grid-item ${projectContainerShape()} ${projectContainerColour()} pointer`;
    
    }

    const titleTrim = (str) => {
        if (str.length > 15) {
            return `${str.substring(0, 15)} ...`
        } else {
            return str
        }
    }

    const contentTrim = (str) => {
        if (str.length > 30) {
            return `${str.substring(0, 30)} ...`
        } else {
            return str
        }
    }

    


    const data = {title: title, content: content, justif: justif, date: date, type: type, status: status, storePath: storePath, firebaseDocId: firebaseDocId}

    const handleClick = () => {
        navigate("/my-upload", {state: data})
    }

    return (
        <motion.div 
          class={ pseudoRandomProjectContainer() }
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
            <div style={{ fontSize: '1rem' }} >{titleTrim(title)}</div>
            <div style={{ paddingTop: '1rem' }} >{contentTrim(content)}</div>
        </motion.div>
    );
}

export default CreateProjectBox;