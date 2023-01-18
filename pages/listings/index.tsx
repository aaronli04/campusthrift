import { GetStaticProps } from "next";
import React from "react";
import { Link, SimpleGrid, Text } from '@chakra-ui/react'
import { Item } from "../../types/item";
import currentListings from "../../data";

type Props = {
    listings: Item[]
}

const listings = ({ listings }: Props) => {
    return (
        <SimpleGrid columns={4} spacing={5}>
            {
                listings.map((listing, index) => (
                    <Link key={index} href={`/listings/${listing.listingID}`}>
                        {listing.title}
                    </Link>
                ))
            }
        </SimpleGrid>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const listings: Item[] = currentListings;
    return { props: { listings } }
}

export default listings;