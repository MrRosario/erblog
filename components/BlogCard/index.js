import React from 'react'
import styles from '../../styles/BlogCard.module.css'

 const BlogCard = ({
    PostTitle,
    PostDate,
    PostDecription,
    PostTags
 }) => {


  return (
    <div className={`card ${styles.blogCard}`}>
        <h1 className="title">
            { PostTitle }
        </h1>
        <time className="title">
            { PostDate }
        </time>
        <h2 className="description">
            { PostDecription }
        </h2>
        <div className="tags">
            { PostTags }
        </div>
    </div>
  )

}

export default BlogCard