import useFetchApi from '../../hooks/useFetchApi';
import useFormatDate from '../../hooks/useFormatDate';

 const Blog = ({ blogPost }) => {

  const { title, content, published_at } = blogPost;
  const { formatedDate } = useFormatDate(published_at);

  return (
    <div className="content post">
      <h1
        className="post__title" 
        dangerouslySetInnerHTML={{__html: title}} 
      />

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

  const data = await useFetchApi(`blogs/${context.query.id}`);
  
  return {
    props: { blogPost: data }
  }

}

export default Blog;