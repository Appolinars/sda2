import Script from "next/script";
import Layout from "@components/Layout/Layout";
import "@styles/app.scss";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      {getLayout(<Component {...pageProps} />)}
      <Script src="/netlifyIdentity.js"></Script>
    </>
  );
}

export default MyApp;
