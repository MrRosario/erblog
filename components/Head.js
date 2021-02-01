import React from 'react'
import Head from 'next/head'

const customHead = ({ pageTitle }) => ( 
      <Head>
        <title>{ pageTitle }</title>
        <meta property="og:title" content={ pageTitle } />
        <meta property="og:description" content="Site pessoal e blog de um rapaz apaixonado por criar tecnologia." />
        <meta name="Description" content="Site pessoal e blog de um rapaz apaixonado por criar tecnologia." />
        <meta name="Keywords" content="Eugenio Rosario, Programação, Tecnologia, programming, Web development, blog" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />

        <meta property="og:url" content="https:eugeniorosario.me" />
        <meta property="og:image" content="/icons/eugeniorosario_badge.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@eugeniorosario" />
        <meta name="twitter:title" content={ pageTitle } />
        <meta name="twitter:description" content="Site pessoal e blog de um rapaz apaixonado por criar tecnologia." />
        <meta name="twitter:image:src" content="/icons/eugeniorosario_badge.png" />
        <meta name="twitter:domain" content="https://www.eugeniorosario.me" />
        <link rel="shortcut icon" href="/icons/eugeniorosario_ico.png"/>
        <link rel="icon" href="/icons/eugeniorosario_ico.png"/> 
        <link rel="apple-touch-icon" href="/icons/eugeniorosario_ico.png" />
        <link rel="apple-touch-startup-image" href="/icons/eugeniorosario_ico.png" /> 
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-navbutton-color" content="#ffffff" />
      </Head>
)

export default customHead