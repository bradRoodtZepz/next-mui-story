import "@/styles/globals.css";
import { EmotionCache } from "@emotion/cache";
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { lime, orange, purple } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: orange,
    secondary: purple,
  },
  spacing: 8,
});

export default function App(props: AppProps & {emotionCache: EmotionCache}) {
  const {Component, pageProps} = props;
  return (
  <AppCacheProvider {...props}>
    <Head>
      <meta charSet="utf-8" />
    </Head>
    <ThemeProvider theme={theme}>    
      <Component {...pageProps} />
    </ThemeProvider>
  </AppCacheProvider>
  );
}