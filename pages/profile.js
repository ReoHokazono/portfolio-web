import Head from "next/head"
import { getProfileData } from "../lib/profile"
import Layout from "../components/layout"
import styles from "../styles/Profile.module.css"

export async function getStaticProps() {
  const profileData = await getProfileData()
  return {
      props: {
        profileData
      }
  }
}

export default function Profile( {profileData} ) {
  return (
    <Layout nav="profile">
      <Head>
        <title>Reo Hokazono - Portfolio</title>
      </Head>

      <section className={styles.profileContainer}> 
        <div dangerouslySetInnerHTML={{ __html: profileData }} />
      </section>
    </Layout>
  )
}
