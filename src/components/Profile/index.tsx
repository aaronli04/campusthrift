import React from 'react'
import {
    TabList,
    Tabs,
    Tab,
    TabPanels,
    TabPanel
} from '@chakra-ui/react'
import Purchases from './Purchases'
import users from '../utility/data/users/userData'
import MyProfile from './MyProfile'
import SignOut from './SignOut'

const Profile: React.FC = () => {
    return (
        <Tabs variant='line' w={1000} colorScheme='black'>
            <TabList>
                <Tab>Purchases</Tab>
                <Tab>My Profile</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Purchases user={users[0]} />
                </TabPanel>
                <TabPanel>
                    <MyProfile user={users[0]} />
                    <SignOut />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Profile