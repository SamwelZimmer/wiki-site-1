"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleStripeWebhook = void 0;
const _1 = require(".");
const firebase_1 = require("./firebase");
/**
 * Business logic for specific webhook event types
 */
const webhookHandlers = {
    'checkout.session.completed': async (data) => {
        // Add your business logic here
    },
    'payment_intent.succeeded': async (data) => {
        // Add your business logic here
    },
    'payment_intent.payment_failed': async (data) => {
        // Add your business logic here
    },
    // 'customer.subscription.deleted': async (data: Stripe.Subscription) => {
    //   const customer = await stripe.customers.retrieve( data.customer as string ) as Stripe.Customer;
    //   const userId = customer.metadata.firebaseUID;
    //   const userRef = db.collection('users').doc(userId);
    //     await userRef
    //       .update({
    //         activePlans: firestore.FieldValue.arrayRemove(data.plan.id),
    //       });
    // },
    // 'customer.subscription.created': async (data: Stripe.Subscription) => {
    //   const customer = await stripe.customers.retrieve( data.customer as string ) as Stripe.Customer;
    //   const userId = customer.metadata.firebaseUID;
    //   const userRef = db.collection('users').doc(userId);
    //     await userRef
    //       .update({
    //         activePlans: firestore.FieldValue.arrayUnion(data.plan.id),
    //       });
    // },
    'invoice.payment_succeeded': async (data) => {
        console.log('getfucked');
        const customer = await _1.stripe.customers.retrieve(data.customer);
        const userSnapshot = await firebase_1.db.collection('users').doc(customer.metadata.firebaseUID).get();
        await userSnapshot.ref.update({ status: 'PAST_DUE' });
    },
    'invoice.payment_failed': async (data) => {
        const customer = await _1.stripe.customers.retrieve(data.customer);
        const userSnapshot = await firebase_1.db.collection('users').doc(customer.metadata.firebaseUID).get();
        await userSnapshot.ref.update({ status: 'PAST_DUE' });
    }
};
/**
* Validate the stripe webhook secret, then call the handler for the event type
*/
exports.handleStripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const event = _1.stripe.webhooks.constructEvent(req['rawBody'], sig, process.env.STRIPE_WEBHOOK_SECRET);
    // try {
    //   await webhookHandlers[event.type](event.data.object);
    //   res.send({received: true});
    // } catch (err) {
    //   console.error(err)
    //   res.status(400).send(`Webhook Error: ${err}`);
    // }
};
//# sourceMappingURL=webhooks.js.map