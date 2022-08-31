import React from "react";
import Navbar2 from "./Navbar2";
// import React, { Component } from "react";
// import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

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






// ------------ this was an attempt to sign in with google using their pre-built buttons
// -------------- not good for multipage site

// // const googleClientId = "589398732840-ipssquibi16fd6rpp19tneam10jg2e7r.apps.googleusercontent.com";
// // const googleClientSecret = "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";

// function Home2() {
//     // for a larger application this should be global state
//     const [user, setUser] = useState({});

//     // this is the jwt info that google returns saying the user is legit
//     function handleCallBackResponse(response) {
//         console.log("Encoded JWT ID Token: " + response.credential)
//         //decoding jwt into usable infor
//         var userObject = jwt_decode(response.credential);
//         console.log(userObject)
//         setUser(userObject);
//         //removing google button when logged in
//         document.getElementById("signInDiv").hidden = true;
//     }

//     function handleSignOut(event) {
//         // user property becomes empty
//         setUser({});
//         document.getElementById("signInDiv").hidden = false;
//     }

//     useEffect(() => {
//         /* global google */
//         google.accounts.id.initialize({
//             client_id: "589398732840-ipssquibi16fd6rpp19tneam10jg2e7r.apps.googleusercontent.com",
//             callback: handleCallBackResponse
//         })

//         google.accounts.id.renderButton(
//             document.getElementById("signInDiv"),
//             // { type: "icon", size: "large" }
//             {}
//         )
//         // // this is the google pop-up asking to log in - this can be annoying
//         // google.accounts.id.prompt();

//     }, []);

//     // if no user: sign in button
//     // if user: show log out button

//     return (
//         <body className="products-page-bg">
//             {user ? <Navbar2 icon={'avatar'}/> : <Navbar2 icon={'login'}/>}
//             <div className="centered-column">
//                 <h1 style={{ color: '#332817'}}>Homepage</h1>
//                 <div id="signInDiv"></div>
//                 {/* if no user object not empty (we have a user) so show sign out button */}
//                 {
//                     Object.keys(user).length !== 0 &&
//                     <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
//                 }
//                 { user && 
//                     <div>
//                         <img src={user.picture} alt=""></img>
//                         <h3 style={{ color: '#332817'}}>{user.name}</h3>
//                     </div>
//                 }
//             </div>
//         </body>
//     );
// }

