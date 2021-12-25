/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className=''>
        <div className='container px-4 mx-auto xl:px-44'>
          <Header />
          <section className='flex justify-center px-2 mt-24 mb-24 text-center'>
            <div className='xl:w-2/3'>
              <h1 className='font-secondary text-zinc-800 mb-4 text-6xl font-bold text-center md:text-5xl'>
                Protect your Images with Invisible Watermarks
              </h1>
              <h3 className='font- text-zinc-900 text-lg font-normal leading-6 md:px-5 md:text-2xl'>
                We tag your images with a unique watermark that is invisible to
                the naked eye. Want to find the monger of your images? Mark them
                with our tool and find out who is spreading them.
              </h3>
            </div>
          </section>
        </div>
        <section className='dotted flex justify-center mt-16 border-t-2 border-b-2 border-gray-200'>
          <div className='flex justify-center px-4 py-8 xl:py-12 xl:w-2/3'>
            <div className='rounded-2xl shadow-2xl'>
              <Image
                className='block w-full h-full'
                width={'1904'}
                height={'934'}
                alt='alt'
                src='/images/dashboard.png'
              />
            </div>
          </div>
        </section>
        <div className='container px-4 mx-auto xl:px-44'>
          <section id='feature' className='px-4 mt-24'>
            <div className='flex justify-center mb-12 text-center'>
              <div className='xl:w-2/3'>
                <h1 className='text-zinc-800 text-3xl'>How does it work?</h1>
                <h3 className='font-primary font-normal md:px-5'>
                  We use a steganography algorithm to hide the content in the
                  images. In particular we hide a qrcode in your image which you
                  can retrieve later if you find your images on the web.
                </h3>
              </div>
            </div>
            <div className='flex justify-center mt-6'>
              <div className='grid grid-rows-6 grid-flow-col gap-4 w-full md:grid-rows-1'>
                <div className='flex justify-center p-4 mb-2 w-full rounded-lg border-gray-200 shadow-md'>
                  <div>
                    <div className='flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-4 w-6 h-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                      <h3>Invisible modification</h3>
                    </div>
                    <p className='font-primary text-lg font-normal'>
                      All changes made to the image are invisible for the naked
                      eye.
                    </p>
                  </div>
                </div>

                <div className='flex justify-center p-4 mb-2 w-full rounded-lg border-gray-200 shadow-md'>
                  <div>
                    <div className='flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-4 w-6 h-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
                        />
                      </svg>
                      <h3>Robust cryptographie</h3>
                    </div>
                    <p className='font-primary text-lg font-normal'>
                      The watermark cannot be decrypted by anyone except the
                      owner. It is impossible to reverengineer the watermark.
                    </p>
                  </div>
                </div>
                <div className='flex justify-center p-4 mb-2 w-full rounded-lg border-gray-200 shadow-md'>
                  <div>
                    <div className='flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-4 w-6 h-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
                        />
                      </svg>
                      <h3>Proof of Ownership</h3>
                    </div>
                    <p className='font-primary text-lg font-normal'>
                      Proof of ownership is a unique identifier of the image. If
                      you find the watermark on the image, you can retrieve the
                      watermark and it&apro;s content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='flex justify-center px-4 mt-24 text-center'>
            <div className='xl:w-2/3'>
              <h1 className='text-zinc- mb-4 text-3xl'>
                Upload your files and find the leak.
              </h1>
              <div className='flex justify-center mb-4 rounded-lg shadow'>
                <Image
                  className='w-48 bg-none'
                  src='/images/selectfile.png'
                  width='1920'
                  height='928'
                  alt='Icon'
                />
              </div>
              <h3 className='font-primary text-zinc-700 font-normal md:px-5'></h3>
            </div>
          </section>

          <section id='pricing' className='pb-20 mt-24 w-full'>
            <div className='px-10 mx-auto max-w-7xl text-center'>
              <h1 className='fotn-secondary text-3xl'>Flexible Plans</h1>
              <p className='mt-3 text-lg text-gray-500'>
                Our flexible plans are designed to meet the needs of any team.
              </p>
              <div className='grid gap-5 mt-12 md:grid-cols-2 lg:grid-cols-2'>
                <div className='flex relative flex-col justify-between p-8 rounded-2xl lg:p-6 xl:p-8'>
                  <div className='absolute inset-0 w-full h-full bg-green-50 rounded-2xl transform translate-x-2 translate-y-2'></div>
                  <div className='absolute inset-0 w-full h-full rounded-2xl border-2 border-gray-900'></div>
                  <div className='flex relative pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5'>
                    <svg
                      className='w-16 h-16 text-green-400 rounded-2xl'
                      viewBox='0 0 150 150'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <defs>
                        <rect
                          x='0'
                          y='0'
                          width='150'
                          height='150'
                          rx='15'
                        ></rect>
                      </defs>
                      <g fill='none' fillRule='evenodd'>
                        <mask fill='#fff'>
                          <use xlinkHref='#plan1'></use>
                        </mask>
                        <use fill='currentColor' xlinkHref='#plan1'></use>
                        <circle
                          fillOpacity='.3'
                          fill='#FFF'
                          mask='url(#plan1)'
                          cx='125'
                          cy='25'
                          r='50'
                        ></circle>
                        <path
                          fillOpacity='.3'
                          fill='#FFF'
                          mask='url(#plan1)'
                          d='M-33 83H67v100H-33z'
                        ></path>
                      </g>
                    </svg>
                    <div className='flex relative flex-col items-start'>
                      <h3 className='text-xl font-bold'>Basic Plan</h3>
                      <p className='tracking-tight text-gray-500'>
                        <span className='inline-block relative text-sm transform -translate-y-2.5'>
                          $
                        </span>
                        <span className='text-3xl font-bold text-gray-800'>
                          10
                        </span>
                        <span className='inline-block text-sm transform -translate-y-0.5'>
                          / user
                        </span>
                      </p>
                    </div>
                  </div>

                  <ul className='relative py-12 space-y-3'>
                    <li className='flex items-center space-x-2 text-sm font-medium text-gray-500'>
                      <svg
                        className='w-6 h-6 text-green-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      <span>10 Images</span>
                    </li>
                    <li className='flex items-center space-x-2 text-sm font-medium text-gray-500'>
                      <svg
                        className='w-6 h-6 text-green-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      <span>With 10 watermarks each</span>
                    </li>
                    <li className='flex items-center space-x-2 text-sm font-medium text-gray-500'>
                      <svg
                        className='w-6 h-6 text-green-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      <span>Priority Email Support</span>
                    </li>
                  </ul>

                  <a
                    href='/login'
                    className='group flex relative justify-center items-center px-5 py-5 w-full text-lg font-medium text-white rounded-xl'
                  >
                    <span className='absolute inset-0 w-full h-full bg-green-500 rounded-xl transition-all duration-200 ease-out transform translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full rounded-xl border-2 border-gray-900'></span>
                    <span className='relative'>Choose Plan</span>
                    <svg
                      className='ml-2 w-5 h-5 transition-all duration-200 ease-out transform group-hover:translate-x-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </a>
                </div>

                <div className='relative p-8 rounded-2xl lg:p-6 xl:p-8'>
                  <div className='absolute inset-0 w-full h-full bg-blue-50 rounded-2xl transform translate-x-2 translate-y-2'></div>
                  <div className='absolute inset-0 w-full h-full rounded-2xl border-2 border-gray-900'></div>
                  <div className='flex relative pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5'>
                    <svg
                      className='w-16 h-16 text-indigo-400 rounded-2xl'
                      viewBox='0 0 150 150'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <defs>
                        <rect
                          x='0'
                          y='0'
                          width='150'
                          height='150'
                          rx='15'
                        ></rect>
                      </defs>
                      <g fill='none' fillRule='evenodd'>
                        <mask fill='#fff'>
                          <use xlinkHref='#plan1'></use>
                        </mask>
                        <use fill='currentColor' xlinkHref='#plan1'></use>
                        <circle
                          fillOpacity='.3'
                          fill='#FFF'
                          mask='url(#plan1)'
                          cx='125'
                          cy='25'
                          r='50'
                        ></circle>
                        <path
                          fillOpacity='.3'
                          fill='#FFF'
                          mask='url(#plan1)'
                          d='M-33 83H67v100H-33z'
                        ></path>
                      </g>
                    </svg>
                    <div className='flex relative flex-col items-start'>
                      <h3 className='text-xl font-bold'>Professional Plan</h3>
                      <p className='tracking-tight text-gray-500'>
                        <span className='inline-block relative text-sm transform -translate-y-2.5'>
                          $
                        </span>
                        <span className='text-3xl font-bold text-gray-800'>
                          25
                        </span>
                        <span className='inline-block text-sm transform -translate-y-0.5'>
                          / user
                        </span>
                      </p>
                    </div>
                  </div>

                  <ul className='relative py-12 space-y-3'>
                    <li className='flex items-center space-x-2 text-sm font-medium text-gray-500'>
                      <svg
                        className='w-6 h-6 text-blue-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      <span>50 Images</span>
                    </li>
                    <li className='flex items-center space-x-2 text-sm font-medium text-gray-500'>
                      <svg
                        className='w-6 h-6 text-blue-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      <span>With 25 Watermarks each</span>
                    </li>

                    <li className='flex items-center space-x-2 text-sm font-medium text-gray-500'>
                      <svg
                        className='w-6 h-6 text-blue-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      <span>Priority Email &amp; Chat Support</span>
                    </li>
                  </ul>

                  <a
                    href='/login'
                    className='group flex relative justify-center items-center px-5 py-5 w-full text-lg font-medium text-white rounded-xl'
                  >
                    <span className='absolute inset-0 w-full h-full bg-blue-600 rounded-xl transition-all duration-200 ease-out transform translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0'></span>
                    <span className='absolute inset-0 w-full h-full rounded-xl border-2 border-gray-900'></span>
                    <span className='relative'>Choose Plan</span>
                    <svg
                      className='ml-2 w-5 h-5 transition-all duration-200 ease-out transform group-hover:translate-x-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='mt-16 border-t-2 border-gray-200'>
              <div className='w-2/5'>
                <h1 className='text-zinc-900 py-8'>
                  Spend more time creating & less time sorting your thoughts.
                </h1>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
