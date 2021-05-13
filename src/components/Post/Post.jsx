import React from "react"
import * as style from "./Post.module.scss"

const Post = ({ title, date, excerpt }) => {
  return (
    <article className={style.AppPost}>
      <div className={style.AppPostHeader}>
        <h2>{title}</h2>
        <span>{date}</span>
      </div>
      <span>{excerpt}</span>
    </article>
  )
}

export default Post
