import React from 'react'
import {
    SimpleGrid,
    Text,
    VStack
} from "@chakra-ui/react"
import {
    FirebaseUser,
    Item
} from '../../hooks/types'
import Listing from '../Buy/Listing'


interface Props {
    user: FirebaseUser,
    listingsSold: Item[]
}

const PastSales: React.FC<Props> = ({ user, listingsSold }) => {
    if (listingsSold.length !== 0) {
        return (
            <VStack>
                <Text
                    fontSize='2xl'
                    fontWeight='semibold'
                >
                    Listings Sold
                </Text>
                <SimpleGrid columns={4} spacing={5}>
                    {
                        listingsSold.map((listing, index) => (
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

    return (
        <VStack>
            <Text
                fontSize='2xl'
                fontWeight='semibold'
            >
                Listings Sold
            </Text>
            <Text
                fontSize='lg'
            >
                No listings sold.
            </Text>
        </VStack>
    )
}

export default PastSales