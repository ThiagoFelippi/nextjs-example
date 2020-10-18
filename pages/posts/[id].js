import React from 'react';
import style from "../../styles/Post.module.scss"
import { join } from "path"
import { readdirSync, readFileSync } from 'fs';

function Post({title, content, author}) {

  console.log(author)

  return (
    <div className={style.container}>
      <h1 className={style.title}>
        {title}
      </h1>
      <p>
        {content}
      </p>
      <span> {author} </span>
    </div>
  )
}

export const getStaticPaths = () => {
  const posts = readdirSync("posts").map(post => post.split(".")[0])
 
  const paths = posts.map(post => ({
    params: {
      id: post
    }
  }))

  return {
    paths, 
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const {id} = context.params
  const postPath = join("posts", `${id}.json`)
  const fileJSON = readFileSync(postPath, 'utf8')
  const {title, content, author} = JSON.parse(fileJSON)

  return {
    props:
      {title, content, author}
  }
}

export default Post;