import Head from "next/head"
import { getAllWorkIds, getWorkData } from "../../lib/works"
import Layout from "../../components/layout"
import Image from "next/image"
import styles from "../../styles/work.module.css"

// const myLoader = ({ src, width, quality }) => {
//     return src
//   }

export async function getStaticProps({ params }) {
    const workData = await getWorkData(params.id)
    return {
        props: {
            workData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllWorkIds()
    return {
        paths,
        fallback: false
    }
}

export default function Work({ workData }) {
    return(
        <Layout nav="work">
            <Head>
                <title>{workData.caption} | Reo Hokazono - Portfolio</title>
            </Head>
            <section className={styles.workContainer}>
                <h1 className={styles.captionText}>{workData.caption}</h1>
                <p className={styles.captionType}>{workData.type}</p>
                <Image 
                    // loader={myLoader}
                    unoptimized={true} 
                    priority={true}
                    src={`/images/${workData.cover}`} 
                    width={925} 
                    height={700}/>
                <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
            </section>
        </Layout>
    )
}