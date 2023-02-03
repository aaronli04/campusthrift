import type { NextPage } from 'next'

import PageContainer from '../components/utility/PageContainer'
import Home from '../components/Home'
import Head from 'next/head'
import Layout from '../layouts/Layout'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <PageContainer>
        <Head>
          <title>
            Campus Thrift
          </title>
        </Head>
        <Home />
      </PageContainer>
    </Layout>
  )
}

export default HomePage