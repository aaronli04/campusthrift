import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import defaultData from "../components/utility/data/defaultFirebaseUser";
import { FirebaseUser, Comment } from "./types";

const useSearch = () => {

    const getFirebaseUserByID = async(user_id: string): Promise<FirebaseUser> => {
        const userDoc = await getDoc(doc(db, 'users', user_id));

        // If the user exists in the database, return the user data
        if (userDoc.exists()) {
            const data = await userDoc.data();

            if (data == undefined) return defaultData;

            const userData: FirebaseUser = {
                email: data.email,
                id: data.id,
                username: data.username,
                profilePicture: data.profilePicture,
                school: data.school,
                type: data.type,
                phone: data.phone
            };
            return userData;
        }
        // user does not exist
        else {
            return defaultData;
        }
    }

    const getCommentsByPostID = async(post_id: string): Promise<Comment[]> => {
        const body = JSON.stringify({ id: post_id });

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/getCommentsByPostID`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        })
        if (response.status === 200) {
            const data = await response.json();
            const commentData = data as Comment[];
            return commentData;
        }
        else {
            return [];
        }
    }

    return {
        getFirebaseUserByID: getFirebaseUserByID
    }
}
export default useSearch