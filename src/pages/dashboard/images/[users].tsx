/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Session } from '@supabase/supabase-js';
import axios, { AxiosRequestHeaders } from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { AlertCustomOptionsWithType, useAlert } from 'react-alert';

import Layout from '@/components/layout/dashboard/Layout';

import { supabase } from '@/utils/client';
import { useUser } from '@/utils/useUser';

export default function Users() {
  const router = useRouter();
  const session = useUser()?.session;
  const alert = useAlert();
  const [spinner, setSpinner] = React.useState(false);
  const { users } = router.query;
  const [Username, setUsername] = React.useState('');
  const [downloading, setDownloading] = React.useState(false);
  const [userProfile, setUserProfile] = React.useState<any>(null);

  const [user, setUser] = React.useState<any>([]);

  async function downloadEncoded(
    username: any,
    image: string | string[] | undefined
  ) {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 3000);

    const { data } = await supabase.storage
      .from('watermarked')
      .download(`${session?.user?.id}/${username}-${image}`);

    const dataType = 'image/jpeg';
    const binaryData = [];
    binaryData.push(data);
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(
      new Blob(binaryData as Blob[], { type: dataType })
    );
    downloadLink.setAttribute('download', `watermarked-${username}-${image}`);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  }
  async function getUsers() {
    if (userProfile === null) return;
    const { data } = await supabase
      .from('users_per_image')
      .select()
      .match({ image_id: users, userid: userProfile.id });
    setUser(data as any);
    // setUser(users);
  }

  async function getUser() {
    const user = await supabase.auth.user();
    if (user) {
      setUserProfile(user);
    }
  }

  async function addUser() {
    setSpinner(true);
    const { data }: any = await supabase.from('users_per_image').insert({
      image_id: users,
      username: Username,
      userid: userProfile.id,
    });
    const myHeaders = new Headers();
    myHeaders.append('token', (session as Session).access_token);

    const headers: AxiosRequestHeaders = {
      token: (session as Session).access_token,
      username: Username,
      imageid: String(users),
    };
    axios
      .get<any>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/encode`, {
        headers: headers,
        responseType: 'arraybuffer',
      })
      .then(async (res) => {
        await supabase.storage
          .from('watermarked')
          .upload(`${session?.user?.id}/${Username}-${users}`, res.data);

        const dataType = 'image/jpg';
        const binaryData = [];
        binaryData.push(res.data);
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(
          new Blob(binaryData, { type: dataType })
        );
        downloadLink.setAttribute(
          'download',
          `watermarked-${Username}-${users}`
        );
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();
        setUsername('');
        setUser([...user, ...data]);
        setSpinner(false);

        alert.show(
          'Created watermarked image',
          'success' as AlertCustomOptionsWithType
        );
      });
  }

  useEffect(() => {
    if (!users) {
      return;
    }

    getUser();
    getUsers();
  }, [router, userProfile]);

  return (
    <>
      <div id='my-modal' className='modal'>
        <div className='modal-box'>
          <p>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Username</span>
              </label>
              <input
                type='text'
                placeholder='username'
                className='input input-bordered'
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </p>
          <div className='modal-action flex'>
            <a
              onClick={() => addUser()}
              href={`/dashboard/images/${users}#`}
              className='btn btn-primary'
            >
              Accept
            </a>
            <a href={`/dashboard/images/${users}#`} className='btn'>
              Close
            </a>
          </div>
        </div>
      </div>
      <Layout name='Images'>
        <div className='card shadow-lg'>
          <div className='card-body'>
            {!spinner ? (
              <a
                href={`/dashboard/images/${users}#my-modal`}
                className='btn btn-primary'
              >
                Create User
              </a>
            ) : (
              <button className='btn btn-primary loading'>Tagging image</button>
            )}
          </div>
        </div>
        <div className='card shadow-lg'>
          <div className='card-body'>
            <div className='overflow-x-auto'>
              <table className='table-compact table w-full'>
                <thead>
                  <tr>
                    <th></th>
                    <th>User</th>
                    <th>Created at</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((item: any, index: any) => (
                    <tr key={index}>
                      <th>{index}</th>
                      <td>{item.username}</td>
                      <td>{item.created_at}</td>
                      <td>
                        <button
                          onClick={() => downloadEncoded(item.username, users)}
                          className={`btn btn-success ${
                            downloading && 'loading'
                          }`}
                        >
                          {downloading ? 'Downloading' : 'Download'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
