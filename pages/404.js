import Link from 'next/link';
import Seo from '../components/Seo';

 const NotFOund = () => {

  return(
    <>
      <Seo 
        title='Página não encontrada | Eugenio Rosario - Software developer'
        description='Blog e Site pessoal de um desenvolvedor software apaixonado por desenvolver sistemas, e onde compartilha seus conhecimentos sobre programação.'
        currentPage='https://eugeniorosario.com/404'
      />
      <div className="not-found">
        <h2>
          Pagina não encontrada, por favor volte para 
          <Link href="/">
              <a> Home</a>
          </Link>
        </h2>
      </div>
    </>
  ) 
}

export default NotFOund;