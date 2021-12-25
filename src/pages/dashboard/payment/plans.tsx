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

  const createCheckOutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession: AxiosResponse<any, any> = await axios.post(
      '/api/create-stripe-session',
      {
        item: item,
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
                  <div className='text-gray-700'>10 deploys per day</div>
                  <div className='text-gray-700'>10 GB of storage</div>
                  <div className='text-gray-700'>10 domains</div>
                </div>
              </div>
              <div>
                <Link href='/'>
                  <div className='inline-flex justify-center items-center px-6 mt-6 w-full h-12 font-medium tracking-wide text-white bg-gray-800 rounded shadow-md transition duration-200 hover:bg-gray-900 focus:shadow-outline focus:outline-none'>
                    Currently
                  </div>
                </Link>
                <p className='mt-6 max-w-xs text-xs text-gray-600 sm:mx-auto sm:max-w-sm sm:text-sm sm:text-center'>
                  Sed ut unde omnis iste natus accusantium doloremque.
                </p>
              </div>
            </div>
            <div className='border-deep-purple-accent-400 flex relative flex-col justify-between p-8 bg-white rounded border shadow-sm transition-shadow duration-300 sm:items-center hover:shadow'>
              <div className='flex absolute inset-x-0 top-0 justify-center -mt-3'>
                <div className='bg-deep-purple-accent-400 inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded'>
                  Most Popular
                </div>
              </div>
              <div className='text-center'>
                <div className='text-lg font-semibold'>Pro</div>
                <div className='flex justify-center items-center mt-2'>
                  <div className='mr-1 text-5xl font-bold'>$38</div>
                  <div className='text-gray-700'>/ mo</div>
                </div>
                <div className='mt-2 space-y-3'>
                  <div className='text-gray-700'>200 deploys per day</div>
                  <div className='text-gray-700'>80 GB of storage</div>
                  <div className='text-gray-700'>Global CDN</div>
                </div>
              </div>
              <div>
                <button
                  className='btn inline-flex justify-center items-center px-6 mt-6 w-full h-12 font-medium tracking-wide text-white rounded shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                  onClick={createCheckOutSession}
                >
                  Buy Pro
                </button>
                <p className='mt-6 max-w-xs text-xs text-gray-600 sm:mx-auto sm:max-w-sm sm:text-sm sm:text-center'>
                  Sed ut unde omnis iste natus accusantium doloremque.
                </p>
              </div>
            </div>
            <div className='flex flex-col justify-between p-8 bg-white rounded border shadow-sm transition-shadow duration-300 sm:items-center hover:shadow'>
              <div className='text-center'>
                <div className='text-lg font-semibold'>Business</div>
                <div className='flex justify-center items-center mt-2'>
                  <div className='mr-1 text-5xl font-bold'>$78</div>
                  <div className='text-gray-700'>/ mo</div>
                </div>
                <div className='mt-2 space-y-3'>
                  <div className='text-gray-700'>500 GB of storage</div>
                  <div className='text-gray-700'>Unlimited domains</div>
                  <div className='text-gray-700'>24/7 Support</div>
                </div>
              </div>
              <div>
                <Link href='/'>
                  <div className='inline-flex justify-center items-center px-6 mt-6 w-full h-12 font-medium tracking-wide text-white bg-gray-800 rounded shadow-md transition duration-200 hover:bg-gray-900 focus:shadow-outline focus:outline-none'>
                    Buy Business
                  </div>
                </Link>
                <p className='mt-6 max-w-xs text-xs text-gray-600 sm:mx-auto sm:max-w-sm sm:text-sm sm:text-center'>
                  Sed ut unde omnis iste natus accusantium doloremque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
