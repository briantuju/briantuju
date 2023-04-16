import Head from 'next/head'
import { NextPage } from 'next'
import { Size, useWindowSize } from '@/hooks/useWindowSize'

const Home: NextPage = () => {
  const size: Size = useWindowSize()

  return (
    <>
      <Head>
        <title>Brian Tuju</title>
      </Head>

      <main>
        <h1>Brian Tuju</h1>
        <br />
        <p>
          {size.width}px / {size.height}px
        </p>
      </main>
    </>
  )
}

export default Home
