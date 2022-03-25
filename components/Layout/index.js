import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

export default function Layout(props) {
  const { children, pageTitle } = props;

  return (
    <>
      <Head>
        <title>
          NextJS Basic |
          {' '}
          {pageTitle}
        </title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
