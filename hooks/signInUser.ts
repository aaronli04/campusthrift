import { useRouter } from 'next/navigation';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useCreateUser from './useCreateUser'
import { auth } from '../firebase/clientApp'


const signInUser = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const router = useRouter();
    const [user] = useAuthState(auth);

    const login = async () => {
        const success = await signInWithGoogle();
        if (success) {
            router.push('/');
        }
        //user currently null, prob need to write another hook
        console.log(user)
        if (user !== undefined) {
            useCreateUser(user)
        }
    };

    return {
        login
    }
}

export default signInUser