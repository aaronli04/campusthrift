import React from 'react'

import { NextPage } from 'next'
import PageContainer from '../components/utility/PageContainer'
import Buy from '../components/Buy/index'
import Head from 'next/head'
import Layout from '../layouts/Layout'

const BuyPage: NextPage = () => {
  return (
    <Layout>
      <PageContainer>
        <Head>
          <title>
            Campus Thrift | Shop
          </title>
        </Head>
        <Buy />
      </PageContainer>
    </Layout>
  )
}

export default BuyPage