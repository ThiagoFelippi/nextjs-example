import Head from 'next/head'
import Layout from '../components/Layout/layout'
import style from "../styles/Home.module.scss"

import axios from "axios"

export default function Home({myUser}) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img 
        className={style.image}
        src="/images/myImage.jpeg"
        alt="My image"
      />
      <div className={style.userInfos}>
        <h1>{myUser.login}</h1>
        <a href={myUser.url}> My github </a>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const {data} = await axios.get("https://api.github.com/users/ThiagoFelippi")
  const {login, url} = data
  const myUser = {login, url}

  return {
    props: {
      myUser
    }
  }
}