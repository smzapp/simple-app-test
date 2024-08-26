import { Metadata } from 'next'
import React from 'react'
import ListItems from '@/components/ipaddress/ListItems'

export const metadata: Metadata = {
  title: 'Manage Ip Address - by Samuel Amador'
}

export default async function page() {
  
  return (
    <div className='container mx-auto'>
      <ListItems />
    </div>
  )
}
