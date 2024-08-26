import React from 'react'
import { useIpAddressContext } from './IpAddressProvider';

export default function AllLogs() {
    
  const { selectedIpAddress } = useIpAddressContext();

  return (
    <div className='text-lightGray p-3'>
      <h2 className='font-bold'>Audit Trail</h2>
      <p className='text-sm'>Please Click view from any IP Address on the table shown.</p>
      <p>IP Address Selected: {selectedIpAddress?.value} </p>
      <div className='bg-lightGray px-2 py-1  mt-3 '>
      <table className='w-full text-black text-left'>
        <thead>
          <tr>
            <th>Old Value</th>
            <th>New Value</th>
          </tr>
        </thead>
        <tbody>
          {
            selectedIpAddress?.system_logs?.length == 0 ? <p>No Logs found</p> :
            selectedIpAddress?.system_logs?.map((item, index) => (
              <tr key={index}>
                <td>{item.old_value}</td>
                <td>{item.new_value}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}
