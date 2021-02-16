import BlogCard from '../components/BlogCard';
import useFetchApi from '../hooks/useFetchApi';

const AllPosts = ({Blogs}) => {
  
  return (
    <div className="main">
      <div className="content">
        { Blogs.map( item => (
            <BlogCard 
              PostTitle={item.title}
              PostDate={item.published_at}
              PostDecription={item.description}
              key={item.id}
              PostSlug={item.slug}
              PostId={item.id}
            />
        )) 
      }
      </div>
    </div>
  )
}

export async function getStaticProps () {
  
  const data = await useFetchApi('blogs')

  return {
    props: {
      Blogs: data
    },
    revalidate: 1
  }
}

export default AllPosts
