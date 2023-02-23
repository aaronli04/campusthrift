import {
  VStack,
  Text
} from '@chakra-ui/react';
import React from 'react'
import { UserData } from '../../hooks/types'

interface Props {
  user: UserData;
}

const MyProfile: React.FC<Props> = ({ user }) => {
  return (
    <VStack>
      <Text>
        Profile Information
      </Text>
    </VStack>
  )
}

export default MyProfile