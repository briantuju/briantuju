import Head from 'next/head'
import { NextPage } from 'next'

import Container from '@/components/misc/Container'
import env from '@/config/env'

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects | {env.name}</title>
      </Head>

      <Container>
        <h1>Projects</h1>
      </Container>
    </>
  )
}

export default Projects
