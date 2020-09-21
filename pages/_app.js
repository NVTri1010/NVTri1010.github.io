import Head from 'next/head'

import { ErrorBoundary } from 'components'

import '../styles/globals.css'
import '../styles/syntax.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NVTri1010.github.io</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  )
}

export default MyApp
