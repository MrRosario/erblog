import React from 'react'
import getConfig from 'next/config';

 const Blog = ({ blogPost }) => {

    const { API_URL } = process.env;

    const { 
      title, 
      content, 
      featured_image, 
      updatedAt 
    } = blogPost;
    
  return (
    <div className="content post">
        <h1 dangerouslySetInnerHTML={{__html: title}} />
        
        {/* <time>{updatedAt}</time> */}

        {/* <img
            className="featured_image" 
            src={`${API_URL}/${featured_image.url}`} 
            alt='image'
        /> */}
        <div 
            className="blogpost--content"
            dangerouslySetInnerHTML={{__html: content}}
        />
    </div>
  )

}

const { publicRunTimeConfig } = getConfig();

export async function getServerSideProps (context) {

    const { id } = context.query;
    const { API_URL } = process.env;

    const res = await fetch(`${API_URL}/blogs/${id}`)
    const data = await res.json()
    
    if (!data) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
    }

    return {
      props: {
        blogPost: data
      }
    }
}
export default Blog