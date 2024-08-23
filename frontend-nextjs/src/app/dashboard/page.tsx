import { Metadata } from 'next'
import React from 'react'


interface ProfileProps {
  session: any;
}

export const metadata: Metadata = {
    title: 'Dashboard'
}


const Dashboard: React.FC<ProfileProps> = () => {
  return (
    <div>page</div>
  )
}

export default Dashboard
