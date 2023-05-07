import Image from 'next/image'
import { NextPage } from 'next'

import myImage from '/public/img/me.jpg'
import Container from '@/components/misc/Container'

const Home: NextPage = () => {
  return (
    <div
      className="bg-white xl:min-h-[70vh] md:bg-hero-bg"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <div className="pt-6 md:pt-0 grid grid-cols-1 md:grid-cols-2 items-center min-h-[70vh] md:min-h-[400px]">
          <h1 className="font-bold text-center md:text-left self-start md:self-center text-3xl lg:text-4xl text-brand order-2 md:order-1 leading-normal md:leading-tight xl:leading-snug">
            A web engineer with a passion for transforming problems into
            solutions, one line of code at a time
          </h1>

          <div className="h-full overflow-hidden relative md:order-2 flex items-center justify-center">
            <Image
              src={myImage}
              alt="My Photo"
              className="object-cover rounded-3xl"
              width={250}
              height={250}
              quality={100}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
