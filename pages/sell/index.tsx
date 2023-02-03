import React from 'react'

import { NextPage } from 'next'
import PageContainer from '../../components/utility/PageContainer'
import Head from 'next/head'
import Sell from '../../components/Sell'
import Layout from '../../layouts/Layout'

const SellPage: NextPage = () => {
  return (
    <Layout>
      <PageContainer>
        <Head>
          <title>
            Campus Thrift | Sell
          </title>
        </Head>
        <Sell />
      </PageContainer>
    </Layout>
  )
}

export default SellPage