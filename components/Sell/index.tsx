import React from 'react'
import {
  Flex, VStack
} from '@chakra-ui/react'
import ProfileBar from './ProfileBar'
import users from '../utility/userData'
import ForSale from './ForSale'
import PastSales from './PastSales'

const Sell: React.FC = () => {
  return (
    <Flex direction="row" w="100%" gap={12} flex={1} justifyContent="center">
      <VStack>
        <ProfileBar user={users[0]} />
        <ForSale user={users[0]}/>
        <PastSales user={users[0]}/>
      </VStack>
    </Flex>
  )
}

export default Sell