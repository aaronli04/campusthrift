import {
    GetStaticPaths,
    GetStaticProps,
    InferGetStaticPropsType
} from "next";
import React, { useEffect, useState } from 'react'
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
import PageContainer from "../../../components/utility/PageContainer";
import Head from "next/head";
import Layout from "../../../layouts/Layout";
import { Item, SupabaseComment } from "../../../hooks/types";
import CommentButton from "../../../components/utility/Comments/CommentButton";
import CommentFormat from "../../../components/utility/Comments/CommentFormat";
import Loading from "../../../components/Loading";
import useComments from "../../../hooks/useComments";

export const getStaticPaths: GetStaticPaths = async () => {
    let items: Item[] = []
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/showAllListings`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if (response.status === 200) {
        const data = await response.json();
        for (let i = 0; i < data.length; ++i) {
            const item: Item = {
                title: data[i].name,
                seller: data[i].seller_id,
                listingID: data[i].id,
                condition: data[i].condition,
                description: data[i].description,
                category: data[i].category_name,
                price: data[i].price,
                datePosted: data[i].created_at,
                photo: data[i].photo,
                comments: [],
            }
            items.push(item);
        }
    }
    const paths = items.map((listing) => ({
        params: { listingID: listing.listingID }
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let items: Item[] = []
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/showAllListings`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if (response.status === 200) {
        const data = await response.json();
        for (let i = 0; i < data.length; ++i) {
            let item: Item = {
                title: data[i].name,
                seller: data[i].seller_id,
                listingID: data[i].id,
                condition: data[i].condition,
                description: data[i].description,
                category: data[i].category_name,
                price: data[i].price,
                datePosted: data[i].created_at,
                photo: data[i].photo,
                comments: [],
            }
            items.push(item);
        }
    }
    const listingID = params?.listingID
    const item = items.find((data) => data.listingID === listingID)

    return { props: { item } }
}

const Listings = ({ item }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getCommentsByPostID } = useComments()
    const [comments, setComments] = useState<SupabaseComment[]>([]);
    const [commentsLoaded, setCommentsLoaded] = useState<boolean>(false);
    useEffect(() => {
        async function fetchData() {
            const comments = await getCommentsByPostID(item.listingID);
            setComments(comments)
            setCommentsLoaded(true)
        }
        fetchData();
    }, [item.listingID]);
    const imageWidth = 600
    const imageHeight = 800

    if (comments.length == 0 && commentsLoaded) {
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
                                <Image alt='item' padding={50} src={item.photo} w={imageWidth} h={imageHeight} />
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
                                                <CommentButton id={item.listingID} />
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

    if (comments.length !== 0 && commentsLoaded) {
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
                                <Image alt='item' padding={50} src={item.photo} w={imageWidth} h={imageHeight} />
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
                                                        comments.map((comment: SupabaseComment, index: number) => (
                                                            <CommentFormat comment={comment} key={index} />
                                                        ))
                                                    }
                                                </VStack>
                                            </ModalBody>
                                            <ModalFooter>
                                                <CommentButton id={item.listingID} />
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
    else {
        return <Loading />
    }
}

export default Listings;
