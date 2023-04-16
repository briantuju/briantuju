import Head from 'next/head'

import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: ChildrenProp) => {
  return (
    <>
      <Head>
        <title>Brian Tuju</title>
        <meta name="description" content="Portfolio Website for Brian Tuju" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
