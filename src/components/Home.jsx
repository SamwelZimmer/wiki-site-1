import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion } from "framer-motion";

import CTAButton from "./HomepageParallaxComponents/CTAButton";
import CompanyName from "./HomepageParallaxComponents/CompantName";
import HomeButton from "./HomeButton";
import RandomBlobSVG from "./HomepageParallaxComponents/RandomBlobSVG";
import Footer from "./Footer";
import HamburgerMenu from "./HamburgerMenu";


function Home() {

    // positions of the react elements
    const alignCenter = { display: 'flex', alignItems: 'center' }
    const alignTop = { display: 'flex', alignItems: 'flex-start' }
    const alignBelowCenter = { display: 'flex', alignItems: 'flex-end', paddingBottom: '15%' }
    const alignBottom = { display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }
    // jumping between pages
    const ref = useRef();    

    return (
        <body className="homepage-bg">

            <Parallax pages={21} ref={ref}>

                {/* ---------------------------  goes behind homepage-frame */}

                {/* page 1 text */}

                <ParallaxLayer speed={1.5} sticky={{ start: 0, end: 2}} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <CompanyName />
                </ParallaxLayer>


                {/* page 2 text */}

                <ParallaxLayer sticky={{ start: 4.4, end: 5}} style={{ ...alignCenter, paddingLeft: '20%', textAlign: 'left' }}>
                        <h2>protect</h2>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 4.2, end: 5.2}} style={{ ...alignCenter, top: '10%', paddingLeft: '20%', textAlign: 'left' }}>
                    <h2>what your mind</h2>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 4, end: 5.4 }} style={{ ...alignCenter, top: '20%', paddingLeft: '20%', textAlign: 'left' }}>
                    <h2>creates</h2>
                </ParallaxLayer>


                {/* page 3 text */}

                <ParallaxLayer offset={8} speed={0.5} sticky={{ start: 9.6, end: 12}} style={{ top: '30%', paddingLeft: '60%' }}>
                    <h2>allow the</h2>
                </ParallaxLayer>

                <ParallaxLayer offset={8} speed={1} sticky={{ start: 9.4, end: 12.2}} style={{ paddingLeft: '60%', top: '40%' }}>
                    <h2>blockchain</h2>
                </ParallaxLayer>

                <ParallaxLayer offset={8} speed={1.5} sticky={{ start: 9.2, end: 12.4}} style={{ paddingLeft: '60%', top: '50%' }}>
                    <h2>to prove your</h2>
                </ParallaxLayer>

                <ParallaxLayer offset={8} speed={2} sticky={{ start: 9, end: 12.6}} style={{ paddingLeft: '60%', top: '60%' }}>
                    <h2>ownership</h2>
                </ParallaxLayer>


                {/* page 4 text */}
                <ParallaxLayer sticky={{ start: 13.4, end: 17.2}} style={{ ...alignTop, top: '35%', paddingLeft: '20%', textAlign: 'left' }}>
                    <h2>Stay Updated</h2>
                </ParallaxLayer>


                {/* page 5 text */}

                <ParallaxLayer sticky={{ start: 18, end: 21}} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <h1>Start Now</h1>
                </ParallaxLayer>



                {/* ---------------------------  homepage-frame */}


                <ParallaxLayer sticky={{ end: 21 }}>
                    <div className="homepage-frame"></div>
                </ParallaxLayer>


                {/* ---------------------------  goes infront of homepage-frame */}

                {/* Graphics */}

                <ParallaxLayer offset={1} speed={0.5}>
                        <RandomBlobSVG width={'40rem'} fromLeft={'60%'} fromTop={'30%'} />
                </ParallaxLayer>
                  

                <ParallaxLayer offset={1.2} speed={3}>
                    <RandomBlobSVG width={'20rem'} fromLeft={'20%'} fromTop={'90%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={1.5} speed={1}>
                    <RandomBlobSVG width={'30rem'} fromLeft={'5%'} fromTop={'10%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={1.2}>
                    <RandomBlobSVG width={'30rem'} fromLeft={'80%'} fromTop={'70%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={1.8} speed={0.3}>
                    <RandomBlobSVG width={'50rem'} fromLeft={''} fromTop={'70%'}/>
                </ParallaxLayer>


                <ParallaxLayer offset={3} speed={2}>
                    <RandomBlobSVG width={'40rem'} fromLeft={'10%'} fromTop={'70%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={3.9} speed={2.4}>
                    <RandomBlobSVG width={'35rem'} fromLeft={'40%'} fromTop={'70%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={3.4} speed={4}>
                    <RandomBlobSVG width={'15rem'} fromLeft={'0'} fromTop={'90%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={3.5} speed={3.3}>
                    <RandomBlobSVG width={'10rem'} fromLeft={'10%'} fromTop={'90%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={3.6} speed={3.6}>
                    <RandomBlobSVG width={'10rem'} fromLeft={'80%'} fromTop={'90%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={4.3} speed={2.6}>
                    <RandomBlobSVG width={'20rem'} fromLeft={'70%'} fromTop={'90%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={4.3} speed={2.4}>
                    <RandomBlobSVG width={'18rem'} fromLeft={'90%'} fromTop={'90%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={3.9} speed={0.3}>
                    <RandomBlobSVG width={'33rem'} fromLeft={'90%'} fromTop={'80%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={4.1} speed={0.3}>
                    <RandomBlobSVG width={'38rem'} fromLeft={'70%'} fromTop={'80%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={6} speed={4}>
                    <RandomBlobSVG width={'12rem'} fromLeft={'50%'} fromTop={'90%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={5} speed={2.9}>
                    <RandomBlobSVG width={'28rem'} fromLeft={'20%'} fromTop={'90%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={5.5} speed={3.1}>
                    <RandomBlobSVG width={'10rem'} fromLeft={'70%'} fromTop={'90%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={5.7} speed={3.3}>
                    <RandomBlobSVG width={'8rem'} fromLeft={'50%'} fromTop={'90%'}/>
                </ParallaxLayer>

                <ParallaxLayer offset={5.8} speed={3}>
                    <RandomBlobSVG width={'12rem'} fromLeft={'35%'} fromTop={'90%'}/>
                </ParallaxLayer>

                {/* buttons */}

                <ParallaxLayer offset={0} speed={0.5} sticky={{ start: 0, end: 2.2}} style={{ ...alignCenter, justifyContent: 'center', top: '15%'}}>
                    <CTAButton />
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 3, end: 18}}>
                    <HomeButton />
                    <HamburgerMenu />
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 13.4, end: 18 }} style={{ ...alignTop, justifyContent: 'flex-start', paddingLeft: '65%', top: '25%'}}>
                    <i class="social-icon fab fa-2x fa-facebook-f"></i>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 13.6, end: 17.6 }} style={{ ...alignTop, justifyContent: 'flex-start', paddingLeft: '65%', top: '40%'}}>
                    <i class="social-icon fab fa-2x fa-twitter"></i>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 13.8, end: 17.2 }} style={{ ...alignTop, justifyContent: 'flex-start', paddingLeft: '65%', top: '55%'}}>
                    <i class="social-icon fab fa-2x fa-instagram"></i>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 14, end: 16.8 }} style={{ ...alignTop, justifyContent: 'flex-start', paddingLeft: '65%', top: '70%'}}>
                    <i class="social-icon fas fa-2x fa-envelope"></i>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 18.2, end: 22 }} style={{ ...alignBelowCenter, justifyContent: 'center' }}>
                    <div className="last-homepage-page">
                        <div className="vertical-stack back-to-top">
                            <motion.button 
                                className="back-to-top-btn"
                                whileHover={{scale: 1.3}}
                                whileTap={{scale: 0.8}}
                                onClick={ () => ref.current.scrollTo(2)}
                                >
                                ^
                            </motion.button>
                            <p>Back to the top</p>
                        </div>
                        <CTAButton />
                    </div>
                </ParallaxLayer>


                {/* footer */}

                <ParallaxLayer offset={20} style={{ ...alignBottom }}>
                    <Footer />
                </ParallaxLayer>

            </Parallax>
        </body>
        
    );
}

export default Home;