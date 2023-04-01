import React from 'react'
import {
    SimpleGrid,
    Text,
    VStack
} from "@chakra-ui/react"
import Listing from '../Buy/Listing'
import {
    FirebaseUser,
    Item
} from '../../hooks/types'

interface Props {
    user: FirebaseUser
    activeListings: Item[]
}

const ForSale: React.FC<Props> = ({ user, activeListings }) => {

    if (activeListings.length !== 0) {
        return (
            <VStack>
                <Text
                    fontSize='2xl'
                    fontWeight='semibold'
                >
                    For Sale
                </Text>
                <SimpleGrid columns={4} spacing={5}>
                    {
                        activeListings.map((listing, index) => (
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
                For Sale
            </Text>
            <Text
                fontSize='lg'
            >
                No listings posted.
            </Text>
        </VStack>
    )
}

export default ForSale