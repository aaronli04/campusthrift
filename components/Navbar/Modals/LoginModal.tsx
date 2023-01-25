import React from 'react'
import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Text,
    ModalFooter,
    HStack
} from '@chakra-ui/react'

const LoginModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex>
            <Button variant='ghost' padding={1} onClick={onOpen}>LOGIN</Button>

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
                    <ModalFooter>
                        <HStack spacing={0}>
                            <Text>
                                Don&apos;t have an account?
                            </Text>
                            <Button padding={1} margin={0} variant='ghost' fontSize='md' fontWeight='normal' as='u'>
                                Sign Up
                            </Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default LoginModal