import {
    SimpleGrid
} from '@chakra-ui/react'
import React from 'react'
import { Item } from '../../types/item';
import currentListings from '../utility/itemData'
import Listing from './Listing'

interface Props {
    option: string;
}

const SortedListings: React.FC<Props> = ({ option }) => {
    const[listings, setListings] = React.useState<Item[]>(currentListings)
    React.useEffect(() => {
        if (option === "Default") {
            setListings(currentListings)
        }
        else if (option === "Trending") {
            setListings([...listings].sort((a, b) => {
                if (a.views !== b.views) {
                  return b.views - a.views
                } else {
                    return b.views
                }
            }))
        }
        else if (option === "High Price") {
            setListings([...listings].sort((a, b) => {
                if (a.price !== b.price) {
                  return parseInt(b.price) - parseInt(a.price)
                } else {
                    return parseInt(b.price)
                }
            }))
        }
        else if (option === "Low Price") {
            setListings([...listings].sort((a, b) => {
                if (a.price !== b.price) {
                  return parseInt(a.price) - parseInt(b.price)
                } else {
                    return parseInt(b.price)
                }
            }))
        }
        else {
            setListings(currentListings)
        }
    }, [option])

    return (
        <SimpleGrid columns={4} spacing={5}>
            {
                listings.map((listing, index) => (
                    <Listing
                        key={index}
                        listing={listing}
                    />
                ))
            }
        </SimpleGrid>
    )
}

export default SortedListings