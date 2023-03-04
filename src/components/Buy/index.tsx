import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import Listings from './Listings'
import Filter from './Filter'
import currentListings from '../utility/data/listingsData/currentListings'
import useBuy from '../../hooks/useBuy'
import { Item } from '../../hooks/types'

const Buy: React.FC = () => {

  const [ items, setItems ] = useState<Item[]>(currentListings); 
  const { showAllListings } = useBuy();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setItems(await showAllListings());
  //   }
  //   fetchData();
  // }, [])
  return (
    <Flex direction="row" w="100%" gap={12} flex={1}>
      <Filter />
      <Listings listings={items}/>
    </Flex>
  )
}

export default Buy