import React from "react";
import CreateProjectBox from "./CreateProjectBox";

import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData, useCollectionDataOnce } from "react-firebase-hooks/firestore"
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where, doc, getDoc } from "firebase/firestore";


// let projectBoxContents = [
//     { title: 'box 1 title', content: 'This is content of box 1' },
//     { title: 'box 2 title', content: 'This is content of box 2' },
//     { title: 'box 3 title', content: 'This is content of box 3' },
//     { title: 'box 4 title', content: 'This is content of box 4' },
//     { title: 'box 5 title', content: 'This is content of box 5' },
//     { title: 'box 6 title', content: 'This is content of box 6' },
//     { title: 'box 7 title', content: 'This is content of box 7' },
//     { title: 'box 8 title', content: 'This is content of box 8' },
//     { title: 'box 9 title', content: 'This is content of box 9' },
//     { title: 'box 10 title', content: 'This is content of box 10' },
//     { title: 'box 11 title', content: 'This is content of box 11' },
//     { title: 'box 12 title', content: 'This is content of box 12' },
//     { title: 'box 13 title', content: 'This is content of box 13' },
//     { title: 'box 14 title', content: 'This is content of box 14' },
//     { title: 'box 15 title', content: 'This is content of box 15' },
//     { title: 'box 16 title', content: 'This is content of box 16' },
//     { title: 'box 17 title', content: 'This is content of box 17' },
//     { title: 'box 18 title', content: 'This is content of box 18' },
//     { title: 'box 19 title', content: 'This is content of box 19' },
//     { title: 'box 20 title', content: 'This is content of box 20' },
//     { title: 'box 21 title', content: 'This is content of box 21' },
//     { title: 'box 22 title', content: 'This is content of box 22' },
//     { title: 'box 23 title', content: 'This is content of box 23' },
//     { title: 'box 24 title', content: 'This is content of box 24' },
//     { title: 'box 25 title', content: 'This is content of box 25' },
//     { title: 'box 26 title', content: 'This is content of box 26' },
//     { title: 'box 27 title', content: 'This is content of box 27' },
//     { title: 'box 28 title', content: 'This is content of box 28' },
//     { title: 'box 29 title', content: 'This is content of box 29' },
//     { title: 'box 30 title', content: 'This is content of box 10' },
// ];

// let projectBoxContents = [
//     { title: 'example project', content: 'your projects will appear here' },
// ];





let projectBoxContents = [
    { title: 'example project', content: 'your projects will appear here' },
];

function UnderwayProjects() {

    const [user] = useAuthState(auth);
    

    // why does it fire 3 times???
    const uploadsRef = collection(db, "users", `${user.uid}`, "uploads");
    const [values] = useCollectionData(uploadsRef);
    // console.log(values);
    values?.map((doc) => (
        console.log(doc.project)
    ));

    // TODO implement some form of logic which pushes the projectTitle, projectDesc and projectJustif 
    // to the projectBoxContents box, if the project does not already exist in the array

    return (
        <div className="project-grid-layout">
            {projectBoxContents.map((i) => (
                <CreateProjectBox title={ i.title } content={ i.content } />
            ))}
        </div>
    );
}

export default UnderwayProjects;

