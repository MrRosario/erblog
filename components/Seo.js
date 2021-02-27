import Head from 'next/head';

const Seo = ({ title, description, currentPage }) => (      

  <Head>
    <title>{title}</title>
    <meta charSet="UTF-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta httpEquiv="Cache-Control" content="public,max-age=1800,max-stale,stale-while-revalidate=86400,stale-if-error=259200" rem="max-age=30minutes" />
    <meta name="theme-color" content="#000000" />
    <meta name="robots" content="index, follow" />
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={description} />
    <meta property="og:site_name" content="Eugenio Rosario || Web e Mobile" />
    <meta property="og:url" content={currentPage} />  
    <meta property="og:image" content="/eugeniorosario_ico.png" />  
    <meta name="twitter:image" content="/eugeniorosario_ico.png" />  
    <meta name="twitter:card" content="summary" /> 
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content={currentPage} />
    <link rel="icon" type="image/png" href="/eugeniorosario_ico.png" />
    <link rel="apple-touch-icon" href="/eugeniorosario_ico.png" />
    <link rel="shortcut icon" href="/eugeniorosario_ico.png"/>
    <link rel="icon" href="/eugeniorosario_ico.png"/>
    <link rel="apple-touch-icon" href="/eugeniorosario_ico.png" />
    <link rel="apple-touch-startup-image" href="/eugeniorosario_ico.png" />
    <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="msapplication-navbutton-color" content="#000000" /> 
    <link rel="canonical" href={currentPage} />
  </Head>

)
export default Seo