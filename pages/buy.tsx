import React from 'react'

import { NextPage } from 'next'
import PageContainer from '../components/utility/PageContainer'
import Buy from '../components/Buy/index'
import Head from 'next/head'
import { useRouter } from 'next/router'

const BuyPage: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>
          Campus Thrift | Shop
        </title>
      </Head>
      <Buy />
    </PageContainer>
  )
}

export default BuyPage