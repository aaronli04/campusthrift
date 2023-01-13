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
            <HStack
                width='45%'
                spacing={0}
                border='1px solid black'
            >
                <Input placeholder='Search' border='hidden' focusBorderColor='transparent'/>
                <IconButton
                    variant='ghost'
                    bg='white'
                    aria-label='Search database'
                    icon={<SearchIcon />}
                />
            </HStack>
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