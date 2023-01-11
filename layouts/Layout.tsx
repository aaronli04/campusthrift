import React from 'react'

import MobileLayout from './MobileLayout'

interface Props {
    children: React.ReactNode
}

const Layout : React.FC<Props> = ({ children }) => {
  return (
    <MobileLayout>
        {children}
    </MobileLayout>
  )
}

export default Layout