import BlogCard from '../components/BlogCard';
import Link from 'next/link';

 const Home = () => {
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

          <BlogCard 
            PostTitle="Design pattern com flutter"
            PostDate="Domingo, 07 de Junho 2020"
            PostDecription={`Será como "olhar sob o capô" do BloC e do Redux. Nesse caso, abordaremos as ervas daninhas da estrutura MVC conforme a implementei. Como seria, vai ficar um pouco complicado.`}
            PostTags={`#flutter, #mobile, #crossplatform`}
          />

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

export default Home;