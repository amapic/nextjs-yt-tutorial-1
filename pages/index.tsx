import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import CaretIcon_up from '../img/icons/caret_up.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        Go to my own{' '}
        <Link href="/personal">
          <a>Personal Page</a>
        </Link>
        <Image
            width="100%"
            height="100%"
            src={CaretIcon_up} />
      </div>
    </div>
  );
}
