import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import { FirebaseUser } from './types';


// Converts a document from Firebase into a UserData object
const setUserData = async (userData: FirebaseUser, token: any) => {
  const uploadData = {
    email: userData.email,
    id: userData.id,
    username: userData.username,
    profilePicture: userData.profilePicture,
    school: userData.school,
    type: userData.type
  };

  if (!token) {
    return;
  }

  const body = JSON.stringify({ id: userData.id, school: userData.school });
  fetch(`${process.env.NEXT_PUBLIC_BACKEND}/updateUser`, {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': token
      },
      body: body
  })
  .then(response => console.log(response.json()))

  await setDoc(doc(db, 'users', userData.id), uploadData);
};

export default setUserData;