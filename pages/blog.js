import BlogCard from '../components/BlogCard';
import useFetchApi from '../hooks/useFetchApi';
import useFormatDate from '../hooks/useFormatDate';

const AllPosts = ({Blogs}) => {
  
  return (
    <div className="main">
      <div className="content">
        { Blogs.map( item => {
          
            const { formatedDate } = useFormatDate(item.published_at)
            console.log("BlogDate: ", formatedDate);

            return(
              <BlogCard 
                PostTitle={item.title}
                PostDate={item.published_at}
                PostDecription={item.description}
                key={item.id}
                slug={item.slug}
                PostId={item.id}
              />
            )
          }) 
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
