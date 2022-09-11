"use strict";
// Initialize Firebase Admin resources
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.db = void 0;
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
exports.db = admin.firestore();
exports.auth = admin.auth();
//# sourceMappingURL=firebase.js.map