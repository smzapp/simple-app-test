import React, { useEffect, useState } from 'react';
import { useIpAddressContext } from './IpAddressProvider';

function ListItems() {
  const { items, refreshItems, setSelectedIpAddress, setAction } = useIpAddressContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    refreshItems().finally(() => setLoading(false));
  }, [refreshItems]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <table className="border-collapse border border-slate-400 w-full">
      <thead className="bg-lightGray">
        <tr className="text-left">
          <th className='pl-2 py-2'>Ip Address</th>
          <th>Label</th>
          <th>Edit</th>
          <th>Logs</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, key) => (
          <tr key={key} className="border border-gray text-left bg-white text-sm">
            <td className='pl-2 py-2'>{item.value}</td>
            <td>{item.label}</td>
            <td title='Click to Update'>
              <button 
                onClick={() => {
                  setSelectedIpAddress(item)
                  setAction && setAction('UPDATE')}
                }
              >Edit</button>
            </td>
            <td title='Click to view Logs'>
              <button 
                onClick={() => {
                  setSelectedIpAddress(item)
                  setAction && setAction('VIEW_LOG')}
                }
              >View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListItems;
