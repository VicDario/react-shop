import useInitialState from '@hooks/useInitialState';
import AppContext from '@context/AppContext';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState({});
  return (
    <AppContext.Provider value={initialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
