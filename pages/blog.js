import Card from '../components/Card';
import useFetchApi from '../hooks/useFetchApi';

const AllPosts = ({Blogs}) => {
  
  return (
    <div className="main">
      <div className="content">
        { Blogs.map( item => (
          <Card 
            key={item.id}
            PostTitle={item.title}
            PostDate={item.published_at}
            PostDecription={item.description}
            PostSlug={item.slug}
            PostId={item.id}
            PostFeaturedImg={item.featured_image}
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
