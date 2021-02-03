import React from 'react'
import styles from '../../styles/BlogCard.module.css'
import Link from 'next/link';

 const BlogCard = ({
    PostTitle,
    PostDate,
    PostDecription,
    PostTags,
    PostId
 }) => {

    
  return (
    <div className={`card ${styles.blogCard}`}>
        <h1 className="title">
            { PostTitle }
        </h1>
        <time className="title">
            { PostDate }
        </time>

        <Link href='/blog/[id]' as={`blog/${PostId}`}>
            <a>
                <h2 className="description">
                    { PostDecription }
                </h2>
            </a>
        </Link>
        
        <div className="tags">
            { PostTags.map((item, index) => <span key={index}> #{item.categorieName} </span> )}
        </div>
    </div>
  )

}

export default BlogCard