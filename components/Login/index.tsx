import {
    Box,
    Text,
    Image,
    VStack,
    HStack,
    Link
} from '@chakra-ui/react';
import React from 'react';
import GoogleSignin from '../utility/ContinueWithButton/ContinueWithGoogle';

const Login: React.FC = () => {
    return (
        <VStack justifyContent="center" width="100%" mt='20vh'>
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
                    <Text>
                        Log in to your Campus Thrift account to buy, sell, comment, and more.
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