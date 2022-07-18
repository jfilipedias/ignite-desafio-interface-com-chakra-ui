import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

import { theme } from '../styles/theme';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/slider.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
