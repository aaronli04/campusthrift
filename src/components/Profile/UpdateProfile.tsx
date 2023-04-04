import {
  VStack,
  useToast,
  Box,
  Button,
  Select,
  Text,
  Input
} from '@chakra-ui/react';
import React, {
  useEffect,
  useState
} from 'react'
import setUserData from '../../hooks/setUserData';
import { FirebaseUser } from '../../hooks/types'
import useAuth from '../../hooks/useAuth';
import schools from '../utility/data/schools';
import {
  Field,
  Formik
} from 'formik';
import defaultData from '../utility/data/defaultFirebaseUser';
import SignOut from './SignOut';

const UpdateProfile: React.FC = () => {
  const universities = schools;
  const { auth, createUser } = useAuth();
  const toast = useToast()
  const [existingData, setExistingData] = useState<FirebaseUser>(defaultData);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    async function getIDToken() {
      if (auth) {
        const token = await auth.getIdToken()
        setToken(token)
      }
    }
    getIDToken();
    if (auth) {
      createUser(auth).then(response => {
        if (response !== null) {
          setExistingData(response);
        }
      })
    }
  }, [])

  const handleOnSubmit = (school: string, username: string, phoneNumber: string) => {
    if (phoneNumber.length != 10) {
      toast({
        title: `Input a valid phone number.`,
        status: 'error',
        isClosable: true,
      })
      return;
    }

    //if data is exact same as before don't do API call
    if (school === existingData.school && username === existingData.username && phoneNumber === existingData.phone) {
      toast({
        title: `Success!`,
        status: 'success',
        isClosable: true,
      })
      return
    }

    if (auth && username.length > 0) {
      createUser(auth).then(response => {
        if (response !== null) {
          let data: FirebaseUser = {
            email: response.email,
            id: response.id,
            profilePicture: response.profilePicture,
            school: school,
            type: response.type,
            username: username,
            phone: phoneNumber
          }
          setUserData(data, token)
          setExistingData(data)
          toast({
            title: `Success!`,
            status: 'success',
            isClosable: true,
          })
        }
      });
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  };

  return (
    <VStack align="center" justify="center">
      <Box bg="white" rounded="md" w={64} gap={5}>
        <Formik
          initialValues={{
            college: existingData.school,
            username: existingData.username,
            profilePicture: existingData.profilePicture
          }}
          onSubmit={(values) => {
            if (values.college == "") {
              values.college = 'Vanderbilt';
            }
            if (values.username == "") {
              toast({
                title: `Please select a valid username`,
                status: 'error',
                isClosable: true,
              })
              return;
            }
            handleOnSubmit(values.college, values.username, phoneNumber);
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
                <Text
                  fontSize='xl'
                  fontWeight='semibold'
                >
                  Phone Number
                </Text>
                <Field
                  as={Input}
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  placeholder={existingData.phone}
                />
                <Button type="submit" width="full">
                  Submit
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
      <SignOut />
    </VStack>
  );
}

export default UpdateProfile