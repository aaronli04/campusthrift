import React from 'react'

import routes from './routes'

import {
    Button,
    Card,
    Flex,
    Link,
    Image,
    Text,
    HStack,
    Input,
    IconButton
} from '@chakra-ui/react'

import NavItem from './NavItem';

import { useRouter } from 'next/router';
import { SearchIcon } from '@chakra-ui/icons';


export const navbarHeight = 4;

const Navbar: React.FC = () => {

    const router = useRouter();

    const isActive = (path: string) => {
        return router.asPath === path;
    }

    return (
        <HStack
            top={30}
            position='relative'
            alignItems='center'
            gap={15}
        >
            <Link
                href='/'
            >
                <Button
                    colorScheme='brand'
                >
                    <Image
                        height={100}
                        width={100}
                        src="/logo.png"
                        alt='campusthrift logo'
                    />
                </Button>
            </Link>
            <HStack
                width='30%'
                spacing={0}
            >
                <Input placeholder='Search' />
                <IconButton
                    aria-label='Search database'
                    icon={<SearchIcon />}
                />
            </HStack>
            <Flex
                width='50%'
                justifyContent='space-between'
                bg='white'
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