import React, { useState } from "react";
import { Elements, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useLocation} from 'react-router-dom';
import { async } from "@firebase/util";



// STRIPE CHECKOUT MAKES THIS PAGE REDUNDANT
// Only keeping incase stripe integration doesn't work


// should be in .ENV
const public_key = "pk_test_51LdInQLHyqPzaBemXRaWYv44BL3xXVHKsTSz4gaarLqPd7hCSfKV5R3ZilmpesvQUdjA9sIwcz6CIk1lxNGzrA4b00fUct4VVa";

function PayPage() {

    const location = useLocation();

    // this won't work as code in PlansCard.jsx is commented out
    const planPrice = location.state.price;
    const planTime = location.state.recurring;

    const stripe = loadStripe(public_key);

    return (
        <body>
            <h1>pay page</h1>
            <h2>{planPrice}</h2>
            <h2>{planTime}</h2>
            <Elements stripe={stripe}>
                <CheckoutForm />
            </Elements>
        </body>        


    );
}

function CheckoutForm() {
    const [isPaymentLoading, setPaymentLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const payMoney = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setPaymentLoading(true);
        const clientSecret = getClientSecret();
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "Samwel Zimmer"
                },
            },
        });
        setPaymentLoading(false);
        if (paymentResult.error) {
            alert(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
              alert("Success!");
            }
        }
    };


    return (
        <div style={{ padding: "3rem"}}>
            <div style={{ maxWidth: "500px", margin: "0 auto" }}>
                <form style={{ display: "block", width: "100%" }} onSubmit={payMoney}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <CardElement className="stripe-card" options={{style: { base: { backgroundColor: "white"}},}}/>    
                        <button
                            className="pay-button"
                            disabled={isPaymentLoading}
                            >
                            {isPaymentLoading ? "Loading..." : "Pay"}
                        </button>                
                    </div>
                </form>
            </div>
        </div>
    );
}


// we need to collect clients details and send them to stripe and the client secret
function getClientSecret() {
    return null;
}

export default PayPage;