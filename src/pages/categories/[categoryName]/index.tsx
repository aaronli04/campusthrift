import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import currentListings from "../../../components/utility/data/listingsData/currentListings";
import categories from "../../../components/utility/data/categoryData";
import PageContainer from "../../../components/utility/PageContainer";
import Head from "next/head";
import { Item } from "../../../hooks/types";
import Filter from "../../../components/Buy/Filter";
import Listings from "../../../components/Buy/Listings";
import Layout from "../../../layouts/Layout";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = categories.map((category) => ({
        params: { categoryName: category }
    }))
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const categoryName = params?.categoryName
    return { props: { categoryName } }
}

const CategoryListings = ({ categoryName }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [shownListings, setShownListings] = React.useState<Item[]>(currentListings)
    const [loaded, setLoaded] = React.useState<Boolean>(false)

    React.useEffect(() => {
        setShownListings(currentListings.filter(listing => listing.category.includes(categoryName)))
        setLoaded(true)
    }, [categoryName])

    if (shownListings.length != 0 && loaded) {
        return (
            <Layout>
                <PageContainer>
                    <Head>
                        <title>
                            Campus Thrift | Results
                        </title>
                    </Head>
                    <Flex direction="row" w="100%" gap={12} flex={1}>
                        <Filter />
                        <Listings listings={shownListings} />
                    </Flex>
                </PageContainer>
            </Layout>
        );
    }

    if (shownListings.length == 0 && loaded) {
        return (
            <Layout>
                <PageContainer>
                    <Head>
                        <title>
                            Campus Thrift | Results
                        </title>
                    </Head>
                    <Text fontSize="2xl">
                        There are no listings in this category
                    </Text>
                </PageContainer>
            </Layout>
        )
    }
}

export default CategoryListings;