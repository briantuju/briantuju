import { NextPage } from 'next'

import { Size, useWindowSize } from '@/hooks/useWindowSize'
import Container from '@/components/misc/Container'

const Home: NextPage = () => {
  const size: Size = useWindowSize()

  return (
    <>
      <Container>
        <h1>Brian Tuju</h1>
        <br />
        <p>
          {size.width}px / {size.height}px
        </p>
      </Container>
    </>
  )
}

export default Home
