// Initialize Firebase Admin resources

// import * as firebaseAdmin from 'firebase-admin';

// firebaseAdmin.initializeApp({
// });

// export const db = firebaseAdmin.firestore();
// export const auth = firebaseAdmin.auth();


var admin = require("firebase-admin");

var serviceAccount = require("../service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();
export const auth = admin.auth();
