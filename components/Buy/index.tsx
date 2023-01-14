import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Listings from './Listings'
import Filter from './Filter'

const Buy : React.FC = () => {
  return (
    <Flex direction="row" w="100%" gap={12} flex={1} justifyContent="center">
      <Filter />
      <Listings />
    </Flex>
  )
}

export default Buy