import React from 'react'
import { Flex } from '@chakra-ui/react'
import ProfileBar from './ProfileBar'
import users from '../utility/userData'

const Sell: React.FC = () => {
  return (
    <Flex direction="row" w="100%" gap={12} flex={1} justifyContent="center">
      <ProfileBar user={users[0]}/>
    </Flex>
  )
}

export default Sell