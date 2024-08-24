import { BASE_URL } from '@/config/app.config'
import Link from 'next/link'
import React from 'react'

export default function MainMenu() {
  return (
    <ul className='flex space-x-3 mb-10'>
        <li><Link href={BASE_URL + '/dashboard?action=list'}>List</Link> </li>
        <li><Link href={BASE_URL + '/dashboard?action=add'}>Add New</Link></li>
    </ul>
  )
}
