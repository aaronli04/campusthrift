import React from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react'
import { Item } from '../../types/item'
import { GetStaticProps } from 'next'
import Listing from '../../components/Buy/Listing'
import Listings from '../../components/Buy/Listings'

const currentListings: Item[] = [
    {
        title: 'Yeezy Boost 350 V2',
        seller: 'Aaron',
        condition: 'Gently worn',
        tags: ['Shoe', 'Yeezy'],
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius odio ut nibh accumsan, ac cursus dui consectetur. Proin ut posuere lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ac vulputate ex. Duis suscipit ante non nunc iaculis, ut faucibus dolor varius. Fusce in risus erat.'
    },
    {
        title: 'Nike Air Max',
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
        imageURL: 'https://via.placeholder.com/200',
        imageURLList: ['https://via.placeholder.com/200', 'https://via.placeholder.com/175'],
        listingID: '123457',
        views: 1,
        description: 'Really nice shoes, airy, and comfortable'
    },
    {
        title: 'Textbook',
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
        imageURL: 'https://via.placeholder.com/200',
        imageURLList: ['https://via.placeholder.com/200', 'https://via.placeholder.com/175'],
        listingID: '123458',
        description: 'Really nice shoes, airy, and comfortable',
        views: 15
    },
    {
        title: 'Laptop',
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
        imageURL: 'https://via.placeholder.com/200',
        imageURLList: ['https://via.placeholder.com/200', 'https://via.placeholder.com/175'],
        listingID: '123459',
        description: 'Really nice shoes, airy, and comfortable',
        views: 100
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
        imageURL: 'https://via.placeholder.com/200',
        imageURLList: ['https://via.placeholder.com/200', 'https://via.placeholder.com/175'],
        listingID: '123460',
        description: 'Really nice shoes, airy, and comfortable',
        views: 73
    },

]

const itemDetails = (id: string) => {
    return (
        <div>
            <SimpleGrid columns={4} spacing={5}>
                {
                    currentListings.filter(
                        currentListings => currentListings.listingID === id
                    ).map((listing, index) => (
                        <Text key={index}>
                            {listing.title}
                        </Text>
                    ))
                }
            </SimpleGrid>
        </div>
    )
}

export default itemDetails