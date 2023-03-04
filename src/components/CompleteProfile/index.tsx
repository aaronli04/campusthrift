import {
    VStack,
    Text,
    Select,
    Button
} from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { UserData } from '../../hooks/types';
import useAuth from '../../hooks/useAuth';
import useSetUserData from '../../hooks/useSetUserData';
import schools from '../utility/data/schools'

const CompleteProfile: React.FC = () => {
    const universities = schools;
    const [school, setSchool] = React.useState<string>("Vanderbilt");
    const [user, loading, error] = useAuthState(auth)
    const { createUser } = useAuth();
    const [data, setData] = React.useState<UserData>();
    const handleOnClick = () => {
        if (user) {
            createUser(user).then(response => {if (response !== null) {
                let data: UserData = {
                    email: response.email,
                    id: response.id,
                    listingsPosted: response.listingsPosted,
                    listingsPurchased: response.listingsPurchased,
                    listingsSold: response.listingsSold,
                    profilePicture: response.profilePicture,
                    school: school,
                    type: response.type,
                    username: response.username
                }
                setData(data);
                console.log(data)
                // useSetUserData(data) <-- how should i do this
            }});
        }
    }

    return (
        <VStack alignItems='flex-end'>
            <VStack>
                <Text
                    fontSize='3xl'
                    fontWeight='bold'
                >
                    Select Your School
                </Text>
                <Select
                    onChange={(e) => setSchool(e.target.value)}
                >
                    {
                        universities.map((university, index) => (
                            <option
                                key={index}
                                value={university}
                            >
                                {university}
                            </option>
                        ))
                    }
                </Select>
            </VStack>
            <Button onClick={handleOnClick}>
                Submit
            </Button>
        </VStack>
    )
}

export default CompleteProfile