import {
    VStack,
    Text,
    Select,
    Button,
    Box,
    Flex,
    useToast
} from '@chakra-ui/react'
import { Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { UserData } from '../../hooks/types';
import useAuth from '../../hooks/useAuth';
import setUserData from '../../hooks/setUserData';
import schools from '../utility/data/schools'
import Router from 'next/router';
import defaultData from '../utility/data/defaultUserData';

const CompleteProfile: React.FC = () => {
    const universities = schools;
    const [user, loading, error] = useAuthState(auth)
    const { createUser } = useAuth();
    const toast = useToast()
    const [existingData, setExistingData] = useState<UserData>(defaultData);

    useEffect(() => {
      if (user) {
        createUser(user).then(response => {
          if (response !== null) {
            setExistingData(response);
          }
        })
      }
    })

    const handleOnSubmit = (school: string) => {
        if (user && school.length > 0) {
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
        } else {
            toast({
                title: `Select a valid school.`,
                status: 'error',
                isClosable: true,
            })
        }
    }

    return (
        <Flex align="center" justify="center">
            <Box bg="white" rounded="md" w={64}>
                <Formik
                    initialValues={{
                        college: 'Vanderbilt',
                        profilePicture: ''
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