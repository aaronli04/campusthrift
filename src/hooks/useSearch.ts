import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import defaultData from "../components/utility/data/defaultFirebaseUser";
import { FirebaseUser } from "./types";

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

    return {
        getFirebaseUserByID: getFirebaseUserByID,
    }
}
export default useSearch