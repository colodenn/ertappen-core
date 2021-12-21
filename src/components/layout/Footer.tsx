import * as React from 'react';

export default function Footer() {
  return (
    <footer className='flex bottom-0 justify-center px-4 py-6 mt-16 w-full bg-gray-100 border-t-2 border-gray-300'>
      <div className='container px-4 xl:px-44'>
        <div className='flex justify-between'>
          <div className='text-zinc-800 text-lg'>ertappen. 2021</div>
          <div className='text-base'>⌨️ with ❤️ in Saarland</div>
        </div>
        <div className='mt-4'>
          <ul className='flex justify-start'>
            <li className='mr-6 text-base border-b-2 border-gray-200'>
              Terms of Service
            </li>
            <li className='text-base border-b-2 border-gray-200'>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
