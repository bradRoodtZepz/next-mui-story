import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { lime, orange, pink, purple } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const lightTheme = createTheme({
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    palette: {      
      mode: 'light',
      primary: pink,
      secondary: purple,
      background: {
        default: '#f5f5f5',
      },
    },
    spacing: 8,
  });


  export const darkTheme = createTheme({
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    palette: {
      mode: 'light',      
      primary: orange,
      secondary: purple,
      background: {
        default: '#121212',
      },
    },
    spacing: 8,
  });