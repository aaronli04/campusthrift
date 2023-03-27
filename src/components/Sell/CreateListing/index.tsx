import {
  Box,
  Flex,
  VStack,
  Text,
  Select,
  Input,
  Button,
  Textarea,
  useToast,
  HStack,
  Icon
} from '@chakra-ui/react';
import {
  Field,
  Formik
} from 'formik';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Product } from '../../../hooks/types';
import { FaDollarSign } from 'react-icons/fa'
import Router from 'next/router';
import useAuth from '../../../hooks/useAuth';
import categories from '../../utility/data/categories';
import conditions from '../../utility/data/conditions';
import useBuy from '../../../hooks/useBuy';

const CreateListing: React.FC = () => {

  const toast = useToast()
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { auth, createUser } = useAuth();
  const [token, setToken] = useState('')
  const { addListing } = useBuy();

  useEffect(() => {
    let token = auth?.getIdToken(true).then((id) => {
      setToken(id)
    })
  })

  const handleOnSubmit = (category_name: string, name: string, condition: string, description: string,
    price: string, photo: string) => {
    if (isNaN(parseFloat(price)) || parseFloat(price) < 0) {
      toast({
        title: `Input a valid price.`,
        status: 'error',
        isClosable: true,
      })
      return;
    }
    if (auth && name.length > 0 && condition.length > 0 && description.length > 0 && photo.length > 0) {
      createUser(auth).then(response => {
        if (response !== null) {
          let data: Product = {
            id: uuidv4(),
            seller_id: response.id,
            name: name,
            description: description,
            condition: condition,
            price: parseFloat(price),
            category_name: category_name,
            photo: photo
          }
          if (token !== '') {
            addListing(data, token)
          }
          toast({
            title: `Success!`,
            status: 'success',
            isClosable: true,
          })
          Router.push('/sell')
        }
      });
    } else {
      toast({
        title: `Select valid inputs.`,
        status: 'error',
        isClosable: true,
      })
    }
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  return (
    <Flex align="center" justify="center">
      <Box bg="white" rounded="md">
        <Formik
          initialValues={{
            category: categories[0],
            name: '',
            condition: conditions[0],
            price: '',
            photo: 'https://placehold.jp/250x250.png'
          }}
          onSubmit={(values) => {
            handleOnSubmit(values.category, values.name, values.condition, description,
              price, values.photo);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={2} align="center">
                <Text
                  fontSize='2xl'
                  fontWeight='bold'
                >
                  Add a new listing
                </Text>
                <Text
                  fontSize='xl'
                  fontWeight='semibold'
                >
                  Category
                </Text>
                <Field
                  as={Select}
                  id="category"
                  name="category"
                >
                  {
                    categories.map((category, index) => (
                      <option
                        key={index}
                        value={category}
                      >
                        {category}
                      </option>
                    ))
                  }
                </Field>
                <Text
                  fontSize='xl'
                  fontWeight='semibold'
                >
                  Item Name
                </Text>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  placeholder='Item name'
                />
                <Text
                  fontSize='xl'
                  fontWeight='semibold'
                >
                  Condition
                </Text>
                <Field
                  as={Select}
                  id="condition"
                  name="condition"
                >
                  {
                    conditions.map((condition, index) => (
                      <option
                        key={index}
                        value={condition}
                      >
                        {condition}
                      </option>
                    ))
                  }
                </Field>
                <Text
                  fontSize='xl'
                  fontWeight='semibold'
                >
                  Price
                </Text>
                <HStack
                  spacing={0}
                  border='1px'
                  borderColor='blackAlpha.200'
                  borderRadius='md'
                  w='100%'
                >
                  <Icon as={FaDollarSign} />
                  <Input onChange={handleChange} border='hidden' padding={0} focusBorderColor='transparent'/>
                </HStack>

                <Text
                  fontSize='xl'
                  fontWeight='semibold'
                >
                  Description
                </Text>
                <Field
                  as={Textarea}
                  id="description"
                  name="description"
                  onChange={handleDescriptionChange}
                  placeholder='Description'
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
  )
}

export default CreateListing