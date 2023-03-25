import {
    Button,
    Link
} from '@chakra-ui/react'
import React from 'react'

const NewListingButton = () => {
    return (
        <Button colorScheme='blackAlpha'>
            <Link href='/sell/new' style={{ textDecoration: 'none' }}>
                + New Listing
            </Link>
        </Button>
    )
}

export default NewListingButton