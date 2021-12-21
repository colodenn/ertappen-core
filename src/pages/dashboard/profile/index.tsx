import Image from 'next/image';

import Layout from '@/components/layout/dashboard/Layout';
export default function Profile() {
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
                      src={`https://avatars.dicebear.com/api/micah/:seed.svg`}
                      alt=''
                    />
                  </div>
                </div>
                <div className='ml-8'>
                  {/* <p>{user?.email}</p>
                  <p>Joined: {user?.created_at}</p> */}
                </div>
              </div>
              <div>
                <a href='/profile/#my-modal' className='btn btn-error'>
                  Delete Account
                </a>
                <div id='my-modal' className='modal'>
                  <div className='modal-box'>
                    <p className='mb-4'>
                      Are you sure you want to delete your account?
                    </p>
                    <p>This action is inevitable!</p>
                    <div className='modal-action'>
                      <a href='#' className='btn btn-error'>
                        Delete
                      </a>
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
