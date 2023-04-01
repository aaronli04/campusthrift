import React, {
  MouseEvent,
  useRef,
  useState,
  useEffect
} from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Product } from '../../hooks/types'
import useAuth from '../../hooks/useAuth'
import useBuy from '../../hooks/useBuy'

interface Props {
  item: Product
}

const DeleteListingButton:React.FC<Props> = ( { item } ) => {
  const { auth } = useAuth();
  const { deleteListing } = useBuy();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const toast = useToast();
  const router = useRouter();
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    async function getIDToken() {
      if (auth) {
        const token = await auth.getIdToken()
        setToken(token)
      }
  }})

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    deleteListing(item, token)
    toast({
      title: `Success!`,
      status: 'success',
      isClosable: true,
    })
    router.push('/sell')
  }

  return (
    <>
      <Button colorScheme='red' onClick={onOpen}>
        Delete Listing
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Listing
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteListingButton