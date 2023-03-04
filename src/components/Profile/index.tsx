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
import useDeviceSize from '../../hooks/useDeviceSize'

const Profile: React.FC = () => {
    const [width, height] = useDeviceSize();
    return (
        <Tabs variant='line' colorScheme='black' w={width / 2} h={height / 1.2}>
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