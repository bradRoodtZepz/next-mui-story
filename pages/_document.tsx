import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter';
import { Html, Head, Main, NextScript } from "next/document";

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