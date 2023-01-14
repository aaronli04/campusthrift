import React from 'react'

import { HStack, Image, VStack, Text, Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';

import { Item } from '../../types/item';
import Link from 'next/link';


interface Props {
    listing: Item;
}

const Listing: React.FC<Props> = ({ listing }) => {
    return (
        <Card
            p={0}
        >
            <Link href='/'>
                <Image
                    src={listing.imageURL}
                    roundedTop='md'
                    w='100%'
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
                <Text
                    fontSize='sm'
                >
                    {listing.tags}
                </Text>
                <HStack
                    pt={2}
                >
                    <Text
                        fontSize='sm'
                    >
                        {listing.price}
                    </Text>
                </HStack>
            </VStack>
        </Card>

    )
}

export default Listing