import { auth, db } from '../firebase/clientApp';

import {
    signInWithEmailAndPassword,
    signOut as authSignOut,
    User,
} from 'firebase/auth';

import {
    useAuthState,
} from 'react-firebase-hooks/auth';

import {
    useDocumentData
} from 'react-firebase-hooks/firestore';

import { FirebaseUser, UserData } from './types'
import { doc, DocumentReference, getDoc, setDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react';


const useAuth = () => {

    const [authObj, authLoading] = useAuthState(auth);
    const [user, userLoading] = useDocumentData<UserData>(authObj && doc(db, 'users', authObj.uid) as DocumentReference<UserData>);
    const [tokenID, setTokenID] = useState('');

    useEffect(() => {
        let token = authObj?.getIdToken(true).then((id) => {
            setTokenID(id);
        })
    }, [])

    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    }

    const signOut = async () => {
        await authSignOut(auth);
    }

    const createUser = async (user: User | null): Promise<FirebaseUser | null> => {
        // If the user is not logged in, return null
        if (!user) return null;

        // uid is id in the database
        const uid = user.uid;

        // Check if the user is already in the database
        const userDoc = await getDoc(doc(db, 'users', uid));

        // If the user is already in the database, return the user data
        if (userDoc.exists()) {
            const data = await userDoc.data();

            if (data == undefined) return null;

            const userData: FirebaseUser = {
                email: data.email,
                id: data.id,
                username: data.username,
                profilePicture: data.profilePicture,
                school: data.school,
                type: data.type
            };
            return userData;
        }

        // If the user is not in the database, create a new user

        const email = user.email;
        const username = user.displayName;
        const profilePicture = '';
        const school = '';
        if (email == null || username == null) {
            return null;
        }
        const userData: FirebaseUser = {
            email: email,
            id: uid,
            username: username,
            profilePicture: profilePicture,
            school: school,
            type: 'user'
        };

        // Add the user to the database
        await setDoc(doc(db, 'users', uid), userData);
        const body = JSON.stringify({ id: userData.id, school: userData.school });

        //this is not safe -- correct later
        if (!tokenID) {
            return null;
        }
        fetch(`${process.env.NEXT_PUBLIC_BACKEND}/addUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': tokenID
            },
            body: body
        })
            .then(response => console.log(response.json()))
        // Return the user data
        return userData;
    };

    return {
        auth: authObj,
        token: tokenID,
        user: user,
        loading: authLoading || userLoading,
        createUser,
        signIn,
        signOut
    }
}

export default useAuth;