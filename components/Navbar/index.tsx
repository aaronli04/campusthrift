import React from 'react'

import routes from './routes'

import {
    Flex
} from '@chakra-ui/react'

import NavItem from './NavItem';

import { useRouter } from 'next/router';

export const navbarHeight = 4;

const Navbar : React.FC = () => {

    const router = useRouter();

    const isActive = (path : string) => {
        return router.asPath === path;
    }

    return (
        <Flex
            w='100%'
            justifyContent='space-between'
            align='center'
            px={4}
            position='fixed'
            bottom={0}
            bg='white'
            height={`${navbarHeight}rem`}
        >
            {
                routes.map((route, index) => (
                    <NavItem 
                        key={index} 
                        route={route}
                        active={isActive(route.path)}
                    />
                ))
            }
        </Flex>
    )
}

export default Navbar