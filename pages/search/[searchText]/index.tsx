import React, { useState } from 'react'
import {
    Text
} from '@chakra-ui/react'
import currentListings from "../../../components/utility/listingsData/currentListings";
import PageContainer from "../../../components/utility/PageContainer";
import Head from "next/head";
import { Item } from "../../../hooks/types";
import Listings from '../../../components/Buy/Listings';
import Layout from '../../../layouts/Layout';

const SearchResults = () => {
    const [pageURL, setPageURL] = useState<string>("")
    const [shownListings, setShownListings] = useState<Item[]>(currentListings)
    const [loaded, setLoaded] = useState<Boolean>(false)

    React.useEffect(() => {
        const searchIndex = location.href.search('/search/') + 8
        setPageURL(location.href.substring(searchIndex).replaceAll("%20", ""))
    }, [])

    React.useEffect(() => {
        if (pageURL.length !== 0) {
            setShownListings(shownListings.filter(listing => listing.title.replace(/ /g, '').toLowerCase().includes(pageURL.toLowerCase())))
            setLoaded(true)
        }
    }, [pageURL])

    if (shownListings.length > 0 && pageURL.length != 0 && loaded) {
        return (
            <Layout>
                <PageContainer>
                    <Head>
                        <title>
                            Campus Thrift | Results
                        </title>
                    </Head>
                    <Listings listings={shownListings} />
                </PageContainer>
            </Layout>
        );
    }

    else if (shownListings.length === 0 && pageURL.length != 0 && loaded) {
        return (
            <Layout>
                <PageContainer>
                    <Text fontSize="2xl">
                        There are no listings for your search
                    </Text>
                </PageContainer>
            </Layout>
        )
    }
}


export default SearchResults;