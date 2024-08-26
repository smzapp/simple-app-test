'use client';

import React from 'react'
import ListItems from './ListItems';

export interface IpAddressProps {
  id: number;
  value: string;
  label: string;
}

function Index () {
  return (
    <div className='flex'>
      <div className='w-1/2'>
       <ListItems />
      </div> 
    </div>
  )
}

export default Index