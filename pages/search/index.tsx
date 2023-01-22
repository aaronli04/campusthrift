import { GetStaticProps } from "next";
import React from "react";
import { HStack, IconButton, Input, Link, SimpleGrid, Text } from '@chakra-ui/react'
import { Item } from "../../types/item";
import currentListings from "../../data";
import PageContainer from "../../components/utility/PageContainer";
import Head from "next/head";
import Listing from "../../components/Buy/Listing";
import { SearchIcon } from "@chakra-ui/icons";

type Props = {
    listings: Item[]
}

const Search = ({ listings }: Props) => {
    const [searchText, setSearchText] = React.useState<string>('')
    const [currentListings, setCurrentListings] = React.useState<Item[]>(listings)

    const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentListings(listings.filter(
            listings => listings.title.toLowerCase().includes(searchText.toLowerCase())
        ))
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            setCurrentListings(listings.filter(
                listings => listings.title.toLowerCase().includes(searchText.toLowerCase())
            ))    
        }
    }


    return (
        <PageContainer>
            <Head>
                <title>
                    Campus Thrift | Search
                </title>
            </Head>
            <Text>Find Anything You Need</Text>
            <HStack
                width='45%'
                spacing={0}
                border='1px solid black'
            >
                <Input placeholder='Search' border='hidden' focusBorderColor='transparent' onChange={handleSearchTextChange} onKeyDown={handleKeyDown} />
                <IconButton
                    variant='ghost'
                    aria-label='Search database'
                    icon={<SearchIcon />}
                    onClick={handleOnClick}
                />
            </HStack>
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
        </PageContainer>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const listings: Item[] = currentListings;
    return { props: { listings } }
}

export default Search