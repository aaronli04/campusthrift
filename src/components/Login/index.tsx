import {
    Box,
    Text,
    Image,
    VStack,
    Link,
    HStack
} from '@chakra-ui/react';
import React from 'react';
import GoogleSignin from '../utility/ContinueWithButton/ContinueWithGoogle';

const Login: React.FC = () => {
    return (
        <VStack width="100%">
            <VStack spacing={5}>
                <Box boxSize={200}>
                    <Link href='/'>
                        <Image
                            alt='logo'
                            src="/logo.png"
                        />
                    </Link>
                </Box>
                <VStack spacing={2}>
                    <Text
                        fontSize='3xl'
                        fontWeight='bold'
                    >
                        Login
                    </Text>
                    <Text textAlign='center'>
                        Log in to your Campus Thrift account to buy, sell, comment, and more.
                    </Text>
                    <Text textAlign='center'>
                        Buy good-as-new items for a whole lot less.
                        Sell things you don&apos;t use anymore.
                        No fees.
                    </Text>
                    <VStack h={20} justifyContent='center'>
                        <GoogleSignin />
                    </VStack>
                </VStack>
            </VStack>
        </VStack>
    );
};

export default Login;