import React from 'react'
import { HStack, Link, Text, VStack } from '@chakra-ui/react'
import PageContainer from '../components/utility/PageContainer'

const NotFound = () => {
    return (
        <PageContainer>
            <VStack mt={200} h="100%" justifyContent="space-between">
                <Text
                    fontSize='4xl'
                    fontWeight='extrabold'
                >
                    Sorry, the page you&apos;re looking for doesn&apos;t exist.
                </Text>
                <HStack>
                    <Link
                        href='/buy'
                    >
                        Click this to continue shopping.
                    </Link>
                    <Link
                        href='/sell'
                    >
                        Or this to sell things you don&apos;t use anymore.
                    </Link>
                </HStack>
            </VStack>
        </PageContainer>
    )
}

export default NotFound