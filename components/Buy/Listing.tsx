import React from 'react'

import {
    HStack,
    Image,
    VStack,
    Text,
    Card,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    IconButton,
    ButtonGroup,
    Box
} from '@chakra-ui/react';

import { Item } from '../../types/item';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';


interface Props {
    listing: Item;
}

const Listing: React.FC<Props> = ({ listing }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);


    const handleImageLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
        currentImageIndex === 0 ? setCurrentImageIndex(listing.imageURLList.length - 1) : setCurrentImageIndex(currentImageIndex - 1)
    }
    const handleImageRight = (e: React.MouseEvent<HTMLButtonElement>) => {
        listing.imageURLList.length - 1 > currentImageIndex ? setCurrentImageIndex(currentImageIndex + 1) : setCurrentImageIndex(0)
    }

    return (
        <Card
            p={0}
        >
            <Button h={200} w={200} padding={0} onClick={onOpen}>
                <Image
                    src={listing.imageURL}
                    roundedTop='md'
                    alt={listing.title}
                    w='100%'
                    borderWidth={0}
                />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{listing.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody w='100%'>
                        <Image
                            src={listing.imageURLList[currentImageIndex]}
                            roundedTop='md'
                            alt={listing.title}
                            w='100%'
                            h='100%'
                            borderWidth={0}
                        />
                        <VStack>
                            <ButtonGroup spacing={0}>
                                <IconButton aria-label='Back image' icon={<ChevronLeftIcon />} w={200} onClick={handleImageLeft} />
                                <IconButton aria-label='Next image' icon={<ChevronRightIcon />} w={200} onClick={handleImageRight} />
                            </ButtonGroup>
                            <Box w='100%' justifyContent='flex-start'>
                                <HStack spacing={0.5}>
                                    <Text fontWeight='semibold'>Size:</Text>
                                    <Text>{listing.size}</Text>
                                </HStack>
                                <HStack spacing={0.5}>
                                    <Text fontWeight='semibold'>Condition:</Text>
                                    <Text>{listing.condition}</Text>
                                </HStack>
                                <HStack spacing={0.5}>
                                    <Text fontWeight='semibold'>Price:</Text>
                                    <Text>{listing.price}</Text>
                                </HStack>
                                <Box mt={5}>
                                    <Text fontWeight='semibold'>Description</Text>
                                    <Text>{listing.description}</Text>
                                </Box>
                            </Box>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <VStack
                alignItems='flex-start'
                spacing={0}
                p={2}
            >
                <Text
                    fontSize='sm'
                    fontWeight='bold'
                >
                    {listing.title}
                </Text>
                <Text
                    fontSize='sm'
                >
                    {listing.tags}
                </Text>
                <HStack
                    pt={2}
                >
                    <Text
                        fontSize='sm'
                    >
                        {listing.price}
                    </Text>
                </HStack>
            </VStack>
        </Card>

    )
}

export default Listing