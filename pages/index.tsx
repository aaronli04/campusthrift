import type { NextPage } from 'next'
import PageContainer from '../components/utility/PageContainer'
import Home from '../components/Home'
import Head from 'next/head'
import Layout from '../layouts/Layout'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/clientApp';
import NotFound from './404'
import Loading from '../components/Loading'


const HomePage: NextPage = () => {
  const [user, loading, error] = useAuthState(auth)

  if (error) {
    console.log(error);
    return <NotFound />
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <PageContainer>
        <Head>
          <title>
            Campus Thrift
          </title>
        </Head>
        <Home />
      </PageContainer>
    </Layout>
  )
}

export default HomePage