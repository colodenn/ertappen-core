import { createClient } from '@supabase/supabase-js';

import { stripe } from './stripe';
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const getUser = async (token) => {
  const { data, error } = await supabase.auth.api.getUser(token);

  if (error) {
    throw error;
  }

  return data;
};

export const createOrRetrieveCustomer = async ({ email, uuid }) => {
  const { data, error } = await supabase
    .from('customers')
    .select('stripe_customer_id')
    .eq('id', uuid)
    .single();
  if (error) {
    // No customer record found, let's create one.
    const customerData = {
      metadata: {
        supabaseUUID: uuid,
      },
    };
    if (email) customerData.email = email;
    const customer = await stripe.customers.create(customerData);
    // Now insert the customer ID into our Supabase mapping table.
    const { error: supabaseError } = await supabase
      .from('customers')
      .insert([{ id: uuid, stripe_customer_id: customer.id }]);
    if (supabaseError) throw supabaseError;
    // console.log(`New customer created and inserted for ${uuid}.`);
    return customer.id;
  }
  if (data) return data.stripe_customer_id;
};
