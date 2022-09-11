import React from "react";

import LogoButton from "./LogoButton";
import AvatarButton from "./AvatarButton";
import GearButton from "./GearButton";
import NavExpandToggle from "./NavExpandToggle";
import NavDropDown from "./NavDropDown";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import IconPlaceholder from "./Placeholder";


function Navbar3({ icon }) {

    function TopRightIcon() {
        if (icon === 'avatar') {
            return <AvatarButton />;
        }
        else if (icon === 'settings') {
            return <GearButton />
        }
        else if (icon === 'logout') {
            return <LogoutButton />
        }
        else if (icon === 'login') {
            return <LoginButton />
        }
        else if (icon === 'none') {
            return <IconPlaceholder />
        }
    }

    let mql = window.matchMedia('(max-width: 35em)');
    
    return(
            // <div className="nav-position bg-transparent flex justify-between">
            <div className="absolute top-0 left-0 w-screen flex flex-row justify-between items-center bg-slate-600 px-6 lg:px-12 h-16 lg:h-24">


                <LogoButton />
                {mql.matches ? <NavDropDown /> : <NavExpandToggle />}
                
                {/* this is a 'log in' button or an avater depending on the page and user  */}
                <TopRightIcon />
                {/* <AvatarButton /> */}
            </div>
    );
}

export default Navbar3;