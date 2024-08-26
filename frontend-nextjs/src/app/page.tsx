import { Metadata } from 'next'
import React from 'react'
import IpAddress from '@/components/ipaddress/Index'

export const metadata: Metadata = {
  title: 'Manage Ip Address - by Samuel Amador'
}


export default async function page() {
  return (
    <div className='bg-primary'>
      <div className='container-lg mx-auto'>
        <IpAddress />
      </div>
    </div>
  )
}
