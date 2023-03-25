import React from 'react'
import {
    HStack,
    Link,
    Text,
    VStack
} from '@chakra-ui/react'
import PageContainer from '../components/utility/PageContainer'
import Layout from '../layouts/Layout'
import Head from 'next/head'

const NotFound = () => {
    return (
        <Layout>
            <PageContainer>
                <Head>
                    <title>
                        Page not found
                    </title>
                </Head>
                <VStack h="100%" justifyContent="space-between">
                    <Text
                        fontSize='4xl'
                        fontWeight='extrabold'
                    >
                        Sorry, the page you&apos;re looking for doesn&apos;t exist.
                    </Text>
                </VStack>
            </PageContainer>
        </Layout>
    )
}

export default NotFound