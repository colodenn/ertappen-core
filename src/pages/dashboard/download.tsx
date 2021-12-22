/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { useAlert } from 'react-alert';

import Layout from '@/components/layout/dashboard/Layout';

import { useUser } from '@/utils/useUser';
export default function Download() {
  const [uploaded, setUploaded] = React.useState(false);
  const [spinner, setSpinner] = React.useState(false);
  const alert = useAlert();

  const session = useUser()?.session;
  const [username, setUsername] = useState('');
  const [image, setImage] = useState('');

  const handleSubmission = async (event: any) => {
    // event.preventDefault();
    setSpinner(true);
    axios
      .post<any>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/decode`,

        event.target.files[0],

        {
          headers: {
            token: session?.access_token ?? '',
            'Content-Type': 'image/jpg',
            username: username,
          },
        }
      )
      .then((res) => {
        setUploaded(true);
        setUsername(res.data.data);
        // const image = document.getElementById('output');
        setSpinner(false);
        alert.show('Found watermark', {
          type: 'success',
        });
      })
      .catch(() => {
        setUploaded(false);
        alert.show('Could not find a watermark', {
          type: 'error',
        });
      });

    setImage(URL.createObjectURL(event.target.files[0]));
  };
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
              onChange={(e) => handleSubmission(e)}
            />
          </div>
        </div>
      </div>

      {uploaded && (
        <div className='card shadow-lg'>
          <div className='card-body'>
            <div className='flex justify-around items-center text-center'>
              <div>
                <Image
                  width={256}
                  height={180}
                  className='rounded-box w-64'
                  id='output'
                  src={image}
                  alt=''
                />
              </div>
              <div>
                Username: <span className='link-secondary'>@{username}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
