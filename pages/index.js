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
      </Head>
      <section>
        <ul className={styles.worksUl}>
          {allWorksData.map(({id, caption, type, cover}) => (
            <li key={id}>
              <Link href={`/works/${id}`}>
                <a>
                  <Image 
                    // loader={myLoader}
                    // unoptimized={true} 
                    src={`/images/${cover}`} 
                    width={370} 
                    height={280}/>
                  <div className={styles.captionContainer}>
                    <p className={styles.captionType}>{type}</p>
                    <p className={styles.captionText}>{caption}</p>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
