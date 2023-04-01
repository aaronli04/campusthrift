import {
    GetServerSidePropsContext,
    InferGetServerSidePropsType
} from "next";
import React, {
    useEffect,
    useState
} from 'react'
import {
    HStack,
    Text,
    VStack,
    Image,
    Box,
    Button,
    Card,
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
import {
    Product,
    SupabaseComment,
    FirebaseUser
} from "../../../hooks/types";
import CommentButton from "../../../components/utility/Comments/CommentButton";
import CommentFormat from "../../../components/utility/Comments/CommentFormat";
import Loading from "../../../components/Loading";
import useComments from "../../../hooks/useComments";
import useSearch from "../../../hooks/useSearch"
import useAuth from "../../../hooks/useAuth";
import DeleteListingButton from "../../../components/Buy/DeleteListingButton";

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<{ listingID: string }>) => {
    const listingID = params?.listingID;
    if (!listingID) {
        return {
            notFound: true
        }
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/showAllListings/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const items = await response.json();

    const item = await items.find((data: Product) => data.id === listingID)

    return { props: { item } }
}

const Listings = ({ item }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { auth, createUser } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getCommentsByPostID } = useComments()
    const [comments, setComments] = useState<SupabaseComment[]>([]);
    const [commentsLoaded, setCommentsLoaded] = useState<boolean>(false);
    const { getFirebaseUserByID } = useSearch()
    const [currentUserID, setCurrentUserID] = useState<string>();
    const [ userLoaded, setUserLoaded ] = useState<boolean>(false);
    const [userData, setUserData] = useState<FirebaseUser>();
    useEffect(() => {
        async function setUserID() {
            if (auth) {
                const response = await createUser(auth);
                if (response !== null) {
                    setCurrentUserID(response.id)
                }
            }
        }
        async function fetchData() {
            const comments = await getCommentsByPostID(item.id);
            const userData: FirebaseUser = await getFirebaseUserByID(item.seller_id);
            setUserData(userData)
            setComments(comments)
            setCommentsLoaded(true)
            setUserLoaded(true)
        }

        async function fetchDataWithUserID() {
            await setUserID();
            await fetchData();
        }
        fetchDataWithUserID();
    }, [item.id, auth]);

    const imageWidth = 600
    const imageHeight = 800

    if (!commentsLoaded || !userLoaded || userData === undefined || currentUserID === undefined) {
        return <Loading />
    }

    // no comments, seller of item
    if (comments.length === 0 && commentsLoaded && currentUserID === userData.id) {
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
                                <CardBody>
                                    <Stack divider={<StackDivider />} spacing={4}>
                                        <Box>
                                            <Heading size='md'>
                                                {item.name}
                                            </Heading>
                                        </Box>
                                        <VStack gap={0} spacing={0} alignItems='flex-start'>
                                            <Heading size='xs' textTransform='uppercase'>
                                                Seller
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                {userData.username} from {userData.school}
                                            </Text>
                                            <Text pt='2' fontSize='sm'>
                                                Contact {userData.email} if interested
                                            </Text>
                                        </VStack>
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
                                            <Heading size='xs' textTransform='uppercase'>
                                                Price
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                ${item.price}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </CardBody>
                                <CardFooter>
                                    <HStack>
                                        <Button onClick={onOpen}>See Comments</Button>
                                        <DeleteListingButton item={item}/>
                                    </HStack>
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
                                                <CommentButton id={item.id} />
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

    // comments, seller of item
    if (comments.length !== 0 && commentsLoaded && currentUserID === userData.id) {
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
                                <CardBody>
                                    <Stack divider={<StackDivider />} spacing={4}>
                                        <Box>
                                            <Heading size='md'>
                                                {item.name}
                                            </Heading>
                                        </Box>
                                        <VStack gap={0} spacing={0} alignItems='flex-start'>
                                            <Heading size='xs' textTransform='uppercase'>
                                                Seller
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                {userData.username} from {userData.school}
                                            </Text>
                                            <Text pt='2' fontSize='sm'>
                                                Contact {userData.email} if interested
                                            </Text>
                                        </VStack>
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
                                            <Heading size='xs' textTransform='uppercase'>
                                                Price
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                ${item.price}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </CardBody>
                                <CardFooter>
                                    <HStack>
                                        <Button onClick={onOpen}>See Comments</Button>
                                        <DeleteListingButton item={item}/>
                                    </HStack>
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
                                                <CommentButton id={item.id} />
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

    //comments, not seller of item
    if (comments.length !== 0 && commentsLoaded && currentUserID !== userData.id) {
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
                                <CardBody>
                                    <Stack divider={<StackDivider />} spacing={4}>
                                        <Box>
                                            <Heading size='md'>
                                                {item.name}
                                            </Heading>
                                        </Box>
                                        <VStack gap={0} spacing={0} alignItems='flex-start'>
                                            <Heading size='xs' textTransform='uppercase'>
                                                Seller
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                {userData.username} from {userData.school}
                                            </Text>
                                            <Text pt='2' fontSize='sm'>
                                                Contact {userData.email} if interested
                                            </Text>
                                        </VStack>
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
                                            <Heading size='xs' textTransform='uppercase'>
                                                Price
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
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
                                                <CommentButton id={item.id} />
                                                <Button />
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

    // no comments, not seller of item
    if (comments.length == 0 && commentsLoaded && currentUserID !== userData.id) {
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
                                <CardBody>
                                    <Stack divider={<StackDivider />} spacing={4}>
                                        <Box>
                                            <Heading size='md'>
                                                {item.name}
                                            </Heading>
                                        </Box>
                                        <VStack gap={0} spacing={0} alignItems='flex-start'>
                                            <Heading size='xs' textTransform='uppercase'>
                                                Seller
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                {userData.username} from {userData.school}
                                            </Text>
                                            <Text pt='2' fontSize='sm'>
                                                Contact {userData.email} if interested
                                            </Text>
                                        </VStack>
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
                                            <Heading size='xs' textTransform='uppercase'>
                                                Price
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
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
                                                <CommentButton id={item.id} />
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

    //comments, not seller of item
    if (comments.length !== 0 && commentsLoaded && currentUserID !== userData.id) {
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
                                <CardBody>
                                    <Stack divider={<StackDivider />} spacing={4}>
                                        <Box>
                                            <Heading size='md'>
                                                {item.name}
                                            </Heading>
                                        </Box>
                                        <VStack gap={0} spacing={0} alignItems='flex-start'>
                                            <Heading size='xs' textTransform='uppercase'>
                                                Seller
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                {userData.username} from {userData.school}
                                            </Text>
                                            <Text pt='2' fontSize='sm'>
                                                Contact {userData.email} if interested
                                            </Text>
                                        </VStack>
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
                                            <Heading size='xs' textTransform='uppercase'>
                                                Price
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
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
                                                <CommentButton id={item.id} />
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
}

export default Listings;
