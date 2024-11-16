import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import styles from "../styles/top.module.css";

export default function Home() {
  return (
    <Layout nav="home">
      <Head>
        <title>Reo Hokazono</title>
      </Head>
      <div className={styles.linkContainer}>
        <Link href="https://github.com/ReoHokazono">GitHub</Link>
        <Link href="https://500px.com/p/hokazono">500px</Link>
      </div>
    </Layout>
  );
}
