import React from 'react'

import routes from './routes'

import {
    Button,
    Flex,
    Link,
    Image,
    HStack
} from '@chakra-ui/react'

import NavItem from './NavItem';

import { useRouter } from 'next/router';
import Searchbar from '../Search/Searchbar';


export const navbarHeight = 4;

const Navbar: React.FC = () => {

    const router = useRouter();

    const isActive = (path: string) => {
        return router.asPath === path;
    }

    return (
        <HStack
            top={10}
            position='relative'
            alignItems='space-between'
            gap={15}
            width='90%'
        >
            <Link
                href='/'
            >
                <Button
                    colorScheme='brand'
                >
                    <Image
                        height={150}
                        width={150}
                        src="/logo.png"
                        alt='campusthrift logo'
                    />
                </Button>
            </Link>
            <Searchbar />
            <Flex
                bg='white'
                gap={20}
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