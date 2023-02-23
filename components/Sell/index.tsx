import React from 'react'
import {
  Flex, VStack
} from '@chakra-ui/react'
import ProfileBar from './ProfileBar'
import users from '../utility/data/userData'
import ForSale from './ForSale'
import PastSales from './PastSales'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/clientApp'
import router from 'next/router'

const Sell: React.FC = () => {
  const [user, loading, error] = useAuthState(auth)

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <Flex direction="row" w="100%" gap={12} flex={1} justifyContent="center">
      <VStack>
        <ProfileBar user={users[0]} />
        <VStack spacing={20}>
          <ForSale user={users[0]} />
          <PastSales user={users[0]} />
        </VStack>
      </VStack>
    </Flex>
  )
}

export default Sell