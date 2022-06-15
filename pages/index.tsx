import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return <>
    <Head>
      <title>Chris Straka</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧑‍💻</text></svg>" />
      <script defer src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Head>
    <main className={styles.main}>

    </main>
  </>
}

export default Home
