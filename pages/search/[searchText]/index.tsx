import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useEffect, useState } from 'react'
import { HStack, SimpleGrid, Text, VStack, Image, ButtonGroup, IconButton, Box, Button, Icon, Flex, Card, CardHeader, Heading, CardBody, StackDivider, Stack, CardFooter } from '@chakra-ui/react'
import currentListings from "../../../data";
import PageContainer from "../../../components/utility/PageContainer";
import Head from "next/head";
import Listing from "../../../components/Buy/Listing";
import { useRouter } from "next/router";


// export const getStaticPaths: GetStaticPaths = async () => {
//     const paths = currentListings.map((listing) => ({
//         params: { searchText: listing.title.toLowerCase() }
//     }))

//     return { paths, fallback: false }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const searchText = params?.searchText
//     console.log(searchText)
//     const item = currentListings.find((data) => data.title.toLowerCase() === searchText)

//     return { props: { item } }
// }

// const SearchResults = ({ item }: InferGetStaticPropsType<typeof getStaticProps>) => {
//     const [pageURL, setPageURL] = useState("");
//     useEffect(() => {
//         setPageURL(window.location.href);
//     })
//     if (item !== undefined) {
//         return (
//             <PageContainer>
//                 <Head>
//                     <title>
//                         Campus Thrift | Results
//                     </title>
//                 </Head>
//             </PageContainer>
//         );
//     }
// }


const SearchResults = () => {
    const [pageURL, setPageURL] = useState<string>("")
    React.useEffect(() => {
      const searchIndex = location.href.search('/search/') + 8
      setPageURL(location.href.substring(searchIndex).replaceAll("%20",""))
    }, [])

    return (
        <PageContainer>
            <Head>
                <title>
                    Campus Thrift | Results
                </title>
            </Head>
            <SimpleGrid columns={4} spacing={5}>
                    {
                        currentListings.filter(listing => listing.title.replace(/ /g, '').toLowerCase().includes(pageURL.toLowerCase())).map((listing, index) => (
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

export default SearchResults;