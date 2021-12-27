/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react-hooks/exhaustive-deps */
import { AuthUser } from '@supabase/supabase-js';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

import Layout from '@/components/layout/dashboard/Layout';

import { useUser } from '@/utils/useUser';
export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const getUser = useUser();
  function deleteAccount() {
    getUser?.logoutUser();
    router.push('/');
  }
  useEffect(() => {
    setUser(getUser?.user ?? null);
  }, []);
  return (
    <>
      <Layout name='Profile'>
        <div className='card shadow-lg'>
          <div className='card-body'>
            <div className='flex justify-between items-center'>
              <div className='items-center md:flex'>
                <div className='avatar'>
                  <div className='ring-offset-base-100 ring-secondary w-24 h-24 rounded-full ring ring-offset-2'>
                    <Image
                      width={96}
                      height={96}
                      src={`https://avatars.dicebear.com/api/micah/${user?.id}:seed.svg`}
                      alt=''
                    />
                  </div>
                </div>
                <div className='ml-8'>
                  <p>{user?.email}</p>
                  <p>Joined: {user?.created_at}</p>
                </div>
              </div>
              <div>
                <a
                  href='/dashboard/profile/#my-modal'
                  className='btn btn-error'
                >
                  Delete Account
                </a>
                <div id='my-modal' className='modal'>
                  <div className='modal-box'>
                    <p className='mb-4'>
                      Are you sure you want to delete your account?
                    </p>
                    <p>This action is inevitable!</p>
                    <div className='modal-action'>
                      <button
                        onClick={() => deleteAccount()}
                        className='btn btn-error'
                      >
                        Delete
                      </button>
                      <a href='#' className='btn'>
                        Close
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
