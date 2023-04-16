import Head from 'next/head'

import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }: ChildrenProp) => {
  return (
    <>
      <Head>
        <title>Brian Tuju</title>
        <meta name="description" content="Portfolio Website for Brian Tuju" />
      </Head>

      <Navigation />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
