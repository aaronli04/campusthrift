import React from 'react'

import {
    Image,
    Text,
    VStack
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
            <Text
                fontSize='md'
                color='black'
            >
                {route.title}
            </Text>
        </VStack>
    </Link>
    
  )
}

export default NavItem