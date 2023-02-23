import type { NextPage } from 'next'
import PageContainer from '../components/utility/PageContainer'
import Home from '../components/Home'
import Head from 'next/head'
import Layout from '../layouts/Layout'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/clientApp';
import NotFound from './404'
import Loading from '../components/Loading'
import { useRouter } from 'next/router'


const HomePage: NextPage = () => {
  const [user, loading, error] = useAuthState(auth)
  const router = useRouter();

  if (error) {
    console.log(error);
    return <NotFound />
  }

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    router.push('/login')
  }

  if (user) {
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

  return <Loading />
}

export default HomePage