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

import { UserData } from './types'

import { doc, DocumentReference, getDoc, setDoc } from 'firebase/firestore'


const useAuth = () => {

    const [authObj, authLoading] = useAuthState(auth);
    const [user, userLoading] = useDocumentData<UserData>(authObj && doc(db, 'users', authObj.uid) as DocumentReference<UserData>);

    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    }

    const signOut = async () => {
        await authSignOut(auth);
    }

    const createUser = async (user: User | null): Promise<UserData | null> => {
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

            const userData: UserData = {
                email: data.email,
                id: data.id,
                username: data.username,
                profilePicture: data.profilePicture,
                school: data.school,
                listingsPosted: data.listingsPosted,
                listingsSold: data.listingsSold,
                listingsPurchased: data.listingsPurchased,
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
        const userData: UserData = {
            email: email,
            id: uid,
            username: username,
            profilePicture: profilePicture,
            school: school,
            listingsPosted: [],
            listingsSold: [],
            listingsPurchased: [],
            type: 'user'
        };

        // Add the user to the database
        await setDoc(doc(db, 'users', uid), userData);
        const body = JSON.stringify({ id: userData.id, school: userData.school });
        fetch('http://localhost:8080/api/addUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body
        })
            .then(response => console.log(response.json()))
        // Return the user data
        return userData;
    };

    return {
        auth: authObj,
        user: user,
        loading: authLoading || userLoading,
        createUser,
        signIn,
        signOut,
    }
}

export default useAuth;