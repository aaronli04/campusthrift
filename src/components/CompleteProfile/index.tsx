import {
    VStack,
    Text,
    Select,
    Button,
    Box,
    Flex,
    FormControl,
    FormLabel,
    useToast
} from '@chakra-ui/react'
import { Field, Formik } from 'formik';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { UserData } from '../../hooks/types';
import useAuth from '../../hooks/useAuth';
import setUserData from '../../hooks/setUserData';
import schools from '../utility/data/schools'
import Router from 'next/router';

const CompleteProfile: React.FC = () => {
    const universities = schools;
    const [school, setSchool] = React.useState<string>();
    const [user, loading, error] = useAuthState(auth)
    const { createUser } = useAuth();
    const toast = useToast()

    const handleOnSubmit = (school: string) => {
        console.log(school)
        if (user) {
            createUser(user).then(response => {
                if (response !== null) {
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
                    setUserData(data)
                    toast({
                        title: `Success!`,
                        status: 'success',
                        isClosable: true,
                    })
                    Router.push('/')
                }
            });
        }
    }

    return (
        <Flex align="center" justify="center">
            <Box bg="white" rounded="md" w={64}>
                <Formik
                    initialValues={{
                        college: "",
                        profilePicture: ""
                    }}
                    onSubmit={(values) => {
                        handleOnSubmit(values.college);
                    }}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4} align="flex-start">
                                <Field
                                    as={Select}
                                    id="college"
                                    name="college"
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
                                </Field>
                                <Button type="submit" width="full">
                                    Submit
                                </Button>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
}

export default CompleteProfile