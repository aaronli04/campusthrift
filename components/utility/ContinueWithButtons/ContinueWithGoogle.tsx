import {
    Button,
    HStack,
    Icon,
    Text
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/navigation';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';

const GoogleSignIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const router = useRouter();

    const login = async () => {
        const success = await signInWithGoogle();
        if (success) {
            router.push('/');
        }
    };

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