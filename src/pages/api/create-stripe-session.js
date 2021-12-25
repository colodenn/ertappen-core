import { createOrRetrieveCustomer, getUser } from '@/utils/api';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { item } = req.body;
  const token = req.headers.token;
  const user = await getUser(token);

  const customer = await createOrRetrieveCustomer({
    uuid: user.id,
    email: user.email,
  });

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://ertappen-core.vercel.app';

  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    customer,
    payment_method_types: ['card'],
    line_items: [
      {
        price: 'price_1JnIwnJiaERapW9RSRSntN1e',
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: redirectURL + '/dashboard/payment/?status=success',
    cancel_url: redirectURL + '/dashboard/payment/?status=cancel',
    metadata: {
      images: item.image,
    },
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
