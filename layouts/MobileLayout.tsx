import React from 'react'

import {
  Flex,
  Box
} from '@chakra-ui/react'

import Navbar, { navbarHeight } from '../components/Navbar'

interface Props {
    children: React.ReactNode
}

const MobileLayout : React.FC<Props> = ({ children}) => {
  return (
    <Flex
      minH='100vh'
      direction='column'
      position='relative'
      alignItems='center'
      gap={100}
    >
      <Navbar />
      <Flex
        flex={1}
        direction='column'
        pb={`${navbarHeight + 2}rem`}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default MobileLayout