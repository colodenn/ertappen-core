import { AppProps } from 'next/app';
import { Provider as AlertProvider } from 'react-alert';

import '@/styles/globals.css';

import { AlertTemplate, options } from '@/components/alert/alert';
import Layout from '@/components/layout/Layout';

import { UserContextProvider } from '@/utils/useUser';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <AlertProvider template={AlertTemplate} {...options}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AlertProvider>
    </UserContextProvider>
  );
}

export default MyApp;
