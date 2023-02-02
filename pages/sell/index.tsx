import React from 'react'

import { NextPage } from 'next'
import PageContainer from '../../components/utility/PageContainer'
import Head from 'next/head'
import Sell from '../../components/Sell'

const SellPage: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>
          Campus Thrift | Sell
        </title>
      </Head>
      <Sell />
    </PageContainer>
  )
}

export default SellPage