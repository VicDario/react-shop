import Head from 'next/head';
import Script from 'next/script';
import useInitialState from '@hooks/useInitialState';
import AppContext from '@context/AppContext';

import '@styles/global.scss';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState({});
  return (
    <>
      <Head>
        <title>Yarn Store - Next</title>
      </Head>
      <AppContext.Provider value={initialState}>
        <Component {...pageProps} />
      </AppContext.Provider>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YXGCLZZ3N2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-YXGCLZZ3N2');
            `}
      </Script>
    </>
  );
}

export default MyApp;
