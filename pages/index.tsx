import type { NextPage } from 'next'

import PageContainer from '../components/utility/PageContainer'
import Home from '../components/Home'
import Head from 'next/head'

const HomePage : NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>
          Campus Thrift
        </title>
      </Head>
      <Home />
    </PageContainer>
  )
}

export default HomePage