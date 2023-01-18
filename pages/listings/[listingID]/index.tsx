import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useState } from 'react'
import { SimpleGrid, Text, VStack } from '@chakra-ui/react'
import currentCategories from "../../../data";
import currentListings from "../../../data";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = currentListings.map((listing) => ({
        params: { listingID: listing.listingID }
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const listingID = params?.listingID
    const item = currentListings.find((data) => data.listingID === listingID)

    return { props: { item } }
}

const listings = ({ item }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <VStack>
            <SimpleGrid columns={4} spacing={5}>
                {
                    <VStack>
                        <Text>
                            {item.title}
                        </Text>
                        <Text>
                            {item.condition}
                        </Text>
                    </VStack>
                }
            </SimpleGrid>
        </VStack>
    );
}

export default listings;