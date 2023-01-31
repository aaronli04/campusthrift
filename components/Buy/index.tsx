import React from 'react'
import { Flex } from '@chakra-ui/react'
import Listings from './Listings'
import Filter from './Filter'
import currentListings from '../utility/listingsData/currentListings'

const Buy: React.FC = () => {
  return (
    <Flex direction="row" w="100%" gap={12} flex={1}>
      <Filter />
      <Listings listings={currentListings}/>
    </Flex>
  )
}

export default Buy