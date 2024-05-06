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

      <Script id="clarity">
        {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "m7y0gy4vmv");
        `}
      </Script>
    </>
  )
}

export default Layout
