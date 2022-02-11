import Layout from '@components/Layout/Layout';
import Link from 'next/link';
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
    return (
      <section className={styles.error}>
        <video
          className={styles.error__video}
          src="/static/videos/intro-bg.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className={styles.error__inner}>
          <h1 className="heading__title">Hm... Looks like there's nothing here.</h1>
          <p className="heading__subtitle">
            Error 404: this page was moved, renamed or simply does not exist.
          </p>
          <Link href="/">
            <a className={styles.error__link}>Back to home page</a>
          </Link>
        </div>
      </section>
    );
}

ErrorPage.getLayout = function getLayout(page) {
  return <Layout title="Not found">{page}</Layout>;
};

export default ErrorPage
