import { useRouter } from 'next/router';
import { useState } from 'react';

import { useUser } from '@/utils/useUser';

export default function Login() {
  const [email, setEmail] = useState('');
  const loginUser = useUser();
  const router = useRouter();
  return (
    <main className='align-center dotted flex justify-center items-center mx-auto my-auto w-full h-screen'>
      <div>
        <h1 className='mb-8 text-3xl text-center md:text-4xl'>ertappen.</h1>
        <form className='p-8 w-96 bg-gray-50 rounded shadow'>
          <h1 className='text-3xl text-center md:text-4xl'>Login</h1>
          <p className='mt-2'>
            Enter your email address to sign in or create a new account.
            We&apos;ll send you a login link.
          </p>
          <input
            className='mt-4 w-full rounded'
            type='email'
            placeholder='user@ertappen.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{' '}
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();
              loginUser?.loginUser(email);
              router.push('/dashboard');
            }}
            className='btn mt-2 w-full'
          >
            Send login link
          </button>
        </form>
      </div>
    </main>
  );
}
