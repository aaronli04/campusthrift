import React from 'react'

import routes from './routes'

import {
    Flex,
    Link,
    Image,
    HStack,
    Text
} from '@chakra-ui/react'

import NavItem from './NavItem';

import { useRouter } from 'next/router';
import Searchbar from './Search/Searchbar';

export const navbarHeight = 4;

const Navbar: React.FC = () => {

    const router = useRouter();

    const isActive = (path: string) => {
        return router.asPath === path;
    }

    return (
        <HStack
            alignItems='center'
            justifyContent='center'
            gap={5}
            w='100%'
        >
            <Link href='/'>
                <Image
                    height={40}
                    width={40}
                    src="/logo.png"
                    alt='campusthrift logo'
                />
            </Link>
            <Searchbar />
            <Flex
                bg='white'
                gap={15}
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
        </HStack>
    )
}

export default Navbar