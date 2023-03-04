import React from 'react'

import {
  Flex
} from '@chakra-ui/react'

import Navbar, { navbarHeight } from '../components/Navbar'

interface Props {
    children: React.ReactNode
}

const Layout : React.FC<Props> = ({ children }) => {
  return (
    <Flex
      minH='100vh'
      direction='column'
      position='relative'
      alignItems='center'
      gap={0}
    >
      <Navbar />
      <Flex
        flex={1}
        direction='column'
        pb={`${navbarHeight + 2}rem`}
        justifyContent='center'
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout