import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import { UserData } from './types';

// Converts a document from Firebase into a UserData object
const useSetUserData = async (userData: UserData) => {
  const uploadData = {
    email: userData.email,
    id: userData.id,
    username: userData.username,
    profilePicture: userData.profilePicture,
    school: userData.school,
    listingsPosted: userData.listingsPosted,
    listingsSold: userData.listingsSold,
    listingsPurchased: userData.listingsPurchased,
    type: userData.type
  };

  await setDoc(doc(db, 'users', userData.id), uploadData);
};

export default useSetUserData;