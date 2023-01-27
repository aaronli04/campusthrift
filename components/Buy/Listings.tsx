import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    VStack,
    SimpleGrid,
    HStack,
    Text,
    Menu,
    MenuButton,
    Button,
    MenuItem,
    MenuList
} from '@chakra-ui/react';
import React from 'react'
import currentListings from '../utility/itemData';

import Listing from './Listing'

const Listings: React.FC = () => {
    
    const [sort, setSort] = React.useState<number>(0)
    const options = [
        "Default",
        "Trending",
        "Low Price",
        "High Price"
    ]

    return (
        <VStack
            alignItems='flex-start'
        >
            <HStack justifyContent='space-between' spacing={615}>
                <Text
                    fontSize='lg'
                >
                    {currentListings.length} listings shown
                </Text>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Sort by:
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Default</MenuItem>
                        <MenuItem>Trending</MenuItem>
                        <MenuItem>Low Price</MenuItem>
                        <MenuItem>High Price</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
            <SimpleGrid columns={4} spacing={5}>
                {
                    currentListings.map((listing, index) => (
                        <Listing
                            key={index}
                            listing={listing}
                        />
                    ))
                }
            </SimpleGrid>
        </VStack>
    )
}

export default Listings