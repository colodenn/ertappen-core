/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AlertType, useAlert } from 'react-alert';

import Layout from '@/components/layout/dashboard/Layout';
export default function Payment() {
  const router = useRouter();
  const { status } = router.query;
  const alert = useAlert();
  function showAlert(message: string, type: AlertType) {
    alert.show(message, {
      type: type,
    });
  }
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
                {/* {subscription != null && subscription[0].type === "Pro"
                  ? "Pro"
                  : "Hobby"} */}
                Hobby
              </span>{' '}
              plan. Free of charge.
            </p>
            <div className='card-actions'>
              <button
                onClick={() => router.push('/dashboard/payment/plans')}
                className='btn btn-black'
              >
                Upgrade Plan
              </button>
              <button className='btn btn-ghost'>More info</button>
            </div>
          </div>
        </div>
        <div className='card compact mb-8 shadow-lg md:max-w-3xl lg:card-side'>
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
        </div>
        <div className='card compact mb-8 shadow-lg md:max-w-3xl lg:card-side'>
          <div className='card-body'>
            <h2 className='card-title'>Your Tariff</h2>
            <p>
              You can still encode up to 10 images. <br /> And decode 100
              images.
            </p>
            <div className='card-actions flex items-center'>
              <button className='btn btn-black'>Upgrade</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
