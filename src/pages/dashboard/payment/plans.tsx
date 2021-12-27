/* eslint-disable @next/next/link-passhref */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadStripe } from '@stripe/stripe-js';
import axios, { AxiosResponse } from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';

import Layout from '@/components/layout/dashboard/Layout';

import { useUser } from '@/utils/useUser';

export default function Plans() {
  const session = useUser()?.session;

  const [item] = useState({
    name: 'Apple AirPods',
    description: 'Latest Apple AirPods.',
    image:
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    quantity: 1,
    price: 999,
  });
  const publishableKey = process.env
    .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;
  const stripePromise = loadStripe(publishableKey);

  const createCheckOutSession = async (id: string) => {
    const stripe = await stripePromise;
    const checkoutSession: AxiosResponse<any, any> = await axios.post(
      '/api/create-stripe-session',
      {
        item: item,
        id: id,
      },
      {
        headers: {
          token: session?.access_token as string,
        },
      }
    );
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result?.error) {
      alert(result?.error.message);
    }
  };

  return (
    <>
      <Layout name='Plan'>
        <div className='flex justify-center items-center mx-auto my-auto'>
          <div className='row-gap-5 grid gap-10 my-auto max-w-md sm:row-gap-10 sm:mx-auto lg:grid-cols-3 lg:max-w-screen-lg xl:max-w-screen-lg'>
            <div className='flex flex-col justify-between p-8 bg-white rounded border shadow-sm transition-shadow duration-300 sm:items-center hover:shadow'>
              <div className='text-center'>
                <div className='text-lg font-semibold'>Start</div>
                <div className='flex justify-center items-center mt-2'>
                  <div className='mr-1 text-5xl font-bold'>Free</div>
                </div>
                <div className='mt-2 space-y-3'>
                  <div className='text-gray-700'>3 Images per month</div>
                  <div className='text-gray-700'>1 Watermark each</div>
                  <div className='text-gray-700'>Email Support</div>
                </div>
              </div>
              <div className='w-full'>
                <Link href='/'>
                  <div className='inline-flex justify-center items-center px-6 mt-6 w-full h-12 font-medium tracking-wide text-white bg-gray-800 rounded shadow-md transition duration-200 focus:shadow-outline focus:outline-none'>
                    Currently
                  </div>
                </Link>
              </div>
            </div>
            <div className='border-deep-purple-accent-400 flex relative flex-col justify-between p-8 bg-white rounded border shadow-sm transition-shadow duration-300 sm:items-center hover:shadow'>
              <div className='flex absolute inset-x-0 top-0 justify-center -mt-3'>
                <div className='bg-deep-purple-accent-400 inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded'>
                  Most Popular
                </div>
              </div>
              <div className='text-center'>
                <div className='text-lg font-semibold'>Basic</div>
                <div className='flex justify-center items-center mt-2'>
                  <div className='mr-1 text-5xl font-bold'>$5</div>
                  <div className='text-gray-700'>/ mo</div>
                </div>
                <div className='mt-2 space-y-3'>
                  <div className='text-gray-700'>10 Images</div>
                  <div className='text-gray-700'>With 10 Watermarks each</div>
                  <div className='text-gray-700'>Priority Email Support</div>
                </div>
              </div>
              <div className='w-full'>
                <button
                  className='btn inline-flex justify-center items-center px-6 mt-6 w-full h-12 font-medium tracking-wide text-white rounded shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                  onClick={() => createCheckOutSession('Basic')}
                >
                  Upgrade to Basic
                </button>
              </div>
            </div>
            <div className='flex flex-col justify-between p-8 bg-white rounded border shadow-sm transition-shadow duration-300 sm:items-center hover:shadow'>
              <div className='text-center'>
                <div className='text-lg font-semibold'>Pro</div>
                <div className='flex justify-center items-center mt-2'>
                  <div className='mr-1 text-5xl font-bold'>$25</div>
                  <div className='text-gray-700'>/ mo</div>
                </div>
                <div className='mt-2 space-y-3'>
                  <div className='text-gray-700'>50 Images</div>
                  <div className='text-gray-700'>With 25 Watermarks each</div>
                  <div className='text-gray-700'>Priority Email Support</div>
                </div>
              </div>
              <div className='w-full'>
                <button
                  className='btn inline-flex justify-center items-center px-6 mt-6 w-full h-12 font-medium tracking-wide text-white rounded shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                  onClick={() => createCheckOutSession('Pro')}
                >
                  Upgrade to Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
