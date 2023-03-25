import {
    Avatar,
    Button,
    Divider,
    HStack,
    Link,
    Text,
    VStack
} from '@chakra-ui/react'
import React from 'react'
import { FirebaseUser } from '../../hooks/types'
import NewListingButton from './CreateListing/Button'

interface Props {
    user: FirebaseUser
}

const ProfileBar: React.FC<Props> = ({ user }) => {

    return (
        <HStack justifyContent='space-between' alignItems='flex-start' gap={20}>
            <HStack alignItems='flex-start' spacing={5}>
                <Avatar size='xl' name={user.username} src={user.profilePicture} />
                <VStack alignItems='flex-start' spacing={0}>
                    <Text fontSize='3xl' fontWeight='bold'>
                        {user.username}
                    </Text>
                    <Text>
                        {user.school}
                    </Text>
                </VStack>
                <Divider orientation='vertical' h={20} />
                {/* <Text>
                    {user.listingsSold.length} listings sold
                </Text> */}
            </HStack>
            <NewListingButton />
        </HStack>
    )
}

export default ProfileBar