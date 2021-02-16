import useFetchApi from '../../hooks/useFetchApi';
import useFormatDate from '../../hooks/useFormatDate';

 const Blog = ({ blogPost }) => {

  const { title, content, published_at } = blogPost;
  const { formatedDate } = useFormatDate(published_at);

  return (
    <div className="content post">

      <a className="post_btn-back" href="/blog">
        &#8592; Voltar na listagem
      </a>

      <h1 className="post__title"> { title } </h1>

      <time className="post__time">
        { formatedDate }
      </time>

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