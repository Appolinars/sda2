import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="title"
            property="og:title"
            content="SDA Company - Your partner in the digital world"
          />
          <meta property="og:site_name" content="SDA Company - Your partner in the digital world" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://sda-company.netlify.app/" />
          <meta
            name="image"
            property="og:image"
            content="https://sda.company/static/images/og-logo.jpeg"
          />
          <meta
            property="og:description"
            content="SDA is a Ukrainian software development company located in Kharkiv. Was founded in December 2019 and for the current moment, we have finished about 50+ projects of different complexity. Our main expertise is developing ios/android/web applications for B2B clients in the Healthcare, FinTech, and Education industries."
          />
          <meta
            name="description"
            content="SDA is a Ukrainian software development company located in Kharkiv. Was founded in December 2019 and for the current moment, we have finished about 50+ projects of different complexity. Our main expertise is developing ios/android/web applications for B2B clients in the Healthcare, FinTech, and Education industries."
          />

          <meta name="keywords" content="SDA, SDA Company" />
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
