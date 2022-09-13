import React from "react";
import Navbar2 from "../NavComponents/Navbar2";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function Home2() {

    const [user] = useAuthState(auth);

    return (
        <body className="products-page-bg">
            {user ? <Navbar2 icon={'avatar'}/> : <Navbar2 icon={'login'}/>}
            <div className="centered-column">
                <h1 style={{ color: '#332817'}}>Homepage</h1>
            </div>

        </body>
    )
}

export default Home2;