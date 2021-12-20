import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { getSortedWorksData } from "../lib/works"
import Layout from "../components/layout"
import redirect from "nextjs-redirect"

// const myLoader = ({ src, width, quality }) => {
//   return src
// }
const Redirect = redirect('https://hokazono.me')

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
    <Redirect>
    <Layout nav="home">
      <Head>
        <title>Reo Hokazono - Portfolio</title>
      </Head>
    </Layout>
    </Redirect>
  )
}
