import Head from 'next/head'
import { NextPage } from 'next'

import Container from '@/components/misc/Container'
import env from '@/config/env'

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile | {env.name}</title>
      </Head>

      <Container>
        <h1>Profile</h1>
      </Container>
    </>
  )
}

export default Profile
