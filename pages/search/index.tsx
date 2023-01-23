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
    searchText: string
}

const Search = ({ searchText }: Props) => {
    return (
        <PageContainer>
            <Head>
                <title>
                    Campus Thrift | Search
                </title>
            </Head>
        </PageContainer>
    );
}

export default Search