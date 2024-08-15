import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter';
import { Html, Head, Main, NextScript } from "next/document";
import {ServerStyleSheets} from "@mui/styles";
import createCache from '@emotion/cache'
import React from 'react';

export default function Document(props:any) {
  return (
    <Html lang="en">
      <Head>
      <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}




Document.getInitialProps = async (ctx:any) => {  
  const styledComponentsSheet = new ServerStyleSheets();

  try {
    const finalProps = await documentGetInitialProps(ctx, {
      emotionCache: createCache({
        key: 'mui'
      }),
      plugins: [
        {
          // styled-components
          enhanceApp: (App) => (props) =>
            styledComponentsSheet.collect(<App {...props} />),
          resolveProps: async (initialProps) => ({
            ...initialProps,
            styles: [
              styledComponentsSheet.getStyleElement(),
              ...React.Children.toArray(initialProps.styles),
            ],
          }),
        },        
      ],
    });
    return finalProps;
  } catch (error){
    console.log(error);
  }
};
