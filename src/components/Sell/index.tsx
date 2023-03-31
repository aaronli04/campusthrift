import React, { useEffect, useState } from 'react'
import {
  Flex, 
  VStack
} from '@chakra-ui/react'
import ProfileBar from './ProfileBar'
import ForSale from './ForSale'
import PastSales from './PastSales'
import useAuth from '../../hooks/useAuth'
import { FirebaseUser } from '../../hooks/types'
import defaultData from '../utility/data/defaultFirebaseUser'

const Sell: React.FC = () => {
  const [userData, setUserData] = useState<FirebaseUser>(defaultData)
  const { auth, createUser } = useAuth();

  useEffect(() => {
    if (auth) {
      createUser(auth).then(response => {
        if (response !== null) {
          setUserData(response);
        }
      })
    }
  }, [])

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