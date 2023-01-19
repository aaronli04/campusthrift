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
    Box,
    Link
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
            <Link href={`/listings/${listing.listingID}`}>
                <Image
                        src={listing.imageURL}
                        roundedTop='md'
                        alt={listing.title}
                        w='100%'
                        borderWidth={0}
                />
            </Link>
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