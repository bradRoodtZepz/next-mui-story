import "@/styles/globals.css";
import { EmotionCache } from "@emotion/cache";
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from '@mui/material/styles';
import {lightTheme, darkTheme} from '@/styles/theme';



export default function App(props: AppProps & {emotionCache: EmotionCache}) {
  const {Component, pageProps} = props;
  return (
  <AppCacheProvider {...props}>
    <Head>
      <meta charSet="utf-8" />
    </Head>
    <ThemeProvider theme={darkTheme}>    
      <Component {...pageProps} />
    </ThemeProvider>
  </AppCacheProvider>
  );
}