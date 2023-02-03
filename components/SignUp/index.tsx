import {
    Box,
    Text,
    Image,
    VStack,
    HStack,
    Link
} from '@chakra-ui/react';
import React from 'react';

const SignUp: React.FC = () => {
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
                        Create an Account
                    </Text>
                    <Text>
                        By creating an account on Campus Thrift you&apos;ll be able to buy, sell, comment, and more.
                    </Text>
                    <HStack>
                        <Text>
                            Already have an account?
                        </Text>
                        <Link href='/login' sx={{textDecor: 'underline'}}>
                            Log in
                        </Link>
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    );
};

export default SignUp;