import { db } from '../firebase/clientApp';

import { User } from 'firebase/auth';

import { doc, getDoc, setDoc } from 'firebase/firestore';

import { UserData } from './types';

import useUserData from './useUserData'

// Creates a new user in the database if the user is new
const useCreateUser = async (user: User | null): Promise<UserData | null> => {
  // If the user is not logged in, return null
  if (!user) return null;

  // uid is id in the database
  const uid = user.uid;

  // Check if the user is already in the database
  const userDoc = await getDoc(doc(db, 'users', uid));
  // If the user is already in the database, return the user data
  if (userDoc.exists()) return useUserData(userDoc.data());

  // If the user is not in the database, create a new user
  const email = user.email;
  const username = user.displayName;
  const profilePicture = '';
  const school = '';
  const userData = {
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
  // Return the user data
  return useUserData(await (await getDoc(doc(db, 'users', uid))).data());
};
export default useCreateUser;
