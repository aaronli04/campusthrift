import React from 'react'

import {
    HStack,
    Image,
    VStack,
    Text,
    Card,
    Link
} from '@chakra-ui/react';

import { Item } from '../../hooks/types';


interface Props {
    listing: Item;
}

const Listing: React.FC<Props> = ({ listing }) => {
    return (
        <Card
            p={0}
        >
            <Link href={`/listings/${listing.listingID}`}>
                <Image
                        src={listing.photo}
                        roundedTop='md'
                        alt={listing.title}
                        w='100%'
                        minH={200}
                        minW={200}
                        borderWidth={0}
                />
            </Link>
            <VStack
                alignItems='flex-start'
                spacing={0}
                p={2}
            >
                <Text
                    fontSize='sm'
                    fontWeight='bold'
                >
                    {listing.title}
                </Text>
                <HStack
                    pt={2}
                >
                    <Text
                        fontSize='sm'
                    >
                        ${listing.price}
                    </Text>
                </HStack>
            </VStack>
        </Card>

    )
}

export default Listing