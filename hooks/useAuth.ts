import { auth, db } from '../firebase/clientApp';

import { 
    signInWithEmailAndPassword, 
    signOut as authSignOut,
} from 'firebase/auth';

import { 
    useAuthState,
} from 'react-firebase-hooks/auth';

import {
    useDocumentData
} from 'react-firebase-hooks/firestore';

import { UserData } from './types'

import { doc, DocumentReference, setDoc } from 'firebase/firestore'


const useAuth = () => {

    const [authObj, authLoading] = useAuthState(auth);
    const [user, userLoading] = useDocumentData<UserData>(authObj && doc(db, 'users', authObj.uid) as DocumentReference<UserData>);

    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    }

    const signOut = async () => {
        await authSignOut(auth);
    }

    return {
        auth: authObj,
        user: user,
        loading: authLoading || userLoading,
        signIn,
        signOut,
    }
}

export default useAuth;