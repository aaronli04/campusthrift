import React from 'react'

import {
    Button,
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

const NavItem: React.FC<Props> = ({ route, active }) => {
    return (
        <Button
            colorScheme='blackAlpha'
            variant='unstyled'
        >
            <Link
                href={route.path}
            >
                <Text
                    fontSize='md'
                    color='black'
                >
                    {route.title}
                </Text>

            </Link>
        </Button>
    )
}

export default NavItem