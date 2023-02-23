import React from 'react'

import { NextPage } from 'next'
import PageContainer from '../components/utility/PageContainer'
import Head from 'next/head'
import Layout from '../layouts/Layout'
import Profile from '../components/Profile'

const ProfilePage: NextPage = () => {
  return (
    <Layout>
      <PageContainer>
        <Head>
          <title>
            Campus Thrift | Profile
          </title>
        </Head>
        <Profile />
      </PageContainer>
    </Layout>
  )
}

export default ProfilePage