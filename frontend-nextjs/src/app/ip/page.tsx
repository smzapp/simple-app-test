'use client'
import ListItems from '@/components/ipaddress/ListItems';
import { API_URL } from '@/config/app.config';
import axios from 'axios';
import { GetServerSideProps, Metadata } from 'next'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState }  from 'react'

export type IpAddressProps = {
  name: string
  stargazers_count: number
}
 
const Dashboard = async () => {

  const { data: session} = useSession();

  console.log(session);
  

  useEffect(() => {
    async function initialize() {
      try {
        const result = await axios.get(API_URL + '/ip-address', {
          headers: { Authorization: ''}
        });

      } catch(e) {
        
      }
    }
    initialize();
  }, []);

  return (
    <div className='container mx-auto py-4'>
      <ListItems />
    </div>
  )
}


export default Dashboard
