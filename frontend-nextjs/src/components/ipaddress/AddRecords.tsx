import React, { useState } from 'react';
import { IpAddressProps, useIpAddressContext } from './IpAddressProvider';

function AddRecords() {
  const [value, setValue] = useState('');
  const [label, setLabel] = useState('');
  const { addRecord } = useIpAddressContext();

  const handleAdd = () => {
    const newRecord: IpAddressProps = {
      value,
      label,
    };
    addRecord(newRecord);
    setValue('');
    setLabel('');
  };

  return (
    <div className="p-4 bg-secondary h-[150px]">
      <h3 className='font-bold text-xl'>Add New Ip Address</h3>
      <div className='flex mt-3'>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="IP Address"
          className="border p-2"
        />
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Label"
          className="border p-2 ml-2"
        />
        <button onClick={handleAdd} className="ml-2 p-2 bg-blue-500 text-white">
          Add Record
        </button>
        <button className="ml-2 p-2 bg-blue-500 text-white">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddRecords;
