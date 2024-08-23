import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Login Here",
};


export default function Login() {
  return (
    <form className='bg-primary h-screen flex justify-center items-center'>
      <div className='w-[400px] mx-auto h-[300px] bg-lightGray p-3'>
        <h1>Login here</h1>
        <div className='mt-7 mb-5'>
          <input type='text' className='w-full px-2 py-2' placeholder='Your email address'/>
        </div>
        <div className='mb-9'>
          <input type='text' className='w-full px-2 py-2' placeholder='Your password' />
        </div>
        <button type='submit' className='bg-primary py-2 px-5 text-white rounded hover:bg-secondary'>Login</button>
      </div>
    </form>
  )
}
