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
          content="%PUBLIC_URL%/img/thumbnail_b.png"
          name="image'
        />
        <meta
          property="og:image"
          content="%PUBLIC_URL%/src/img/thumbnail_b.png"
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
