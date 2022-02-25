import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>북 라커</title>
        <meta
          name="description"
          content="좋아하는 전자책을 구매하고 소장해보자"
        />
        <meta name="keywords" content="북라커, booklocker, 책, 전자책, ebook" />
        <meta
          property="og:image"
          content='https://firebasestorage.googleapis.com/v0/b/booklocker-981a5.appspot.com/o/thumbnail_b.png?alt=media&token=53551fce-d805-4830-a6f2-2808c244891c'
        />
        <link rel="shortcut icon" href="./img/favicon.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
