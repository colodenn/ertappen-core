/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { AlertType, useAlert } from 'react-alert';

import Layout from '@/components/layout/dashboard/Layout';

import { supabase } from '@/utils/client';
import { useUser } from '@/utils/useUser';

export default function Images() {
  const alert = useAlert();
  const [isChecked, setIsChecked] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [checkedList, setCheckedList] = useState({});
  const [images, setImages] = useState<Array<any>>([]);
  const router = useRouter();
  const session = useUser()?.session;

  function handleChange(event: ChangeEvent<HTMLInputElement>, index: number) {
    setIsChecked(event.target.checked);
    setCheckedList({ ...checkedList, [index]: event.target.checked });
  }

  function showAlert(message: string, type: AlertType) {
    alert.show(message, {
      type: type,
    });
  }

  async function deleteImage() {
    const list: any[] = [];
    images?.map(async (e, index) => {
      if (
        (!checkedList as any)[index] ||
        typeof (checkedList as any)[index] === 'undefined'
      ) {
        list.push(e);
      } else {
        const { error } = await supabase.storage
          .from('images')
          .remove([`${session?.user?.id}/${e.name}`]);
        if (error) {
          showAlert(error.message, 'error');
        } else showAlert(`${e.name} was deleted successfully`, 'info');
        await supabase
          .from('images')
          .delete()
          .match({ name: e.name, user_id: session?.user?.id });
        await supabase
          .from('users_per_image')
          .delete()
          .match({ image_id: e.name });
      }
      setIsChecked(false);
    });
    setImages(list);
  }

  function uploadFile(file: any) {
    setFile(file);
    setTimeout(() => {
      setProgress(30);
    }, 200);
    setTimeout(() => {
      setProgress(75);
    }, 500);
    setTimeout(() => {
      setProgress(100);
      showAlert('File Uploaded Successfully', 'success');
      setFile(null);
      setProgress(1000);
    }, 1000);
  }

  async function getImages() {
    const user = await supabase.auth.user();

    const { data } = await supabase
      .from('images')
      .select('*')
      .match({ user_id: user?.id });

    // setThumbnails(t);
    setImages(data ?? []);
  }

  useEffect(() => {
    getImages();
  }, []);

  const handleSubmission = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const data = new FormData();
    data.append('file', (event?.target?.files as any)[0]);
    axios
      .post('/api/addImage', data, {
        headers: {
          token: session?.access_token ?? '',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        setImages([...images, res.data[0]]);
      });
  };

  return (
    <>
      <Layout name='Images'>
        <div className='card shadow-lg'>
          <div className='card-body'>
            <p>To encode your images upload it here.</p>
          </div>
        </div>
        <div className='card shadow-lg'>
          <div className='card-body'>
            {!file ? (
              <div className='w-full'>
                <label htmlFor='file-upload' className='btn btn-primary w-full'>
                  Select file
                </label>
                <input
                  accept='.jpg'
                  id='file-upload'
                  className='hidden'
                  type='file'
                  onChange={(files) => {
                    uploadFile(files);
                    handleSubmission(files);
                  }}
                />
              </div>
            ) : (
              <progress
                className='progress progress-info'
                value={progress}
                max='100'
              ></progress>
            )}
          </div>
        </div>
        <div className='card shadow-lg'>
          <div className='card-body'>
            <div className='overflow-x-auto'>
              <table className='table w-full'>
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type='checkbox' className='checkbox' />
                      </label>
                    </th>
                    <th>Title</th>
                    <th>User count</th>
                    <th>created at</th>
                    <th>Add user</th>
                  </tr>
                </thead>
                <tbody>
                  {images?.map((e, index) => (
                    <tr key={index} className='hover'>
                      <th>
                        <label>
                          <input
                            type='checkbox'
                            className='checkbox'
                            onChange={(e) => handleChange(e, index)}
                          />
                        </label>
                      </th>
                      <td>
                        <div className='flex items-center space-x-3'>
                          <div className='avatar'>
                            <div className='mask mask-squircle w-12 h-12'>
                              <Image
                                width={50}
                                height={50}
                                src={e.image_url}
                                alt='Avatar Tailwind CSS Component'
                              />
                            </div>
                          </div>
                          <div>
                            <div className='font-bold'>{e.name}</div>
                            <div className='text-sm opacity-50'>
                              {e.width}x{e.height}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>123</td>
                      <th>{e.created_at}</th>
                      <th>
                        <button
                          onClick={() =>
                            router.push(`/dashboard/images/${e.name}`)
                          }
                          className='btn btn-secondary btn-xs'
                        >
                          Add user
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>Title</th>
                    <th>User count</th>
                    <th>created at</th>
                    <th>Add user</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            {isChecked ? (
              <div className='flex'>
                <button
                  className='btn btn-error mt-8'
                  onClick={() => deleteImage()}
                >
                  Delete
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
