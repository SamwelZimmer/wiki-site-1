import { initializeApp } from "firebase/app";
import { getStorage, ref, updateMetadata } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { getFirestore, query, getDocs, getDoc, setDoc, collection, where, addDoc, doc } from 'firebase/firestore';
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
            secureStatus: "uploaded"
        });
        console.log("Document written with ID: ", docRef.id);
        // once the file is uploaded, firebase doc is created and then the name for this doc is added to the sirebase storage metadata
        const newMetadata = {
            customMetadata: {
                firestoreDocId: docRef.id
            },
        };
        updateStorageMetadata(storageFilePath, newMetadata)
        // return docRef.id;
    }
};

// update firebase storage metadata
const updateStorageMetadata = async (filePath, newMetadata) => {
    const storageRef = ref(storage, filePath);
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

    // await getDoc(docRef).then(
    //     (docSnap) => {
    //         if (docSnap.exists()) {
    //             // console.log("Document data:", docSnap.data());
    //             return docSnap.data()
    //         } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //         }
    //     }
    // )
   


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
    getDocData,
    // shitSuccesful,
  };