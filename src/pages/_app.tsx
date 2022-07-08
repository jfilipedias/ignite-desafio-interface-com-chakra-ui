import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

import { theme } from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
