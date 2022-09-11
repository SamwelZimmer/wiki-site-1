// // const express = require("express");
// // const cors = require("cors");

// // acct_1LdInQLHyqPzaBem
// // whsec_7096a3804a628b2409f32c928bb52e6e71108dea3942497690de2654b953a60d

// // Set your secret key. Remember to switch to your live secret key in production.
// // See your keys here: https://dashboard.stripe.com/apikeys
// // server.js
// //
// // Use this sample code to handle webhook events in your integration.
// //
// // 1) Paste this code into a new file (server.js)
// //
// // 2) Install dependencies
// //   npm install stripe
// //   npm install express
// //
// // 3) Run the server on http://localhost:4242
// //   node server.js

// // import { useAuthState } from "react-firebase-hooks/auth";
// // import { auth } from "./src/firebase";
// // // const firebaseHooks = require("react-firebase-hooks/auth")
// // const firebase = require("./src/firebase")


// // 



// const stripe = require('stripe')('sk_test_51LdInQLHyqPzaBemaoePiPtnzBCgOqTKuxyvMAuEP0ugQxSUb9rqiyQB5uB7PSbfrWsKodTam2VpSADX0cuz4Bhk00cL35vREH');
// const express = require('express');
// const bodyParser = require("body-parser");
// const app = express();

// // This is your Stripe CLI webhook secret for testing your endpoint locally.
// const endpointSecret = "whsec_7096a3804a628b2409f32c928bb52e6e71108dea3942497690de2654b953a60d";

// const fulfillOrder = (session) => {
//   // TODO: fill me in
//   console.log("Fulfilling order", session);
//   app.get("/results", (req, res) => {
//     console.log("Fulfilling order", session)
//     res.send(session)
//   })
// }


// app.post('/webhook', bodyParser.raw({type: 'application/json'}), async (request, response) => {


//   const sig = request.headers['stripe-signature'];
//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//   } catch (err) {
//     response.status(400).send(`Webhook Error: ${err.message}`);
//     return;
//   }

//   if (event.type === 'checkout.session.completed') {
//     const session = event.data.object;

//     // Fulfill the purchase...
//     fulfillOrder(session);
//   }

//   // // Handle the event
//   // switch (event.type) {
//   //   case 'payment_intent.succeeded': {
//   //     const paymentIntent = event.data.object;
//   //   //   const email = event['data']['object']['receipt_email'] // contains the email that will recive the recipt for the payment (users email usually)

     
//   //     // Then define and call a function to handle the event payment_intent.succeeded
//   //     break;
//   //   }
//   //   // ... handle other event types
//   //   default:
//   //     console.log(`Unhandled event type ${event.type}`);
//   // }

//   // Return a 200 response to acknowledge receipt of the events
//   response.send();
// });

// function SendToFirestore(msg) {
//     // const user = useAuthState(auth);
//     // console.log(`------- the user id is: ${user.uid}`);
//     console.log("I need to send shit to firestore now");
//     console.log(`paymet intent is: ${msg}`);
// }

// // to run locally, on three terminal tabs        
// // 1. 'node server.js'       
// // 2. 'stripe listen --forward-to localhost:4242/webhook'   
// // 3. 'stripe trigger payment_intent.succeeded' or whatever

// app.listen(4242, () => console.log('Running on port 4242'));