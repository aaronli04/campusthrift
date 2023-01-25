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

const SignUpModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex>
            <Button variant='ghost' padding={1} onClick={onOpen}>SIGN UP</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text fontSize='4xl'>
                            Create an Account
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            By creating an account on Campus Thrift you&apos;ll be able to buy, sell, comment, and more.
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <HStack spacing={0}>
                            <Text>
                                Already have an account?
                            </Text>
                            <Button padding={1} margin={0} variant='ghost' fontSize='md' fontWeight='normal' as='u'>
                                Log in
                            </Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )

}

export default SignUpModal