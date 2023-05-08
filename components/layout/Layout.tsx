import Head from 'next/head'
import Script from 'next/script'

import Footer from './Footer'
import Header from './Header'
import env from '@/config/env'

const Layout = ({ children }: ChildrenProp) => {
  return (
    <>
      <Head>
        <title>{env.name}</title>
        <meta
          name="description"
          content={`Portfolio Website for ${env.name}`}
        />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />

      <Script src="https://s.pageclip.co/v1/pageclip.js" />
    </>
  )
}

export default Layout
