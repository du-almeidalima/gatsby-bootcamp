import { Link } from "gatsby"
import React from "react"
import * as style from "./PostReferences.module.scss"

export const PostReferences = ({ title, slug }) => {
  return (
    <div className={style.PostReferences}>
      <Link to={`/blog/${slug}`}>{title}</Link>
    </div>
  )
}
