import Card from '../components/Card';
import useFetchApi from '../hooks/useFetchApi';
import Link from 'next/link';

 const Home = ({ Blogs }) => {
  return (
    <div className="main">
      <div className="content">
        <article className="introduction">
          <h1>Ola</h1>
          <p>
            Meu nome é Eugénio, apaixonado por desenvolvimento de software,  
            energia renovável, e tudo relacionado a tecnologia.
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
          <h3>Ultimas do blog</h3>

          { Blogs.slice(0,2).map( item => (
              <Card 
                PostTitle={item.title}
                PostDate={item.published_at}
                PostDecription={item.description}
                key={item.id}
                PostSlug={item.slug}
                PostId={item.id}
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