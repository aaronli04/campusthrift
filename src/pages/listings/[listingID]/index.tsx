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
    CardFooter,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
} from '@chakra-ui/react'
import currentListings from "../../../components/utility/data/listingsData/currentListings";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import PageContainer from "../../../components/utility/PageContainer";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import CommentFormat from "../../../components/utility/Comments/CommentFormat"
import { Comment } from "../../../hooks/types";
import CommentButton from "../../../components/utility/Comments/CommentButton";


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
    const { isOpen, onOpen, onClose } = useDisclosure()


    const imageWidth = 600
    const imageHeight = 800

    if (item.comments.length == 0) {
        return (
            <Layout>
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
                                                ${item.price}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </CardBody>
                                <CardFooter>
                                    <Button onClick={onOpen}>See Comments</Button>
                                    <Modal isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Comments</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Text>
                                                    No comments yet!
                                                </Text>
                                            </ModalBody>
                                            <ModalFooter>
                                                <CommentButton />
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </CardFooter>
                            </Card>
                        </HStack>
                    </VStack>
                </PageContainer>
            </Layout>
        );
    }

    return (
        <Layout>
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
                                            ${item.price}
                                        </Text>
                                    </Box>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <Button onClick={onOpen}>See Comments</Button>
                                <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Comments</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <VStack alignItems='flex-start'>
                                                {
                                                    item.comments.map((comment: Comment, index: number) => (
                                                        <CommentFormat comment={comment} key={index} />
                                                    ))
                                                }
                                            </VStack>
                                        </ModalBody>
                                        <ModalFooter>
                                            <CommentButton />
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </CardFooter>
                        </Card>
                    </HStack>
                </VStack>
            </PageContainer>
        </Layout>
    );
}

export default Listings;