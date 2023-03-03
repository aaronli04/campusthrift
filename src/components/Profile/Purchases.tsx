import {
    VStack,
    Text,
    SimpleGrid
} from '@chakra-ui/react'
import React from 'react'
import { UserData } from '../../hooks/types'
import Listing from '../Buy/Listing'

interface Props {
    user: UserData
}

const Purchases: React.FC<Props> = ({ user }) => {
    if (user.listingsPurchased.length !== 0) {
        return (
            <VStack>
                <Text
                    fontSize='2xl'
                    fontWeight='semibold'
                >
                    Items Purchased
                </Text>
                <SimpleGrid columns={4} spacing={5}>
                    {
                        user.listingsSold.map((listing, index) => (
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
                Items Purchased
            </Text>
            <Text
                fontSize='lg'
            >
                No items bought.
            </Text>
        </VStack>
    )
}

export default Purchases