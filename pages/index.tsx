import type { NextPage } from 'next'

import PageContainer from '../components/utility/PageContainer'
import Home from '../components/Home'

const HomePage : NextPage = () => {
  return (
    <PageContainer>
      <Home />
    </PageContainer>
  )
}

export default HomePage