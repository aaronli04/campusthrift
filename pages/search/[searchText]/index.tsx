import React, { useState } from 'react'
import {
    SimpleGrid,
    Text
} from '@chakra-ui/react'
import currentListings from "../../../components/utility/itemData";
import PageContainer from "../../../components/utility/PageContainer";
import Head from "next/head";
import Listing from "../../../components/Buy/Listing";
import { Item } from "../../../types/item";

const SearchResults = () => {
    const [pageURL, setPageURL] = useState<string>("")
    const [listings, setListings] = useState<Item[]>(currentListings)

    React.useEffect(() => {
        const searchIndex = location.href.search('/search/') + 8
        setPageURL(location.href.substring(searchIndex).replaceAll("%20", ""))
    }, [])

    React.useEffect(() => {
        setListings(currentListings.filter(listing => listing.title.replace(/ /g, '').toLowerCase().includes(pageURL.toLowerCase())))
    }, [pageURL])

    if (listings.length > 0 && pageURL.length != 0) {
        return (
            <PageContainer>
                <Head>
                    <title>
                        Campus Thrift | Results
                    </title>
                </Head>
                <SimpleGrid columns={4} spacing={5}>
                    {
                        listings.filter(listing => listing.title.replace(/ /g, '').toLowerCase().includes(pageURL.toLowerCase())).map((listing, index) => (
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

    else if (listings.length === 0 && pageURL.length != 0) {
        return (
            <PageContainer>
                <Text fontSize="2xl">
                    There are no listings for your search
                </Text>
            </PageContainer>
        )
    }
}


export default SearchResults;