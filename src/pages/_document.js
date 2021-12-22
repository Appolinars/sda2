import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="/static/fonts/Gilroy-Regular.woff2" as="font" crossOrigin="" />
          <link rel="preload" href="/static/fonts/Gilroy-Semibold.woff2" as="font" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
