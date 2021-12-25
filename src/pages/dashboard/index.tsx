import { useRouter } from 'next/router';

import Layout from '@/components/layout/dashboard/Layout';

function Home() {
  const router = useRouter();
  return (
    <>
      <Layout name='Dashboard'>
        <div className='grid gap-4 md:grid-cols-3'>
          <div
            className='card mb-8 bg-white shadow-lg cursor-pointer'
            onClick={() => {
              router.push('/dashboard/images');
            }}
          >
            <div className='card-body'>
              <h2 className='card-title'>Upload your first image</h2>
              <p>
                Click me to test alert Go to the image tab and upload an image
                you want to mark with a hidden watermark.
              </p>
            </div>
          </div>
          <div
            className='card mb-8 bg-white shadow-lg cursor-pointer'
            onClick={() => {
              router.push('/dashboard/images');
            }}
          >
            <div className='card-body'>
              <h2 className='card-title'>Add a User</h2>
              <p>Proceed and add a userspecific watermark to your image.</p>
            </div>
          </div>
          <div
            className='card mb-8 bg-white shadow-lg cursor-pointer'
            onClick={() => {
              router.push('/dashboard/download');
            }}
          >
            <div className='card-body'>
              <h2 className='card-title'>Detect User</h2>
              <p>
                Found your image on reddit, instagram or facebook? Download the
                image and upload it here to check who started sharing your
                image.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
