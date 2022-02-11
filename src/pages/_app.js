import Layout from "@components/Layout/Layout";
import "@styles/app.scss";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
