import React from 'react'

import { NextPage } from 'next'
import Head from 'next/head'
import NoNavLayout from '../layouts/NoNavLayout'
import SignUp from '../components/SignUp'

const SignUpPage: NextPage = () => {
  return (
    <NoNavLayout>
      <Head>
        <title>
          Campus Thrift | Sign Up
        </title>
      </Head>
      <SignUp />
    </NoNavLayout>
  )
}

export default SignUpPage