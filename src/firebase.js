import { initializeApp } from "firebase/app";
import { getStorage, ref, updateMetadata } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { getFirestore, query, getDocs, getDoc, setDoc, collection, where, addDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from "react";
// import { useCollection, useCollectionData, useDocument } from "react-firebase-hooks/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAK5zVNn1lm0Q1iBeuCzogQmpplvBoF7lE",
    authDomain: "ip-blockchain.firebaseapp.com",
    projectId: "ip-blockchain",
    storageBucket: "ip-blockchain.appspot.com",
    messagingSenderId: "589398732840",
    appId: "1:589398732840:web:5be3908dc194f35588c51d",
    measurementId: "G-7P1ELDSR3T"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();


// -------------------------------------------------- authentication 
// google authentication function
const signInWithGoogle = async () => {
    // try-catch block and async means error handling is easier and it avoid callbacks
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
                public: false,
                plan: 1,
                avatar: GeneratePPCode()
            });
        }
        // querying  querying the database to check if this user is registered in our database with the user uid. if no we make new user
    } catch (err) {
        // if google authentication fails 
        console.log(err);
    }
};

// function for signing in with email and password 
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}

// function for registering with email and password
const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        public: false,
        plan: 1,
        avatar: GeneratePPCode()
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

//function to send reset password link to users email
const sendPasswordReset = async (email) => {
    try {
        sendPasswordResetEmail(auth, email);
        alert("Your email just got graced with a link to reset your password! \nTry to remember it this time.")
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
};

//logout function 
const logout = () => {
    signOut(auth);
    // window.location.reload(true);
};

// Creating values to be interpreted as randomly assigned profile picture
function GeneratePPCode() {
    const bgDir = Math.floor(Math.random() * 8);
    const bgFrom = Math.floor(Math.random() * 8);
    const bgTo = Math.floor(Math.random() * 8);
    const imgValue = Math.floor(Math.random() * 11);
    return `${bgDir}.${bgFrom}.${bgTo}-${imgValue}`
}


// -------------------------------------------------- file storage
// this creates a firebase subcollection called "uploads" which stores
const createProtectImage = async (user, uploadedFiles, storageFilePath) => {
    const postRef = collection(db, "users", `${user.uid}`, "uploads");
    const q = query(postRef, where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
        const docRef = await addDoc(postRef, {
            user: user.uid,
            project: uploadedFiles,
            secureStatus: "uploaded",
            storagePath: storageFilePath
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    }
};

// update firebase storage metadata
const updateStorageMetadata = async (filePath, docID) => {
    const storageRef = ref(storage, filePath);

    const newMetadata = {
        customMetadata: {
            firestoreDocId: docID
        },
    };

    await updateMetadata(storageRef, newMetadata)
};

// get data from a single firestore document
const getDocData = async (user, docId) => {
    const docRef = doc(db, "users", `${user.uid}`, "uploads", `${docId}`);
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
}

// get all users uploads
const getAllUploads = async (user, sta) => {
    const projectBoxContents = [{ title: 'Example Project', content: 'Your projects will appear here', justif: "I literally drew it. It's literally mine, okay", date: "my/birth/day", type: 'image/png', status: 'single', storePath: "dingDangDally", firebaseDocId: "mDffkcsLP6JU94HdWCvw" }];
    const querySnapshot = await getDocs(collection(db, "users", `${user.uid}`, "uploads"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const postTitle = doc.data().project.projectTitle;
        const postDesc = doc.data().project.projectDesc;
        const postJust = doc.data().project.projectJustif;
        const postType = doc.data().project.fileType;
        const postDate = doc.data().project.uploadDate;
        const postStatus = doc.data().secureStatus;
        const filePath = doc.data().storagePath;
        const firestoreId = doc.id;

        if (postStatus === sta) {
            projectBoxContents.push({title: postTitle, content: postDesc, justif: postJust, date: postDate, type: postType, status: postStatus, storePath: filePath, firebaseDocId: firestoreId})
        } 

    });
    return (projectBoxContents);
}



// const shitSuccesful = async (user, data) => {
//     try {
//         const postRef = collection(db, "users", `${user.uid}`, "uploads");
//         const q = query(postRef, where("uid", "==", user.uid));
//         const docs = await getDocs(q);
//         if (docs.docs.length === 0) {
//             await addDoc(postRef, {
//                 user: user.uid,
//                 data: data
//             });
//         }
//         // querying  querying the database to check if this user is registered in our database with the user uid. if no we make new user
//     } catch (err) {
//         // if google authentication fails 
//         console.log(err);
//     }
// }



export {
    auth,
    db,
    storage,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    createProtectImage,
    updateStorageMetadata,
    getDocData,
    getAllUploads,
    // shitSuccesful,
  };