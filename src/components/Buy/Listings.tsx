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
import { Item } from '../../hooks/types';
import useDeviceSize from '../../hooks/useDeviceSize';
import SortedListings from './SortedListings';

interface Props {
    listings: Item[]
}

const Listings: React.FC<Props> = ({ listings }) => {

    const [sort, setSort] = React.useState<number>(0);

    const options = [
        "Default",
        "Low Price",
        "High Price"
    ]

    const [width, height] = useDeviceSize();

    return (
        <VStack
            alignItems='flex-start'
        >
            <HStack justifyContent='center' gap={width / 2.34}>
                {listings.length === 0 ? <Text fontSize='lg'> No listings shown </Text> : <Text fontSize='lg'> {listings.length} listings shown </Text>
                }
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Sort by:
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => setSort(0)}>{options[0]}</MenuItem>
                        <MenuItem onClick={() => setSort(1)}>{options[1]}</MenuItem>
                        <MenuItem onClick={() => setSort(2)}>{options[2]}</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
            <SortedListings shownListings={listings} option={options[sort]} />
        </VStack>
    )
}

export default Listings