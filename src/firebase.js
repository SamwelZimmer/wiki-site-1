import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { getFirestore, query, getDocs, setDoc, collection, where, addDoc, doc } from 'firebase/firestore';
import { useCollection, useCollectionData, useDocument } from "react-firebase-hooks/firestore"


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
        alert("Your email just got graced with a link to reset your password! Try to remember it this time.")
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
const createProtectImage = async (user, uploadedFiles) => {
    const postRef = collection(db, "users", `${user.uid}`, "uploads");
    console.log(postRef)
    const q = query(postRef, where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
        await addDoc(postRef, {
            user: user.uid,
            project: uploadedFiles
        });
    }
}



export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    createProtectImage,
  };