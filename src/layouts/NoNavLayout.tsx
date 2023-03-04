import React from 'react'

import {
  Flex
} from '@chakra-ui/react'

import { navbarHeight } from '../components/Navbar'

interface Props {
    children: React.ReactNode
}

const NoNavLayout : React.FC<Props> = ({ children }) => {
  return (
    <Flex
      minH='100vh'
      direction='column'
      position='relative'
      alignItems='center'
      justifyContent='center'
      gap={75}
    >
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

export default NoNavLayout