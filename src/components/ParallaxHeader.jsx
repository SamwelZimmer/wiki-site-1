import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import moon from './parallax-images/moon.png';
import Hill from './parallax-images/Hill.png';

function ParalaxHeader() {
    return (
        <Parallax pages={2}>

            <ParallaxLayer 
            offset={0} 
            speed={1}
            factor={2}
            style={{backgroundImage: `url(${moon})`, backgroundSize: 'cover'
            }} 
            />

            <ParallaxLayer 
            offset={0} 
            speed={0.5}
            factor={4}
            style={{backgroundImage: `url(${Hill})`, backgroundSize: 'cover'
            }} 
            />

            <ParallaxLayer offset={0} speed={2} factor={2}>
            <h1>Dic Harrd</h1>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.25} factor={4}>
            <h2>on the buh</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.1} factor={4}>
            <h2 className='ghost-text'>on the buh</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.05} factor={4}>
            <h2 className='ghost-text-2'>on the buh</h2>
            </ParallaxLayer>


        </Parallax>
    );
}

export default ParalaxHeader;
