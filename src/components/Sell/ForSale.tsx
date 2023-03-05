import React from 'react'
import {
    SimpleGrid,
    Text,
    VStack
} from "@chakra-ui/react"
import Listing from '../Buy/Listing'
import { UserData } from '../../hooks/types'

interface Props {
    user: UserData
}

const ForSale: React.FC<Props> = ( { user } ) => {

    if (user.listingsPosted.length !== 0) {
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
                        user.listingsPosted.map((listing, index) => (
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