import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FirebaseAppProvider } from 'reactfire';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export const firebaseConfig = {
  apiKey: "AIzaSyAK5zVNn1lm0Q1iBeuCzogQmpplvBoF7lE",
  authDomain: "ip-blockchain.firebaseapp.com",
  projectId: "ip-blockchain",
  storageBucket: "ip-blockchain.appspot.com",
  messagingSenderId: "589398732840",
  appId: "1:589398732840:web:5be3908dc194f35588c51d",
  measurementId: "G-7P1ELDSR3T"
};

export const stripePromise = loadStripe(
  "pk_test_51LdInQLHyqPzaBemXRaWYv44BL3xXVHKsTSz4gaarLqPd7hCSfKV5R3ZilmpesvQUdjA9sIwcz6CIk1lxNGzrA4b00fUct4VVa"
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
