import React from 'react'
import {
    SimpleGrid,
    Text,
    VStack
} from "@chakra-ui/react"
import { UserData } from '../../types/user'
import Listing from '../Buy/Listing'

interface Props {
    user: UserData
}

const PastSales: React.FC<Props> = ({ user }) => {
    if (user.listingsSold.length !== 0) {
        return (
            <VStack>
                <Text>
                    Listings Sold
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
            <Text>
                Listings Sold
            </Text>
            <Text>
                No listings sold.
            </Text>
        </VStack>
    )
}

export default PastSales