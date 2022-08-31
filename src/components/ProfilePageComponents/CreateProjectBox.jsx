import React from "react";
import { motion } from "framer-motion";

function CreateProjectBox({ title, content }) {

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

    return (
        <motion.div 
          class={ pseudoRandomProjectContainer() }
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            <div style={{ fontSize: '1rem' }} >{title}</div>
            <div style={{ paddingTop: '1rem' }} >{content}</div>
        </motion.div>
    );
}

export default CreateProjectBox;