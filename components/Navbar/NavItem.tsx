import React from 'react'

import {
    Icon,
    VStack,
    Text
} from '@chakra-ui/react'

import { Route } from './routes'
import Link from 'next/link'

interface Props {
    route: Route
    active: boolean
}

const NavItem : React.FC<Props> = ({ route, active }) => {
  return (
    <Link
        href={route.path}
    >
        <VStack
            spacing={0}
        >
            <Icon 
                as={route.icon}
                color={active ? 'blue.500' : 'gray.500'}
                w={6}
                h={6}
            />
            <Text
                fontSize='sm'
                color={active ? 'blue.500' : 'gray.500'}
            >
                {route.title}
            </Text>
        </VStack>
    </Link>
    
  )
}

export default NavItem