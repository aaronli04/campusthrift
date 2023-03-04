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
import useAuth from '../hooks/useAuth'

const HomePage: NextPage = () => {
  const [user, loading, error] = useAuthState(auth)
  const router = useRouter();
  const { createUser } = useAuth();

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
    createUser(user).then(response => {if (response !== null) {
      if (response.school === "") {
        router.push('/completeprofile')
      }
    }});
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