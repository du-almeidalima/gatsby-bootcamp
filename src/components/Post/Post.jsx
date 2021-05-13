import React from "react"
import { Link } from "gatsby"
import * as style from "./Post.module.scss"

const Post = ({ title, date, excerpt, slug }) => {
  return (
    <article className={style.AppPost}>
      <div className={style.AppPostHeader}>
        <Link className={style.AppPostLink} to={`./${slug}`}>{title}</Link>
      </div>
      <small>{date}</small>
      <div style={{height: '10px'}}/>
      <p>{excerpt}</p>
    </article>
  )
}

export default Post
