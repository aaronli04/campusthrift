import React from 'react'
import Layout from '../../layouts/Layout'
import CreateListing from '../../components/Sell/CreateListing'
import PageContainer from '../../components/utility/PageContainer'
import Head from 'next/head'

const NewListing = () => {
  
  return (
    <Layout>
      <PageContainer>
        <Head>
          <title>
            Campus Thrift | Add Listing
          </title>
        </Head>
        <CreateListing />
      </PageContainer>
    </Layout>

  )
}

export default NewListing