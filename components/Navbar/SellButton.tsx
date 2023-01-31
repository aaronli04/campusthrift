import {
    Button,
    Flex,
    Link,
    Modal,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Text,
    ModalBody,
    ModalFooter,
    HStack,
    ModalCloseButton
} from '@chakra-ui/react'
import React from 'react'

const SellButton = () => {
    const [auth, setAuth] = React.useState<Boolean>(true)
    const { isOpen, onOpen, onClose } = useDisclosure()

    if (auth) {
        return (
            <Button variant='ghost' _hover={{ bg: 'none' }}>
                <Link href='/sell' style={{ textDecoration: 'none' }}>
                    SELL
                </Link>
            </Button>
        )
    }

    return (
        <Flex>
            <Button variant='ghost' _hover={{ bg: 'none' }} onClick={onOpen}>
                SELL
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text fontSize='4xl'>
                            Log in
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Log in to your Campus Thrift account to buy, sell, comment, and more.
                        </Text>
                    </ModalBody>
                    <ModalFooter />
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default SellButton