/* eslint-disable @typescript-eslint/no-explicit-any */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { buffer } from 'micro';

import { supabase } from '@/utils/api';
import { stripe } from '@/utils/stripe';

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

export const handler = async (request: any, response: any) => {
  if (request.method === 'POST') {
    const buf = await buffer(request);
    //console.log(buf)
    const sig = request.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buf,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET as string
      );
    } catch (err: any) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    let session;
    switch (event.type) {
      case 'checkout.session.async_payment_failed':
        session = event.data.object;

        // Then define and call a function to handle the event checkout.session.async_payment_failed
        break;
      case 'checkout.session.async_payment_succeeded':
        // Then define and call a function to handle the event checkout.session.async_payment_succeeded
        break;
      case 'checkout.session.completed':
        session = event.data.object as any;
        if (session.mode === 'subscription') {
          const subscriptionId = session.subscription;
          try {
            await supabase
              .from('subscriptions')
              .insert({
                subscriptionId: subscriptionId,
                customerId: session.customer,
                current_period_start: Date.now(),
                current_period_end: Date.now() + 30,
                type: 'Pro',
              });
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
          }
        }

        // Then define and call a function to handle the event checkout.session.completed
        break;
      case 'checkout.session.expired':
        session = event.data.object;

        // Then define and call a function to handle the event checkout.session.expired
        break;
      // ... handle other event types
      default:
      // console.log(`Unhandled event type ${event.type}`);
    }

    response.statusCode = 200;
    response.json({ name: 'John Doe' });
  }
};

export default handler;
