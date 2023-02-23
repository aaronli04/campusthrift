import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React from 'react'
import useAuth from '../../hooks/useAuth'


const SignOut: React.FC = () => {

    const { signOut } = useAuth();
    const router = useRouter();
    const handleSignOut = () => {
        signOut();
        router.push('/')
    }

  return (
    <Button onClick={handleSignOut}>
        Sign Out
    </Button>
  )
}

export default SignOut