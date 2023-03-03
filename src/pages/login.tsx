import React from 'react'

import { NextPage } from 'next'
import Login from '../components/Login'
import Head from 'next/head'
import NoNavLayout from '../layouts/NoNavLayout'

const LoginPage: NextPage = () => {
  return (
    <NoNavLayout>
      <Head>
        <title>
          Campus Thrift | Login
        </title>
      </Head>
      <Login />
    </NoNavLayout>
  )
}

export default LoginPage