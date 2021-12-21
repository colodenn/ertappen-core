import { useState } from 'react';

import Layout from '@/components/layout/dashboard/Layout';

export default function Images() {
  const [file] = useState(null);
  const [progress] = useState(0);

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
                  onChange={() => {
                    // uploadFile(files);
                    // handleSubmission(files);
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
                  {/* {images.map((e, index) => (
                    <tr key={index} className="hover">
                      <th>
                        <label>
                          <input
                            type="checkbox"
                            className="checkbox"
                            onChange={(e) => handleChange(e, index)}
                          />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="w-12 h-12 mask mask-squircle">
                              <img
                                src={e.image_url}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{e.name}</div>
                            <div className="text-sm opacity-50">
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
                          className="btn btn-secondary btn-xs"
                        >
                          Add user
                        </button>
                      </th>
                    </tr>
                  ))} */}
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
            {/* {isChecked ? (
              <div className="flex">
                <button
                  className="btn btn-error mt-8 "
                  onClick={() => deleteImage()}
                >
                  Delete
                </button>
              </div>
            ) : (
              <></>
            )} */}
          </div>
        </div>
      </Layout>
    </>
  );
}
