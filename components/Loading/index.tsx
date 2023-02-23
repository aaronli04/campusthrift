import {
  Center,
  Spinner,
  VStack,
  Text
} from '@chakra-ui/react';
import React from 'react'

const Loading: React.FC = () => {
  return (
    <Center h="100vh">
      <VStack>
        <Spinner size="xl" />
        <Text>Loading...</Text>
      </VStack>
    </Center>
  );
}

export default Loading