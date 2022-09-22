import React from "react";
import CreateProjectBox from "./CreateProjectBox";

import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getAllUploads } from "../../firebase";


// ---------- TODO ------- 
// Stop the page from rendering mutliple times
// Split the project by their status
// Allow you to click on them to expand


function UnderwayProjects() {
    const example = [{ title: 'example project', content: 'your projects will appear here', justif: 'your justification', date: "my/birth/day", type: 'jpg? pdf? idk?', status: 'single'  }]

    const [user] = useAuthState(auth);
    const [projectBoxContents, setProjectBoxContents] = useState(example);

    const uploads = async () => {
        let boxes = await getAllUploads(user);
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
                <CreateProjectBox title={ i.title } content={ i.content } />
            ))}
        </div>
    );
}

export default UnderwayProjects;

