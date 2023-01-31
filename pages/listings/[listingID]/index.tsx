import {
    GetStaticPaths,
    GetStaticProps,
    InferGetStaticPropsType
} from "next";
import React from 'react'
import {
    HStack,
    Text,
    VStack,
    Image,
    Box,
    Button,
    Card,
    CardHeader,
    Heading,
    CardBody,
    StackDivider,
    Stack,
    CardFooter
} from '@chakra-ui/react'
import currentListings from "../../../components/utility/listingsData/currentListings";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import PageContainer from "../../../components/utility/PageContainer";
import Head from "next/head";


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = currentListings.map((listing) => ({
        params: { listingID: listing.listingID }
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const listingID = params?.listingID
    const item = currentListings.find((data) => data.listingID === listingID)

    return { props: { item } }
}

const Listings = ({ item }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);

    const handleImageLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
        currentImageIndex === 0 ? setCurrentImageIndex(item.imageURLList.length - 1) : setCurrentImageIndex(currentImageIndex - 1)
    }
    const handleImageRight = (e: React.MouseEvent<HTMLButtonElement>) => {
        item.imageURLList.length - 1 > currentImageIndex ? setCurrentImageIndex(currentImageIndex + 1) : setCurrentImageIndex(0)
    }

    const imageWidth = 600
    const imageHeight = 800

    return (
        <PageContainer>
            <Head>
                <title>
                    Campus Thrift | Buy
                </title>
            </Head>
            <VStack left={30}>
                <HStack spacing={30}>
                    <HStack>
                        <Button bg='transparent' variant='link' onClick={handleImageLeft}>
                            <ChevronLeftIcon boxSize={30} bg='transparent' />
                        </Button>
                        <Image alt='item' padding={50} src={item.imageURLList[currentImageIndex]} w={imageWidth} h={imageHeight} />
                        <Button bg='transparent' variant='link' onClick={handleImageRight}>
                            <ChevronRightIcon boxSize={30} bg='transparent' />
                        </Button>
                    </HStack>
                    <Card w={400}>
                        <CardHeader>
                            <Heading size='md'>Item Details</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Box>
                                    <Heading size='sm' textTransform='uppercase'>
                                        {item.title}
                                    </Heading>
                                </Box>
                                <Box>
                                    <Heading size='xs' textTransform='uppercase'>
                                        Condition
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        {item.condition}
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size='xs' textTransform='uppercase'>
                                        Description
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        {item.description}
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size='sm' textTransform='uppercase'>
                                        Price
                                    </Heading>
                                    <Text pt='2' fontSize='md'>
                                        {item.price}
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue'>Offer</Button>
                        </CardFooter>
                    </Card>
                </HStack>
            </VStack>
        </PageContainer>
    );
}

export default Listings;