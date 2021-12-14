import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { getSortedWorksData } from "../lib/works"
import Layout from "../components/layout"

// const myLoader = ({ src, width, quality }) => {
//   return src
// }

export async function getStaticProps() {
  const allWorksData = getSortedWorksData()
  return {
    props: {
      allWorksData
    }
  }
}

export default function Home( {allWorksData} ) {
  return (
    <Layout nav="home">
      <Head>
        <title>Reo Hokazono - Portfolio</title>
        <meta httpEquiv="refresh" content="3;URL=https://hokazono.me"></meta>
      </Head>
    </Layout>
  )
}
