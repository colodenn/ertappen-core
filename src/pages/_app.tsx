import { AppProps } from 'next/app';

import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';

import { UserContextProvider } from '@/utils/useUser';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
}

export default MyApp;
