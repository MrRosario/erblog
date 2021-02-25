import Card from '../components/Card';
import useFetchApi from '../hooks/useFetchApi';
import Link from 'next/link';
import Seo from '../components/Seo';

 const Home = ({ Blogs }) => {
  return (
    <>
      <Seo 
        title='Página Inicial | Eugenio Rosario - Software developer'
        description='Blog e Site pessoal de um desenvolvedor software apaixonado por desenvolver sistemas, e onde compartilha seus conhecimentos sobre programação.'
        currentPage='https://eugeniorosario.com'
      />
      <div className="main">
        <div className="content">
          <article className="introduction">
            <h1>Olá</h1>
            <p>
              Meu nome é Eugénio, apaixonado por desenvolvimento de software,  
              sustentabilidade, e tudo relacionado a tecnologia.
              Acredito que posso melhorar o mundo desenvolvendo coisas.
            </p>
            <p> 
              Tenho um  
              <a 
                href="https://www.youtube.com/channel/UCA4uTaYYxjrvXNvs-SO8HSg" 
                rel="noopener" 
                target="_blank"
                className="btn btn-view-more"
              >
                canal no youtube com conteúdos sobre programação.
              </a>
            </p>
          </article>
          <section className='recent-posts'>
            <h3>Publicações recentes</h3>

            { Blogs.slice(0,2).map( item => (
                <Card 
                  PostTitle={item.title}
                  PostDate={item.published_at}
                  PostDecription={item.description}
                  key={item.id}
                  PostSlug={item.slug}
                  PostId={item.id}
                  PostFeaturedImg={item.featured_image}
                />
              )
            )}
            <Link href="/blog">
              <a className="btn btn-view-more">
                Ver todos os posts
              </a>
            </Link>

          </section>
        </div>
      </div>
    </>
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

export default Home;