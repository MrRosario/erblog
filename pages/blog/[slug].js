import React from 'react';
import useFetchApi from '../../hooks/useFetchApi';
import useFormatDate from '../../hooks/useFormatDate';
import Image from 'next/image'
import dynamic from "next/dynamic";

const Share = dynamic(
  () => {
    return import("../../components/share");
  },
  { ssr: false }
);

const Blog = ({ blogPost }) => {

  const { title, content, published_at, featured_image } = blogPost;
  const { formatedDate } = useFormatDate(published_at);

  return (
    <div className="content post">

      <a className="post_btn-back" href="/blog">
        &#8592; Voltar na listagem
      </a>

      <h1 className="post__title"> { title } </h1>

      <div id="post-details">
        <time className="post__time">
          { formatedDate }
        </time>
        <Share title={title} text={title} />
      </div>
      {
        featured_image &&
        (
          <div className="post__featured-image">
            <Image
              className="image" 
              src={`${featured_image.url}`} 
              alt={featured_image.caption} 
              layout="fill"
            />
          </div>
        )
      }
      <div 
        className="post__content"
        dangerouslySetInnerHTML={{__html: content}}
      />
    </div>
  )
}

export const getServerSideProps = async (context) => {

  const res = await useFetchApi(`blogs?slug=${context.query.slug}`);

  return {
    props: { blogPost: JSON.parse(JSON.stringify( res[0] )) }
  }

}

export default Blog;