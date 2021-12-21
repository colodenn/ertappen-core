import * as React from 'react';
import { Link } from 'react-scroll';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Header() {
  return (
    <header className='mt-4 mb-8 md:flex md:justify-between'>
      <div className='flex justify-center'>
        <UnstyledLink href='/' className='text-zinc-900 text-2xl font-bold'>
          ertappen.
        </UnstyledLink>
      </div>
      <nav className='align-center flex justify-center items-center px-6 mt-2 mb-2 font-normal'>
        <ul className='text-zinc-800 flex items-center text-base'>
          <li className='mr-4 border-b-2 border-gray-200 hover:border-blue-400'>
            <a href='mailto:cornelius.denninger@gmail.com'>Contact</a>
          </li>
          <li className='mr-4 border-b-2 border-gray-200 hover:border-blue-400'>
            <Link spy={false} to='feature' smooth={true}>
              Features
            </Link>
          </li>
          <li className='mr-4 border-b-2 border-gray-200 hover:border-blue-400'>
            <Link spy={false} to='pricing' smooth={true}>
              Pricing
            </Link>
          </li>
          <li className='bg-zinc-700 px-3 py-2 text-white rounded cursor-pointer hover:bg-zinc-600'>
            Login
          </li>
        </ul>
      </nav>
    </header>
  );
}
