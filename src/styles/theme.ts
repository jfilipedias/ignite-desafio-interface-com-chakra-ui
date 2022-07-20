import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      50: '#f5f8fa',
      200: '#dadada',
      600: '#47585b',
    },
    yellow: { 500: '#ffba08' },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600',
      },
    },
  },
});
