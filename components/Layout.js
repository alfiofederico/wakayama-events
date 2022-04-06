import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from './Header';
import Footer from './Footer';

export default function Layout({title, keywords, description, author, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Head>

      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}


Layout.defaultProps = {
   
      title: "Wakayama | Find Events",
      description: "Wakayama Events Finder",
      keywords: "Wakayama, Events",
      author: "Alfio Federico Di Pinto"
}