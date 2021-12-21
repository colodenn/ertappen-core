import React from 'react';

import Layout from '@/components/layout/dashboard/Layout';
export default function Download() {
  const [uploaded] = React.useState(false);
  const [spinner] = React.useState(false);
  return (
    <Layout name='Download'>
      <div className='card shadow-lg'>
        <div className='card-body'>
          <p>Want to see who distributed your content? Upload below.</p>
        </div>
      </div>
      <div className='card shadow-lg'>
        <div className='card-body'>
          <div className='w-full'>
            {!spinner ? (
              <label htmlFor='file-upload' className='btn btn-primary w-full'>
                Select file
              </label>
            ) : (
              <label
                htmlFor='file-upload'
                className='btn btn-primary loading w-full'
              >
                Detecting Watermark
              </label>
            )}
            <input
              accept='.jpg, .jpeg'
              id='file-upload'
              className='hidden'
              type='file'
              onChange={(e) => e}
            />
          </div>
        </div>
      </div>

      {uploaded && (
        <div className='card shadow-lg'>
          <div className='card-body'>
            <div className='flex justify-around items-center text-center'>
              <div>
                {/* <img className='rounded-box w-64' id='output' src={image} /> */}
              </div>
              <div>
                {/* Username: <span className='link-secondary'>@{username}</span> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
