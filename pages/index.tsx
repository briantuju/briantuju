import { NextPage } from 'next'

import Container from '@/components/misc/Container'

const Home: NextPage = () => {
  return (
    <div className="bg-white min-h-[70vh]">
      <Container>
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-brand py-8 text-center">
            Brian Tuju
          </h1>
        </div>
      </Container>
    </div>
  )
}

export default Home
