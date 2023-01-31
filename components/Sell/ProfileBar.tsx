import {
    Avatar,
    HStack,
    Text,
    VStack
} from '@chakra-ui/react'
import React from 'react'
import { UserData } from '../../types/user'

interface Props {
    user: UserData
}

const ProfileBar : React.FC<Props>  = ( { user } ) => {
    const [userTransactionsText, setUserTransactionsText] = React.useState<String>("")
    const [userFollowersText, setUserFollowersText] = React.useState<String>("")

    React.useEffect(() => {
        if (user.transactions.length == 1) {
            setUserTransactionsText(`${user.transactions.length} transaction`)
        } else {
            setUserTransactionsText(`${user.transactions.length} transactions`)
        }
        if (user.followers.length == 1) {
            setUserFollowersText(`${user.followers.length} follower`)
        } else {
            setUserFollowersText(`${user.followers.length} followers`)
        }
    }, [])

    return (
        <HStack alignItems='flex-start'>
            <Avatar size='xl' name={user.firstName + user.lastName} src={user.profilePicture} />
            <VStack alignItems='flex-start'>
                <Text>
                    {user.firstName +  " " + user.lastName}
                </Text>
                <Text>
                    {user.school}
                </Text>
            </VStack>
            <Text>
                {userTransactionsText}
            </Text>
            <Text>
                {userFollowersText}
            </Text>
        </HStack>
    )
}

export default ProfileBar