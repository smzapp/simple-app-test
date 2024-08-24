import { API_URL } from '@/config/app.config';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react'

interface IpAddressProps {
  items: any
}

  
function ListItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function loadData() {
  //     try {
  //       setLoading(true);
  //       const result = await axios.get(API_URL + '/ip-addresses', {
  //         headers: {
  //           Authorization: `Bearer`
  //         }
  //       });
  //       console.log(result);
        
  //     } catch(e) {
  //       console.log(e);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadData();
  // }, [])

  return (
    <div>ListItems</div>
  )
}


export default ListItems