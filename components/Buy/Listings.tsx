import { VStack, Text, HStack, SimpleGrid } from '@chakra-ui/react';
import React from 'react'

import { Item } from '../../types/item';
import Listing from './Listing'

const currentListings: Item[] = [
    {
        title: 'Yeezy Boost 350 V2',
        seller: 'Aaron',
        condition: 'Gently worn',
        size: '9.5',
        quantityLeft: '6',
        price: '$350',
        delivery: 'none',
        returns: 'no returns',
        type: 'shoe',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURL: 'https://via.placeholder.com/200',
        imageURLList: ['https://via.placeholder.com/200', 'https://via.placeholder.com/175'],
        listingID: '123456',
        views: 0,
        category: 'Shoe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius odio ut nibh accumsan, ac cursus dui consectetur. Proin ut posuere lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ac vulputate ex. Duis suscipit ante non nunc iaculis, ut faucibus dolor varius. Fusce in risus erat.'
    },
    {
        title: 'Nike Air Max',
        seller: 'Aaron',
        condition: 'Gently worn',
        size: '9.5',
        quantityLeft: '6',
        price: '$350',
        delivery: 'none',
        returns: 'no returns',
        type: 'shoe',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURL: 'https://via.placeholder.com/200',
        imageURLList: ['https://via.placeholder.com/200', 'https://via.placeholder.com/175'],
        listingID: '123457',
        views: 1,
        category: 'Shoe',
        description: 'Really nice shoes, airy, and comfortable'
    },
    {
        title: 'Textbook',
        seller: 'Aaron',
        condition: 'Gently worn',
        size: '9.5',
        quantityLeft: '6',
        price: '$350',
        delivery: 'none',
        returns: 'no returns',
        type: 'shoe',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURL: 'https://via.placeholder.com/200',
        imageURLList: ['https://via.placeholder.com/200', 'https://via.placeholder.com/175'],
        listingID: '123458',
        category: 'Book',
        description: 'Really nice shoes, airy, and comfortable',
        views: 15
    },
    {
        title: 'Laptop',
        seller: 'Aaron',
        condition: 'Gently worn',
        size: '9.5',
        quantityLeft: '6',
        price: '$350',
        delivery: 'none',
        returns: 'no returns',
        type: 'shoe',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURL: 'https://via.placeholder.com/200',
        imageURLList: ['https://via.placeholder.com/200', 'https://via.placeholder.com/175'],
        listingID: '123459',
        category: 'Computer',
        description: 'Really nice shoes, airy, and comfortable',
        views: 100
    },
    {
        title: 'Yeezy Boost 350 V2',
        seller: 'Aaron',
        condition: 'Gently worn',
        size: '9.5',
        quantityLeft: '6',
        price: '$350',
        delivery: 'none',
        returns: 'no returns',
        type: 'shoe',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURL: 'https://via.placeholder.com/200',
        imageURLList: ['https://via.placeholder.com/200', 'https://via.placeholder.com/175'],
        listingID: '123460',
        category: 'Shoe',
        description: 'Really nice shoes, airy, and comfortable',
        views: 73
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