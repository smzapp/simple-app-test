'use client';
import React from 'react'
import ListItems from './ListItems';
import AddEntry from './AddEntry';
import { useRouter } from 'next/router';


function IpAddress() {
  const router = useRouter();

  console.log(router.query);
  

  // if(param == 'add') {
  //   return <AddEntry />
  // }

  return <ListItems />
}

export default IpAddress