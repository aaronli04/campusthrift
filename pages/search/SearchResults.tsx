import React from 'react'
import { SimpleGrid, Text, VStack } from '@chakra-ui/react'
import currentListings from '../../data'
import Listing from '../../components/Buy/Listing'

type Props = {
    searchText: string
}

const SearchResults : React.FC<Props> = ({searchText}) => { 

    return (
        <VStack>
            <SimpleGrid columns={4} spacing={5}>
                {
                    currentListings.filter(listings => listings.title.toLowerCase().includes(searchText.toLowerCase())).map((listing, index) => (
                        <Listing
                            key={index}
                            listing={listing}
                        />
                    ))
                }
            </SimpleGrid>
        </VStack>
    )
}

export default SearchResults