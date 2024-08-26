'use client';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { API_URL, BASE_URL } from '@/config/app.config';
import { authHeader } from '@/services/Auth.service';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import React, { useEffect, useState } from 'react'

interface IpAddressProps {
  items: any
}

  
function ListItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get(BASE_URL + '/api/ip-address');
        console.log(response);
      } catch(e) {
        console.log(e);
      }
  
    }

    fetchIpAddress();
  }, []);

  return (
    <div>ListItems</div>
  )
}


export default ListItems