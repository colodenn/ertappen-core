import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type LayoutProp = {
  name: string;
  children: React.ReactNode;
};
export default function Layout(props: LayoutProp) {
  const router = useRouter();

  return (
    <div className=''>
      <div className='w-full shadow'>
        <div className='border-b-1 navbar py-0 min-h-0 bg-white border-gray-300'>
          <div className='border-r-1 py-2 pr-4 pl-2 border-gray-300'>
            <button
              className='btn btn-ghost btn-square'
              onClick={() => router.push('/dashboard')}
            >
              <svg
                width='36'
                height='36'
                viewBox='0 0 36 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z'
                  stroke='#339AF0'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M24.3599 11.64L21.1799 21.18L11.6399 24.36L14.8199 14.82L24.3599 11.64Z'
                  stroke='#339AF0'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 px-2 mx-2'>
            <span className='text-lg font-bold'>{props.name}</span>
          </div>
        </div>
      </div>
      <div className='flex'>
        <aside className='border-r-1 drawer-mobile drawer-side fixedHeight flex flex-col justify-between items-center border-gray-300 shadow-lg'>
          <div className='w-full'>
            <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
            <ul className='bg-base-100 menu text-base-content overflow-y-auto w-full'>
              <li
                className={`mb-4 mt-8 ${
                  props.name === 'Dashboard' && 'border-r-4 border-blue-400'
                }`}
              >
                <button
                  data-tip='Home'
                  onClick={() => router.push('/dashboard')}
                  className='tooltip px-6 py-2 pl-7'
                >
                  <Image
                    width={24}
                    height={24}
                    src={'/images/Home.png'}
                    alt=''
                  />
                </button>
              </li>
              <li
                className={`mb-4 mt-8 ${
                  props.name === 'Images' && 'border-r-4 border-blue-400'
                }`}
              >
                <button
                  data-tip='Encode'
                  className='tooltip px-6 py-2 pl-7'
                  onClick={() => router.push('/dashboard/images')}
                >
                  <Image
                    width={24}
                    height={24}
                    src={'/images/Image.png'}
                    alt=''
                  />
                </button>
              </li>
              <li
                className={`mb-4 mt-8 ${
                  props.name === 'Download' && 'border-r-4 border-blue-400'
                }`}
              >
                <button
                  data-tip='Decode'
                  className='tooltip px-6 py-2 pl-7'
                  onClick={() => router.push('/dashboard/download')}
                >
                  <Image
                    width={24}
                    height={24}
                    src={'/images/Download.png'}
                    alt=''
                  />
                </button>
              </li>
              <li
                className={`mb-4 mt-8 ${
                  props.name === 'Stats' && 'border-r-4 border-blue-400'
                }`}
              >
                <button
                  data-tip='Stats'
                  className='tooltip px-6 py-2 pl-7'
                  onClick={() => router.push('/dashboard/stats')}
                >
                  <Image
                    width={24}
                    height={24}
                    src={'/images/BarChart.png'}
                    alt=''
                  />
                </button>
              </li>
              <li
                className={`mb-12 mt-8 ${
                  props.name === 'Plan' && 'border-r-4 border-blue-400'
                }`}
              >
                <button
                  data-tip='Payment'
                  onClick={() => router.push('/dashboard/payment')}
                  className='tooltip px-6 py-2 pl-7'
                >
                  <Image
                    width={24}
                    height={24}
                    src={'/images/credit.png'}
                    alt=''
                  />
                </button>
              </li>
            </ul>
          </div>
          <div className=''>
            <div className='dropdown dropdown-end dropdown-hover dropdown-right'>
              <div
                className={`w-full  ${
                  props.name === 'Profile' &&
                  'border-r-4 border-blue-400 pr-4 pl-3 py-0'
                }`}
              >
                <div className='mb-4'>
                  <Image
                    tabIndex={0}
                    className='mb-4 w-12 h-12 rounded-full cursor-pointer'
                    src={`https://avatars.dicebear.com/api/micah/:seed.svg`}
                    alt=''
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='bg-base-100 dropdown-content menu rounded-box p-2 w-52 shadow'
              >
                <li>
                  <Link href='/dashboard/profile'>Profile</Link>
                </li>
                <li>
                  <Link href={''}>Settings</Link>
                </li>
                <li>
                  <Link href={''}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <div className='fixedHeight fixedWidth overflow-y-scroll'>
          <div className='overflow-y-scroll p-8 w-full h-full'>
            {props.children}
          </div>
        </div>
      </div>
      <style jsx>{`
        /* width */
        ::-webkit-scrollbar {
          width: 10px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #888;
        }
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        .border-b-1 {
          border-bottom: 1px solid #e8e8ef;
        }
        .border-r-1 {
          border-right: 1px solid #e8e8ef;
        }
      `}</style>
    </div>
  );
}
