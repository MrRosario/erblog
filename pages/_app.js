import React from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }

  }, [router.events])

  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export function reportWebVitals(metric) {
  if (metric.label === 'custom') {
    console.log(metric);
  }
}

export default MyApp