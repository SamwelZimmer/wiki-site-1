import React from "react";
import CreateProjectBox from "./CreateProjectBox";

import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getAllUploads } from "../../firebase";


function SecuredProjects() {
    const example = [];

    const [user] = useAuthState(auth);
    const [projectBoxContents, setProjectBoxContents] = useState(example);

    const uploads = async () => {
        let boxes = await getAllUploads(user, "secured");
        return (boxes)
    }

    useEffect(() => {
        uploads().then((res) => {
            setProjectBoxContents(res)
        })

        
    }, [])
       
    return (
        <div className="project-grid-layout">
            {projectBoxContents.map((i) => (
                <CreateProjectBox title={ i.title } content={ i.content } justif={ i.justif } date={ i.date } type={ i.type } status={i.status} storePath={i.storePath} firebaseDocId={i.firebaseDocId} />
            ))}
        </div>
    );
}

// function SecuredProjects() {
//     return (
//         <div class="project-grid-layout">
//             {projectBoxContents.map((i) => (
//                 <CreateProjectBox title={ i.title } content={ i.content } />
//             ))}
//         </div>
//     );
// }

export default SecuredProjects;