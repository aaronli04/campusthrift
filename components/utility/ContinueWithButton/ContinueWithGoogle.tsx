import {
    Button,
    HStack,
    Icon,
    Text
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc'
import { auth } from '../../../firebase/clientApp';
import signInUser from '../../../hooks/signInUser'
import useCreateUser from '../../../hooks/useCreateUser';

const GoogleSignIn = () => {
    const { login } = signInUser();
    
    return (
        <Button h={12} variant="solid" width="xs" onClick={login}>
            <HStack spacing={3}>
                <Icon as={FcGoogle} boxSize={6} />
                <Text>
                    Continue with Google
                </Text>
            </HStack>
        </Button>
    );
};

export default GoogleSignIn;