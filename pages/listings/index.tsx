import { GetStaticProps } from "next";
import React from "react";
import { Link, SimpleGrid, Text } from '@chakra-ui/react'
import { Item } from "../../types/item";
import currentListings from "../../data";
import PageContainer from "../../components/utility/PageContainer";
import Head from "next/head";

type Props = {
    listings: Item[]
}

const Listings = ({ listings }: Props) => {
    return (
        <PageContainer>
            <Head>
                <title>
                    Campus Thrift | Listings
                </title>
            </Head>
            <SimpleGrid columns={4} spacing={5}>
                {
                    listings.map((listing, index) => (
                        <Link key={index} href={`/listings/${listing.listingID}`}>
                            {listing.title}
                        </Link>
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

export default Listings;