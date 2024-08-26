'use client';

import React from 'react';
import ListItems from './ListItems';
import AddRecords from './CreateUpdateRecord';
import {IpAddressProvider} from './IpAddressProvider';
import AllLogs from './AllLogs';

function Index() {
  return (
    <IpAddressProvider>
      <div className='flex'>
        <div className='w-3/5 bg-white'>
          <div className='overflow-auto h-screen'>
           <ListItems />
          </div>
        </div>
        <div className='w-full'>
          <AddRecords />
          <AllLogs />
        </div>
      </div>
    </IpAddressProvider>
  );
}

export default Index;
