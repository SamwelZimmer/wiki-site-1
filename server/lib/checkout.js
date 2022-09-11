"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStripeCheckoutSession = void 0;
const _1 = require(".");
const customers_1 = require("./customers");
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
async function createStripeCheckoutSession(line_items, userId) {
    const customer = await customers_1.getOrCreateCustomer(userId);
    const subPlan = line_items;
    const url = process.env.WEBAPP_URL;
    const session = await _1.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: line_items,
        mode: "subscription",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/cancel`,
    });
    const payment_intent = await session.payment_intent;
    console.log(`the session is: ${session.payment_status}`);
    console.log(payment_intent);
    console.log(`attempting to sub to plan: ${subPlan[0].price}`);
    console.log(customer.id);
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
exports.createStripeCheckoutSession = createStripeCheckoutSession;
//# sourceMappingURL=checkout.js.map