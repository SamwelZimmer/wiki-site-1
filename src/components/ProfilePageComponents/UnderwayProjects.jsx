import React from "react";
import CreateProjectBox from "./CreateProjectBox";

import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getAllUploads } from "../../firebase";


// ---------- TODO ------- 
// Allow you to click on them to expand
// stop the jolting swtiching between tabs


function UnderwayProjects() {
    const example = [];

    const [user] = useAuthState(auth);
    const [projectBoxContents, setProjectBoxContents] = useState(example);

    const uploads = async () => {
        let boxes = await getAllUploads(user, "uploaded");
        return (boxes)
    }

    useEffect(() => {
        uploads().then((res) => {
            setProjectBoxContents(res)
        })

        
    }, [])

    // Even with useEffect it looks like it is executing twice. 
    // I think this is because getting the firestore data is async and so the layout of the grid re-organises when the new boxes are present
    // Perhaps the only way to stop this is to stop the random box layout 
    // Or perhaps by only getting the data once when rendering the profile page and passing the data down to UnderwayProjects component.
       
    return (
        // i could just pass through the firebase doc id but this would mean waiting to collect the data
        <div className="project-grid-layout">
            {projectBoxContents.map((i) => (
                <CreateProjectBox title={ i.title } content={ i.content } justif={ i.justif } date={ i.date } type={ i.type } status={i.status} storePath={i.storePath} firebaseDocId={i.firebaseDocId} />
            ))}
        </div>
    );
}


export default UnderwayProjects;

