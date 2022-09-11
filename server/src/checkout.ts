import { stripe } from ".";
import Stripe from "stripe";

import { getOrCreateCustomer } from "./customers";
import { db } from "./firebase";
import { firestore } from "firebase-admin";

/**
 * Creates a Stripe Checkout session with line items
 */

// export async function createStripeCheckoutSession(
//     line_items: Stripe.Checkout.SessionCreateParams.LineItem[]
//     ) {

//     const url = process.env.WEBAPP_URL;

//     const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items,
//         mode: "subscription",
//         success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
//         cancel_url: `${url}/cancel`,
//     });

//     return session;
    
// }

export async function createStripeCheckoutSession(line_items: Stripe.Checkout.SessionCreateParams.LineItem[], userId: string) {
    
    const customer = await getOrCreateCustomer(userId);
    const subPlan = line_items;

    const url = process.env.WEBAPP_URL;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: line_items,
        mode: "subscription",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/cancel`,
        // expand: ['latest_invoice.payment_intent'],
    });

    const payment_intent = await session.payment_intent as Stripe.PaymentIntent;
    console.log(`the session is: ${session.payment_status}`)
    console.log(payment_intent)
    console.log(`attempting to sub to plan: ${subPlan[0].price}`)
    console.log(customer.id)

    

    // if (payment_intent.status === 'succeeded') {
    //     await db
    //       .collection('users')
    //       .doc(userId)
    //       .set(
    //         {
    //           stripeCustomerId: customer.id,
    //           activePlans: firestore.FieldValue.arrayUnion(subPlan),
    //         },
    //         { merge: true }
    //       );
    //   }

    return session;
    
}