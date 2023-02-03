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
import { UserData } from '../../hooks/types'

interface Props {
    user: UserData
}

const ProfileBar: React.FC<Props> = ({ user }) => {
    const [userTransactionsText, setUserTransactionsText] = React.useState<String>("")
    const [userFollowersText, setUserFollowersText] = React.useState<String>("")

    React.useEffect(() => {
        if (user.listingsSold.length == 1) {
            setUserTransactionsText(`${user.listingsSold.length} transaction`)
        } else {
            setUserTransactionsText(`${user.listingsSold.length} transactions`)
        }
        if (user.followers.length == 1) {
            setUserFollowersText(`${user.followers.length} follower`)
        } else {
            setUserFollowersText(`${user.followers.length} followers`)
        }
    }, [])

    return (
        <HStack justifyContent='space-between' alignItems='flex-start' w={1000}>
            <HStack alignItems='flex-start' spacing={5}>
                <Avatar size='xl' name={user.firstName + user.lastName} src={user.profilePicture} />
                <VStack alignItems='flex-start' spacing={0}>
                    <Text fontSize='3xl' fontWeight='bold'>
                        {user.firstName + " " + user.lastName}
                    </Text>
                    <Text>
                        {user.school}
                    </Text>
                </VStack>
                <Divider orientation='vertical' h={20} />
                <Text>
                    {userTransactionsText}
                </Text>
                <Divider orientation='vertical' h={20} />
                <Text>
                    {userFollowersText}
                </Text>
            </HStack>
            <Button colorScheme='blackAlpha'>
                <Link href='/sell/new' style={{ textDecoration: 'none' }}>
                    + New Listing
                </Link>
            </Button>
        </HStack>
    )
}

export default ProfileBar