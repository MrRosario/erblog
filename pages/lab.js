import useFetchApi from '../hooks/useFetchApi';
import LabCard from '../components/LabCard';
import Seo from '../components/Seo';

const Lab = ({ Lab }) => {
  
  return (
    <>
      <Seo 
        title='Portfólio | Eugenio Rosario - Software developer'
        description='Blog e Site pessoal de um desenvolvedor software apaixonado por desenvolver sistemas, e onde compartilha seus conhecimentos sobre programação.'
        currentPage='https://eugeniorosario.com/lab'
      />
      <div className="main">
        <div className="content lab">
          
          <h1 className="content__title"> Portfólio </h1>

          { Lab.map(item => (
            <LabCard 
              title={item.title}
              featuredImg={item.featured_img}
              description={item.description}
              url={item.url}
              key={item.id}
            />
            ))
          }
        </div>
      </div>
    </>
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