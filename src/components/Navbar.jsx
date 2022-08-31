import React, { useState } from "react";
import HomeButton from "./HomeButton";

function Navbar() {

    const [visibility, setVisibility] = useState('false');
    const [ariaExpanded, setAriaExpanded] = useState('false');

    function hamburgerClick() {
        if (visibility === 'false') {
            setVisibility("true");
            setAriaExpanded("true");
        } else if (visibility === 'true') {
            setVisibility("false");
            setAriaExpanded("false");
        }
    }

    return (
        <header className="primary-header flex">
            
            <HomeButton />

            <button onClick={hamburgerClick} className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded={ariaExpanded}>
                <span className="sr-only">Menu</span>
            </button>

            <nav>
                <ul id="primary-navigation" data-visible={visibility} className="primary-navigation flex navbar-brand">
                    <li className="active">
                        <a href="/">
                            <span aria-hidden="true" />Home
                        </a>
                    </li>
                    <li className="active">
                        <a href="#footer">
                            <span aria-hidden="true" />Destination
                        </a>
                    </li>
                    <li>
                        <a href="#pricing">
                            <span aria-hidden="true" />Crew
                        </a>
                    </li>
                    <li>
                        <a href="/pricing">
                            <span aria-hidden="true" />Pricing
                        </a>
                    </li>
                    <li>
                        
                            <a href="/join">
                                <button className="join-btn">
                                    <span aria-hidden="true" />Join Us
                                </button>
                            </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;