import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useState } from 'react'
import { HStack, SimpleGrid, Text, VStack, Image, ButtonGroup, IconButton, Box, Button, Icon, Flex, Card, CardHeader, Heading, CardBody, StackDivider, Stack, CardFooter } from '@chakra-ui/react'
import currentListings from "../../../data";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import PageContainer from "../../../components/utility/PageContainer";
import Head from "next/head";
import Listing from "../../../components/Buy/Listing";


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = currentListings.map((listing) => ({
        params: { searchText: listing.title.toLowerCase() }
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const searchText = params?.searchText
    console.log(searchText)
    const item = currentListings.find((data) => data.title.toLowerCase() === searchText)

    return { props: { item } }
}

const SearchResults = ({ item }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (item !== undefined) {
        return (
            <PageContainer>
                <Head>
                    <title>
                        Campus Thrift | {item.title}
                    </title>
                </Head>
                <SimpleGrid columns={4} spacing={5}>
                    {
                        currentListings.filter(listings => listings.title.toLowerCase().includes(item.title.toLowerCase())).map((listing, index) => (
                            <Listing
                                key={index}
                                listing={listing}
                            />
                        ))
                    }
                </SimpleGrid>
            </PageContainer>
        );
    }
}

export default SearchResults;