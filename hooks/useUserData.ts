import { DocumentData } from 'firebase/firestore';
import { UserData } from './types';

// Converts a document from Firebase into a UserData object
const useUserData = (data: DocumentData | undefined) => {
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
};

export default useUserData;