import {
  VStack,
  useToast,
  Flex,
  Box,
  Button,
  Select,
  Text,
  Input
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import setUserData from '../../hooks/setUserData';
import { UserData } from '../../hooks/types'
import useAuth from '../../hooks/useAuth';
import schools from '../utility/data/schools';
import {
  Field,
  Formik
} from 'formik';
import defaultData from '../utility/data/defaultUserData';

const UpdateProfile: React.FC = () => {
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

  const handleOnSubmit = (school: string, username: string) => {
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
            username: username
          }
          setUserData(data)
          toast({
            title: `Success!`,
            status: 'success',
            isClosable: true,
          })
        }
      });
    }
  }

  return (
    <Flex align="center" justify="center">
      <Box bg="white" rounded="md" w={64}>
        <Formik
          initialValues={{
            college: existingData.school,
            username: existingData.username,
            profilePicture: existingData.profilePicture
          }}
          onSubmit={(values) => {
            handleOnSubmit(values.college, values.username);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={2} align="center">
                <Text
                  fontSize='xl'
                  fontWeight='semibold'
                >
                  School
                </Text>
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
                <Text
                  fontSize='xl'
                  fontWeight='semibold'
                >
                  Username
                </Text>
                <Field
                  as={Input}
                  id="username"
                  name="username"
                  placeholder={existingData.username}
                >
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

export default UpdateProfile