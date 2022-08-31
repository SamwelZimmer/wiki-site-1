import React from "react";

function RandomBlobSVG(props) {
    // pseudorandom shape
    const paths = [
        "M34.4,-10.5C37.7,-1.1,28.7,13,17.5,20.1C6.4,27.2,-6.8,27.4,-16.1,20.9C-25.3,14.4,-30.7,1.4,-27.3,-8.1C-24,-17.6,-12,-23.5,1.8,-24.1C15.6,-24.7,31.1,-19.9,34.4,-10.5Z",
        "M26.4,-16C32.3,-4.9,34,7.8,28.9,16.8C23.8,25.8,11.9,31,2,29.8C-7.9,28.7,-15.8,21.2,-21,12.1C-26.2,3.1,-28.8,-7.5,-24.8,-17.4C-20.9,-27.3,-10.4,-36.6,-0.1,-36.5C10.2,-36.5,20.4,-27.1,26.4,-16Z",
        "M19.5,-14.3C27.5,-5.5,37.7,2.7,37.3,10.1C36.9,17.5,25.8,24.1,15.4,27.4C4.9,30.7,-4.9,30.8,-12.2,26.7C-19.4,22.7,-24,14.6,-23.9,7.6C-23.8,0.6,-19,-5.4,-14.2,-13.4C-9.5,-21.5,-4.7,-31.7,0.5,-32.1C5.7,-32.5,11.5,-23.1,19.5,-14.3Z",
        "M19.4,-24.3C22.2,-20.7,19.7,-11.8,19.9,-4.4C20.1,3,23.1,9,21.3,12.4C19.5,15.8,12.9,16.6,6.8,19C0.7,21.4,-5,25.4,-8.7,24C-12.5,22.7,-14.2,15.9,-16.4,10.4C-18.5,4.8,-21,0.3,-22,-5.6C-23,-11.5,-22.6,-19,-18.7,-22.4C-14.7,-25.8,-7.4,-25.3,0.4,-25.8C8.2,-26.3,16.5,-27.9,19.4,-24.3Z",
        "M20.2,-25.5C27.1,-22.8,34.2,-18.1,35.1,-12.2C36,-6.2,30.6,1,26.9,7.6C23.2,14.2,21.1,20.2,16.9,24.7C12.7,29.2,6.3,32.2,0.5,31.5C-5.3,30.8,-10.6,26.4,-18,22.9C-25.3,19.4,-34.6,16.8,-39.2,10.8C-43.8,4.8,-43.6,-4.7,-39.2,-11.1C-34.8,-17.5,-26.2,-20.9,-19,-23.5C-11.8,-26.1,-5.9,-28,0.4,-28.5C6.7,-29,13.3,-28.3,20.2,-25.5Z",
        "M19,-27.9C26,-25,33.9,-22.1,39.1,-16.3C44.2,-10.4,46.5,-1.7,44,5.4C41.6,12.5,34.4,18.1,27.9,22.5C21.4,26.9,15.6,30.1,9.6,31.4C3.5,32.6,-2.8,31.8,-10.1,31.1C-17.3,30.4,-25.5,29.8,-31.6,25.8C-37.7,21.7,-41.7,14.1,-43.5,5.9C-45.3,-2.4,-44.9,-11.4,-40.1,-16.8C-35.3,-22.3,-26.1,-24.3,-18.7,-27C-11.2,-29.8,-5.6,-33.3,0.2,-33.5C6,-33.8,12,-30.9,19,-27.9Z",
        "M18.9,-31.3C24.3,-29.6,28.3,-24.1,32.1,-18.3C36,-12.4,39.7,-6.2,41.4,0.9C43,8.1,42.5,16.2,38.7,22.2C34.9,28.1,27.8,31.9,20.8,35.3C13.8,38.7,6.9,41.8,1,40.1C-5,38.4,-9.9,32.1,-14.2,27.1C-18.5,22.1,-22.1,18.5,-27.3,14.2C-32.5,9.9,-39.4,4.9,-40.5,-0.6C-41.6,-6.2,-37,-12.4,-32.8,-18.7C-28.7,-24.9,-25.1,-31.1,-19.8,-32.9C-14.4,-34.6,-7.2,-31.9,-0.2,-31.5C6.7,-31.1,13.5,-33.1,18.9,-31.3Z",
    ];

    const path = paths[Math.floor(Math.random() * paths.length)];



    // random colours
    const transparency = Math.random()
    const colours = [`rgba(64, 63, 76, ${transparency})`, `rgba(44, 43, 60, ${transparency})`, `rgba(27, 36, 50, ${transparency})`, `rgba(18, 20, 32, ${transparency})` , `rgba(183, 109, 104, ${transparency})`]
    const primaryColour = colours[Math.floor(Math.random() * colours.length)];
    const secondaryColour = colours[Math.floor(Math.random() * colours.length)];
    // the id of LinearGradient has to be unique for each blob or they will be the same even though the other values are randomised
    const gradientId = Math.random().toString();
    const gradientIdurl = "url(#" + gradientId + ")"


    return (
        <div style={{ paddingLeft: props.fromLeft, paddingTop: props.fromTop }}>
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100"  width={props.width} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id={gradientId} x1="0" x2="1" y1="1" y2="0">
                        <stop id="stop1" stop-color={`${primaryColour}`} offset="0%"></stop>
                        <stop id="stop2" stop-color={ `${secondaryColour}` } offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path fill={gradientIdurl} d={path} width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ "transition": "all 0.3s ease 0s" }}></path>
            </svg>
        </div>
    );
}

export default RandomBlobSVG;