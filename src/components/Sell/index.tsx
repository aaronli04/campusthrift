import React, { useEffect, useState } from 'react'
import {
  Flex, VStack
} from '@chakra-ui/react'
import ProfileBar from './ProfileBar'
import users from '../utility/data/users/userData'
import ForSale from './ForSale'
import PastSales from './PastSales'
import useAuth from '../../hooks/useAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/clientApp'
import { UserData } from '../../hooks/types'
import defaultData from '../utility/data/defaultUserData'

const Sell: React.FC = () => {
  const [user, loading, error] = useAuthState(auth)
  const [userData, setUserData] = useState<UserData>(defaultData)
  const { createUser } = useAuth();

  useEffect(() => {
      if (user) {
        createUser(user).then(response => {
          if (response !== null) {
            setUserData(response);
          }
        })
      }
  })

  return (
    <Flex direction="row" w="100%" gap={12} flex={1}>
      <VStack gap={5}>
        <ProfileBar user={userData} />
        <VStack spacing={20}>
          <ForSale user={userData} />
          <PastSales user={userData} />
        </VStack>
      </VStack>
    </Flex>
  )
}

export default Sell