import { VStack, Text, HStack, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import currentListings from '../../data';

import { Item } from '../../types/item';
import Listing from './Listing'

const Listings: React.FC = () => {
    return (
        <VStack
            alignItems='flex-start'
        >  
            <SimpleGrid columns={4} spacing={5}>
                    {
                        currentListings.map((listing, index) => (
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

export default Listings