import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useIpAddressContext } from './IpAddressProvider';
import { BASE_URL } from '@/config/app.config';
import axios from 'axios';

interface FormValues {
  value: string;
  label: string;
}

function AddRecords() {  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>({
  defaultValues: {
    value: '',
    label: '',
  },
});
  const { addRecord, action, selectedIpAddress, setAction, refreshItems, setSelectedIpAddress } = useIpAddressContext();
  const [status, setStatus] = React.useState<{message: string, code: number} | undefined>(undefined);

  useEffect(() => {
    if (action === 'UPDATE' && selectedIpAddress) {
      setValue('value', selectedIpAddress.value, {shouldTouch: true, shouldDirty: true, shouldValidate: true});
      setValue('label', selectedIpAddress.label);
    } else {
      reset();
    }
  }, [action, selectedIpAddress, setValue, reset]);
  

  const onSubmit = async (data: FormValues) => {
    try {
      if (action === 'UPDATE' && selectedIpAddress?.id) {
        await axios.put(`${BASE_URL}/api/ip-address`, {
          id: selectedIpAddress.id,
          label: data.label,
          value: data.value
        });
        setStatus({ code: 201, message: 'Successfully updated record.' });
      } else {
        await axios.post(`${BASE_URL}/api/ip-address`, data);
        addRecord(data);
        setStatus({ code: 201, message: 'Successfully added new record.' });
      }
      refreshItems();
      reset();
      setSelectedIpAddress && setSelectedIpAddress(undefined);
    } catch (e: any) {
      const msg = e.response?.data?.error ?? 'Something went wrong';
      setStatus({ code: e.response?.status || 500, message: msg });
    }
  };

  return (
    <div className="p-4 bg-lightGray h-[150px]">
      <h3 className='font-bold text-xl'>
        {action == 'UPDATE' ? 'Update' : 'Add new'}&nbsp; IP Address</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex mt-3'>
        <div className=''>
          <input
            type="text"
            placeholder="IP Address"
            className={`border p-2 ${errors.value ? 'border-red-500' : ''}`}
            {...register('value', { required: 'IP Address is required' })}
          />
          {errors.value && <p className='text-red-500'>{errors.value.message}</p>}
        </div>

        <div className=''>
          <input
            type="text"
            placeholder="Label"
            className={`border p-2 ml-2 ${errors.label ? 'border-red-500' : ''}`}
            {...register('label', { required: 'Label is required' })}
          />
          {errors.label && <p className='text-red-500'>{errors.label.message}</p>}
        </div>

        <div className='group'>
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
            {action == 'UPDATE' ? 'Update' : 'Add Record'}
          </button>
          <button type="button" className="ml-2 p-2 bg-primary text-white" onClick={() => {
            reset()
            setAction && setAction(undefined)
          }}>
            Cancel
          </button>
        </div>
      </form>
      {status?.code !== 201 && <p className='text-danger'>{status?.message}</p>}
      {status?.code === 201 && <p className='text-success'>{status?.message}</p>}
    </div>
  );
}

export default AddRecords;
