// import CustomHead from '../components/Head';
import BlogCard from '../components/BlogCard';

const AllPosts = ({Blogs}) => {
  
  console.log(Blogs);

  return (
    <div className="main">
      {/* <CustomHead 
        pageTitle = "Posts || Eugenio Rosario"
      /> */}

      <div className="content">
        { Blogs.map((item, index) => (
          <BlogCard 
            PostTitle={item.title}
            PostDate={item.published_at}
            PostDecription={item.description}
            PostTags={item.categories}
            key={item.id}
            PostId={item.id}
          />
          )) 
        }
      </div>
    </div>
  )
}

export async function getServerSideProps () {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/blogs`)
  const data = await res.json()

  return {
    props: {
      Blogs: data
    },
  }
}

export default AllPosts
