import React, { useEffect, useState } from 'react'
import {
    Text
} from '@chakra-ui/react'
import PageContainer from "../../../components/utility/PageContainer";
import Head from "next/head";
import { Item } from "../../../hooks/types"
import Listings from '../../../components/Buy/Listings';
import Layout from '../../../layouts/Layout';
import useBuy from '../../../hooks/useBuy';
import Loading from '../../../components/Loading';

const SearchResults = () => {
    const [pageURL, setPageURL] = useState<string>("")
    const [loaded, setLoaded] = useState<Boolean>(false)
    const [items, setItems] = useState<Item[]>([])
    const { showAllListings } = useBuy();

    useEffect(() => {
        const fetchData = async () => {
            const allListings = await showAllListings();
            setItems(allListings);
            const searchIndex = location.href.search('/search/') + 8;
            setPageURL(location.href.substring(searchIndex).replaceAll("%20", ""));
        }
        fetchData();
    }, []);
    
    useEffect(() => {
        if (pageURL.length !== 0) {
            const filteredItems = items.filter(listing => listing.title.replace(/ /g, '').toLowerCase().includes(pageURL.toLowerCase()));
            setItems(filteredItems);
            setLoaded(true);
        } else {
            setItems([]);
            setLoaded(true);
        }
    }, [pageURL]);

    if (items.length > 0 && pageURL.length != 0 && loaded) {
        return (
            <Layout>
                <PageContainer>
                    <Head>
                        <title>
                            Campus Thrift | Results
                        </title>
                    </Head>
                    <Listings listings={items} />
                </PageContainer>
            </Layout>
        );
    }

    else if (items.length === 0 && pageURL.length != 0 && loaded) {
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
     else {
        return (
            <Loading />
        )
     }
}


export default SearchResults;