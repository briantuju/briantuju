import Head from 'next/head'

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
    </>
  )
}

export default Layout
