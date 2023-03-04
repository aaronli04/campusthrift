import { SearchIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Input } from '@chakra-ui/react'
import React from 'react'

const Searchbar: React.FC = () => {
    const [searchText, setSearchText] = React.useState<string>('')

    const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        location.href = `/search/${searchText}`
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            location.href = `/search/${searchText}`
        }
    }

    return (
        <HStack
            width='35%'
            spacing={0}
            border='1px solid black'
        >
            <Input placeholder='Search' border='hidden' focusBorderColor='transparent' onChange={handleSearchTextChange} onKeyDown={handleKeyDown} />
            <IconButton
                variant='ghost'
                aria-label='Search database'
                icon={<SearchIcon />}
                onClick={handleOnClick}
            />
        </HStack>
    )
}

export default Searchbar
