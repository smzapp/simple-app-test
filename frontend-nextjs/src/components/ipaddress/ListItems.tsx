'use client';

import {  BASE_URL } from '@/config/app.config';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IpAddressProps } from './Index';

  
function ListItems() {
  const [items, setItems] = useState<IpAddressProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        setLoading(true);
        const response = await axios.get(BASE_URL + '/api/ip-address');
        setItems(response.data);
      } catch(e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    fetchIpAddress();
  }, []);

  if(loading) {
    return <p>loading...</p>
  }

  return (
    <table className="border-collapse border border-slate-400 w-full">
      <thead className='bg-lightGray'>
        <tr className='text-left'>
          <th>#</th>
          <th>Ip Address</th>
          <th>Label</th>
          <th>Edit</th>
          <th>Logs</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((item : IpAddressProps) => (
            <tr key={item.id} className='border border-gray text-left'>
              <td>{item.id}</td>
              <td>{item.value}</td>
              <td>{item.label}</td>
              <td>Edit</td>
              <td>View</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}


export default ListItems