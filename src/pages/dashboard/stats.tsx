import Link from 'next/link';

import Layout from '@/components/layout/dashboard/Layout';
export default function Stats() {
  return (
    <Layout name='Stats'>
      <div className='flex justify-center items-center mx-auto my-auto w-full h-2/3 text-center'>
        <div>
          <h1 className='text-6xl font-bold'>Under construction</h1>
          <Link href='/dashboard'>Go back home</Link>
        </div>
      </div>
    </Layout>
  );
}
