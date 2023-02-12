import {
    Box,
    Text,
    Image,
    VStack,
    HStack,
    Link
} from '@chakra-ui/react';
import React from 'react';
import GoogleSignIn from './LoginButton/GoogleSignin';

const Login: React.FC = () => {
    return (
        <VStack justifyContent="center" width="100%" mt='20vh'>
            <VStack spacing={5}>
                <Box boxSize={200}>
                    <Link href='/'>
                        <Image
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
                    <Text>
                        Log in to your Campus Thrift account to buy, sell, comment, and more.
                    </Text>
                    <GoogleSignIn />
                    <HStack>
                        <Text>
                            Don&apos;t have an account?
                        </Text>
                        <Link href='/signup' sx={{textDecor: 'underline'}}>
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    );
};

export default Login;