import { VStack, Text, HStack, SimpleGrid } from '@chakra-ui/react';
import React from 'react'

import { Item } from '../../types/item';
import Listing from './Listing'

const currentListings: Item[] = [
    {
        title: 'Yeezy Boost 350 V2',
        seller: 'Aaron',
        condition: 'Gently worn',
        tags: ['Hypebeast'],
        size: '9.5',
        quantityLeft: '6',
        price: '$350',
        delivery: 'none',
        returns: 'no returns',
        type: 'shoe',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURL: 'https://via.placeholder.com/200'
    },
    {
        title: 'Yeezy Boost 350 V2',
        seller: 'Aaron',
        condition: 'Gently worn',
        tags: ['Hypebeast'],
        size: '9.5',
        quantityLeft: '6',
        price: '$350',
        delivery: 'none',
        returns: 'no returns',
        type: 'shoe',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURL: 'https://via.placeholder.com/200'
    },
    {
        title: 'Yeezy Boost 350 V2',
        seller: 'Aaron',
        condition: 'Gently worn',
        tags: ['Hypebeast'],
        size: '9.5',
        quantityLeft: '6',
        price: '$350',
        delivery: 'none',
        returns: 'no returns',
        type: 'shoe',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURL: 'https://via.placeholder.com/200'
    },
    {
        title: 'Yeezy Boost 350 V2',
        seller: 'Aaron',
        condition: 'Gently worn',
        tags: ['Hypebeast'],
        size: '9.5',
        quantityLeft: '6',
        price: '$350',
        delivery: 'none',
        returns: 'no returns',
        type: 'shoe',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURL: 'https://via.placeholder.com/200'
    },
    {
        title: 'Yeezy Boost 350 V2',
        seller: 'Aaron',
        condition: 'Gently worn',
        tags: ['Hypebeast'],
        size: '9.5',
        quantityLeft: '6',
        price: '$350',
        delivery: 'none',
        returns: 'no returns',
        type: 'shoe',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURL: 'https://via.placeholder.com/200'
    },
    
]



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