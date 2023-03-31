import React, { useEffect, useState } from 'react'
import {
  Flex,
  VStack
} from '@chakra-ui/react'
import ProfileBar from './ProfileBar'
import ForSale from './ForSale'
import PastSales from './PastSales'
import useAuth from '../../hooks/useAuth'
import {
  FirebaseUser,
  Item,
  UserData
} from '../../hooks/types'
import defaultData from '../utility/data/defaultFirebaseUser'
import useSell from '../../hooks/useSell'
import Loading from '../Loading'
import { useRouter } from 'next/router'

const Sell: React.FC = () => {
  const [userData, setUserData] = useState<FirebaseUser>(defaultData)
  const [userListings, setUserListings] = useState<Item[]>([])
  const [token, setToken] = useState<string>('')
  const { auth, createUser } = useAuth();
  const { getMyListings } = useSell();
  const [activeListings, setActiveListings] = useState<Item[]>([])
  const [listingsSold, setListingsSold] = useState<Item[]>([])
  const [completeUserData, setCompleteUserData] = useState<UserData>()

  useEffect(() => {
    //get active and past listings of user
    async function fetchListings() {
      if (auth) {
        const token = await auth.getIdToken()
        setToken(token)
      }
      const listings = await getMyListings(userData.id, token);
      setUserListings(listings)
      let activeListings: Item[] = [];
      let listingsSold: Item[] = [];
      for (let i = 0; i < listings.length; ++i) {
        if (listings[i].transaction_id === null) {
          activeListings.push(listings[i])
        } else {
          listingsSold.push(listings[i])
        }
        setActiveListings(activeListings)
        setListingsSold(listingsSold)
        const completeUserData = await handleUserData(activeListings, listingsSold, userData)
        setCompleteUserData(completeUserData)
      }
    }
    // build complete userData from FirebaseUser and Listings
    async function handleUserData(activeListings: Item[], listingsSold: Item[], userData: FirebaseUser) {
      const completeUserData: UserData = {
        email: userData.email,
        id: userData.id,
        username: userData.username,
        profilePicture: userData.profilePicture,
        school: userData.school,
        listingsPosted: activeListings,
        listingsSold: listingsSold,
        type: userData.type
      }
      return completeUserData
    }
    if (auth) {
      createUser(auth).then(response => {
        if (response !== null) {
          setUserData(response);
        }
      })
      fetchListings();
    }
  }, [userListings])

  if (!completeUserData) {
    return <Loading />
  }

  return (
    <Flex direction="row" w="100%" gap={12} flex={1}>
      <VStack gap={5}>
        <ProfileBar user={completeUserData} />
        <VStack spacing={20}>
          <ForSale user={completeUserData} />
          <PastSales user={completeUserData} />
        </VStack>
      </VStack>
    </Flex>
  )
}

export default Sell