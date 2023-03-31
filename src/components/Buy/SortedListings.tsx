import {
    SimpleGrid
} from '@chakra-ui/react'
import React from 'react'
import { Item } from '../../hooks/types';
import Listing from './Listing'

interface Props {
    option: string;
    shownListings: Item[];
  }
  
  const SortedListings: React.FC<Props> = ({ option, shownListings }) => {
    const [listings, setListings] = React.useState<Item[]>(shownListings)
  
    React.useEffect(() => {
      if (option === "Default") {
        setListings(shownListings)
      } else if (option === "High Price") {
        setListings([...listings].sort((a, b) => b.price - a.price))
      } else if (option === "Low Price") {
        setListings([...listings].sort((a, b) => a.price - b.price))
      } else {
        setListings(shownListings)
      }
    }, [option, listings, shownListings])
  
    return (
      <SimpleGrid columns={3} spacing={5}>
        {listings.map((listing, index) => (
          <Listing key={index} listing={listing} />
        ))}
      </SimpleGrid>
    )
  }

  export default SortedListings