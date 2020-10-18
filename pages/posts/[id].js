import React from 'react';
import style from "../../styles/Post.module.scss"

function Post() {

  return (
    <div className={style.container}>
      <h1 className={style.title}>
        ola
      </h1>
    </div>
  )
}

export const getStaticPaths = () => {

  return {
    paths: [
      { 
        params: {
          id: "ola"
        }
      }
    ],
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const {id} = context.params

  return {
    props: {
      id
    }
  }
}

export default Post;