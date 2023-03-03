import { useRouter } from 'next/navigation';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/clientApp'


const useSignInUser = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const router = useRouter();

    const login = async () => {
        const success = await signInWithGoogle();
        if (success) {
            router.push('/');
        }
    };

    return {
        login
    }
}

export default useSignInUser