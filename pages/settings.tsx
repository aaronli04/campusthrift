import React from 'react'

import { NextPage } from 'next'
import PageContainer from '../components/utility/PageContainer'
import Head from 'next/head'
import Layout from '../layouts/Layout'
import Settings from '../components/Settings'

const SettingsPage: NextPage = () => {
  return (
    <Layout>
      <PageContainer>
        <Head>
          <title>
            Campus Thrift | Settings
          </title>
        </Head>
        <Settings />
      </PageContainer>
    </Layout>
  )
}

export default SettingsPage