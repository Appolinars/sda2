import Script from "next/script";

import Layout from "@components/Layout/Layout";
import "@styles/app.scss";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}{" "}
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Script src="/netlifyIdentity.js"></Script>
    </>
  );
}

export default MyApp;
