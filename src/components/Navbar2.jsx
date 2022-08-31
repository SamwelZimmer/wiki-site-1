import React from "react";
import LogoButton from "./NavComponents/LogoButton";
import AvatarButton from "./NavComponents/AvatarButton";
import GearButton from "./NavComponents/GearButton";
import NavExpandToggle from "./NavComponents/NavExpandToggle";
import LogoutButton from "./NavComponents/LogoutButton";
import LoginButton from "./NavComponents/LoginButton";
import IconPlaceholder from "./NavComponents/Placeholder";

function Navbar2({ icon }) {

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

    return(
            <div className="nav-position bg-transparent flex justify-between">
                <LogoButton />
                <NavExpandToggle />
                {/* this is a 'log in' button or an avater depending on the page and user  */}
                <TopRightIcon />
                {/* <AvatarButton /> */}
            </div>
    );
}

export default Navbar2;