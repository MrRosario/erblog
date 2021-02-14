import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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
