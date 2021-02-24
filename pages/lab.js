import useFetchApi from '../hooks/useFetchApi';
import LabCard from '../components/LabCard';

const Lab = ({ Lab }) => {
  console.log("Lab: ", Lab)
  return (
    <div className="main">
      <div className="content lab">
        
        <h1 className="content__title"> Lab </h1>

        { Lab.map(item => (
          <LabCard 
            title={item.title}
            featuredImg={item.featured_img}
            description={item.description}
            url={item.url}
            index={item.id}
          />
          ))
        }
      </div>
    </div>
  )
}

export async function getStaticProps () {
  
  const data = await useFetchApi('labs')

  return {
    props: {
      Lab: data
    },
    revalidate: 1
  }
}

export default Lab;