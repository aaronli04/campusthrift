import {
    VStack,
    Select,
    Button,
    Box,
    Flex,
    useToast,
    Input,
    Text
} from '@chakra-ui/react'
import { Field, Formik } from 'formik';
import React, { useState } from 'react'
import { FirebaseUser } from '../../hooks/types';
import useAuth from '../../hooks/useAuth';
import setUserData from '../../hooks/setUserData';
import schools from '../utility/data/schools'
import Router from 'next/router';

const CompleteProfile: React.FC = () => {
    const universities = schools;
    const { auth, createUser, token } = useAuth();
    const [phoneNumber, setPhoneNumber] = useState("");
    const toast = useToast()

    const handleOnSubmit = (school: string, phone: string) => {
        if (phoneNumber.length != 10) {
            toast({
                title: `Input a valid phone number.`,
                status: 'error',
                isClosable: true,
            })
            return;
        }
        if (auth && school.length > 0) {
            createUser(auth).then(response => {
                if (response !== null) {
                    let data: FirebaseUser = {
                        email: response.email,
                        id: response.id,
                        profilePicture: response.profilePicture,
                        school: school,
                        type: response.type,
                        username: response.username,
                        phone: phoneNumber
                    }
                    if (token !== '') {
                        setUserData(data, token)
                    }
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setPhoneNumber(e.target.value);
        }
    };

    return (
        <Flex align="center" justify="center">
            <Box bg="white" rounded="md" w={64}>
                <Formik
                    initialValues={{
                        college: 'Vanderbilt',
                        profilePicture: '',
                    }}
                    onSubmit={(values) => {
                        handleOnSubmit(values.college, phoneNumber);
                    }}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4} align="center">
                                <Text fontSize='2xl' fontWeight='semibold'>School</Text>
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
                                <Text fontSize='2xl' fontWeight='semibold'>Phone Number</Text>
                                <Field
                                    as={Input}
                                    id="phone"
                                    name="phone"
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                />
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