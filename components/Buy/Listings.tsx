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
import SortedListings from './SortedListings';

interface Props {
    listings: Item[]
}

const Listings: React.FC<Props> = ( { listings } ) => {
    
    const [sort, setSort] = React.useState<number>(0)
    const [shownListings, setShownListings] = React.useState<Item[]>(listings)
    const [listingsShownText, setListingsShownText] = React.useState<String>("")

    const options = [
        "Default",
        "Trending",
        "Low Price",
        "High Price"
    ]

    React.useEffect(() => {
        if (shownListings.length === 1) {
            setListingsShownText(`${shownListings.length} listing shown`)
        } else if (shownListings.length === 0) {
            setListingsShownText(`No listings shown`)
        }
        else {
            setListingsShownText(`${shownListings.length} listings shown`)
        }
    }, [shownListings])

    return (
        <VStack
            alignItems='flex-start'
        >
            <HStack justifyContent='space-between' spacing={615}>
                <Text
                    fontSize='lg'
                >
                    {listingsShownText}
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
            <SortedListings shownListings={shownListings} option={options[sort]}/>
        </VStack>
    )
}

export default Listings