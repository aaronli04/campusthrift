import React from 'react'

import { NextPage } from 'next'
import CompleteProfile from '../components/CompleteProfile'
import Head from 'next/head'
import NoNavLayout from '../layouts/NoNavLayout'

const CompleteProfilePage: NextPage = () => {
  return (
    <NoNavLayout>
      <Head>
        <title>
          Campus Thrift
        </title>
      </Head>
      <CompleteProfile />
    </NoNavLayout>
  )
}

export default CompleteProfilePage