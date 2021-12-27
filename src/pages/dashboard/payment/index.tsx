/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AlertType, useAlert } from 'react-alert';

import Layout from '@/components/layout/dashboard/Layout';

import { postData } from '@/utils/helpers';
import { useUser } from '@/utils/useUser';
export default function Payment() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);

  const { subscription, session } = useUser();
  const { status } = router.query;
  const alertt = useAlert();
  function showAlert(message: string, type: AlertType) {
    alertt.show(message, {
      type: type,
    });
  }
  const subscriptionName =
    subscription && subscription?.prices?.products?.[0].name;

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url } = await postData({
        url: '/api/create-portal-link',
        token: session?.access_token as string,
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
    setLoading(false);
  };
  useEffect(() => {
    status &&
      status === 'success' &&
      showAlert('Transaction successful', 'success');
    status && status === 'cancel' && showAlert('Payment Cancelled', 'error');
  }, [status]);
  return (
    <>
      <Layout name='Plan'>
        <div className='card compact mb-8 shadow-lg md:max-w-xl lg:card-side'>
          <div className='card-body'>
            <h2 className='card-title'>Plan</h2>
            <p>
              Your personal account is on the{' '}
              <span
                data-tip='10 Images/month'
                className='rounded-box tooltip px-2 border-2 border-gray-300 cursor-pointer'
              >
                {subscription != null ? subscriptionName : 'Free'}
              </span>{' '}
              plan. {subscription != null ? '' : 'Free of charge.'}
            </p>
            <div className='card-actions'>
              <button
                onClick={redirectToCustomerPortal}
                className='btn btn-black'
              >
                Plan Manager
              </button>
              <button className='btn btn-ghost'>More info</button>
            </div>
          </div>
        </div>
        {/* <div className='card compact mb-8 shadow-lg md:max-w-3xl lg:card-side'>
          <div className='card-body'>
            <h2 className='card-title'>Payment Method</h2>
            <p>
              You have not yet added any cards. Click the button below to add
              one.
            </p>
            <div className='card-actions flex items-center'>
              <button className='btn btn-black'>Add new card</button>
              <p className='md:ml-6'>
                At most, three credit cards, debit cards or prepaid cards can be
                added.
              </p>
            </div>
          </div>
        </div> */}
        <div className='card compact mb-8 shadow-lg md:max-w-3xl lg:card-side'>
          <div className='card-body'>
            <h2 className='card-title'>Your Tariff</h2>
            <p>
              You can still encode up to 10 images. <br /> And decode 100
              images.
            </p>
            <div className='card-actions flex items-center'>
              <button
                onClick={() => router.push('/dashboard/payment/plans')}
                className='btn btn-black'
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
