import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae
          nostrum, laboriosam minima quis suscipit itaque sint numquam, rem
          officia explicabo sed natus quam corporis nisi distinctio saepe ullam
          quae.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae
          nostrum, laboriosam minima quis suscipit itaque sint numquam, rem
          officia explicabo sed natus quam corporis nisi distinctio saepe ullam
          quae.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
