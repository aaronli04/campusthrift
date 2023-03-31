import React from 'react'
import {
    TabList,
    Tabs,
    Tab,
    TabPanels,
    TabPanel
} from '@chakra-ui/react'
import Purchases from './Purchases'
import UpdateProfile from './UpdateProfile'
import SignOut from './SignOut'
import useDeviceSize from '../../hooks/useDeviceSize'

const Profile: React.FC = () => {
    const [width, height] = useDeviceSize();
    return (
        <Tabs variant='line' colorScheme='black' w={width / 1.5} h={height / 1.2}>
            <TabList>
                <Tab>Purchases</Tab>
                <Tab>Update Profile</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    {/* <Purchases user={users[0]} /> */}
                </TabPanel>
                <TabPanel>
                    <UpdateProfile />
                    <SignOut />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Profile