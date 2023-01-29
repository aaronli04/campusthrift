import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    VStack,
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
import SortedListings from './SortedListings';

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
                        <MenuItem onClick={() => setSort(0)}>{options[0]}</MenuItem>
                        <MenuItem onClick={() => setSort(1)}>{options[1]}</MenuItem>
                        <MenuItem onClick={() => setSort(2)}>{options[2]}</MenuItem>
                        <MenuItem onClick={() => setSort(3)}>{options[3]}</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
            <SortedListings option={options[sort]}/>
        </VStack>
    )
}

export default Listings