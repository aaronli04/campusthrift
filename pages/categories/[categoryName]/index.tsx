import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import currentListings from "../../../components/utility/itemData";
import categories from "../../../components/utility/categoryData";
import PageContainer from "../../../components/utility/PageContainer";
import Head from "next/head";
import Listing from "../../../components/Buy/Listing";


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

const Listings = ({ categoryName }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <PageContainer>
            <Head>
                <title>
                    Campus Thrift | Results
                </title>
            </Head>
            <SimpleGrid columns={4} spacing={5}>
                    {
                        currentListings.filter(listing => listing.category.includes(categoryName)).map((listing, index) => (
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

export default Listings;