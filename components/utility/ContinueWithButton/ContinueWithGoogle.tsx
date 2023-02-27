import {
    Button,
    HStack,
    Icon,
    Text
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc'
import signInUser from '../../../hooks/signInUser'

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