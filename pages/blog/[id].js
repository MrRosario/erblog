import getConfig from 'next/config';

const { publicRunTimeConfig } = getConfig();
const { API_URL } = process.env;

export const getStaticPaths = async () => {
 
  const res = await fetch(`${API_URL}/blogs`)
  const data = await res.json();

  const paths = data.map(ninja => {
    return{
      params: { id: ninja.id.toString() }
    }
  })

  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {

  const id = context.params.id;

  const res = await fetch(`${API_URL}/blogs/${id}`);
  const data = await res.json();
  
  return {
    props: { blogPost: data }
  }
}

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

export default Blog;