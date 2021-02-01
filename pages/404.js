import React from 'react';
import Link from 'next/link';

 const NotFOund = () => {

  return(
      <div className="notFound">
        <h2>
            Pagina não encontrada navegue para 
            <Link href="/">
                <a> Home</a>
            </Link>
        </h2>
      </div>
  ) 
}

export default NotFOund;