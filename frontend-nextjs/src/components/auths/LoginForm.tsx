'use client'

import { API_URL, BASE_URL } from '@/config/app.config';
import { afterSignInHandler } from '@/services/Auth.service';
import { get_email_regex } from '@/utils/regex.util';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export type LoginFormValues = {
  email: string;
  password: string;
  token: string;
};

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
    },
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitHandler = async (form: LoginFormValues) => {
    try {
      setLoading(true);
      const result = await axios.post(API_URL + '/auth/login', {
        email: form.email,
        password: form.password
      });
      
      const {data} = result.data;

      const payload = afterSignInHandler(data);

      signIn('credentials', payload)
        .then((res) => {
          router.push(BASE_URL + '/dashboard');
          return true;
        })
        .catch((error) => setErrorMessage('Something went wrong.'))

    } catch (e) {
      setErrorMessage('Invalid credentials');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmitHandler)}
      className='bg-primary h-screen flex justify-center items-center' 
      >
      <div className='w-[400px] mx-auto h-[300px] bg-lightGray p-3'>
        <h1>Login here</h1>
        <div className='mt-7 mb-5'>
          <input type='text' 
            className='w-full px-2 py-2' 
            placeholder='Your email address'
            {...register('email', {required: 'Email address is required.', pattern: {
              value: get_email_regex(),
              message: 'Invalid email address'
            }})}
          />
          {errors.email && <p className='text-danger text-sm'>{errors.email.message}</p>}
        </div>
        <div className='mb-9'>
          <input type='password' 
            className='w-full px-2 py-2' 
            placeholder='Your Password'
            {...register('password', {required: 'Password is required.'})}
          />
          {errors.password && <p className='text-danger text-sm'>{errors.password.message}</p>}
        </div>
        <button type='submit' className='bg-primary py-2 px-5 text-white rounded hover:bg-secondary' disabled={loading}>
          {loading ? 'Loading' : 'Login'}
        </button>
        {errorMessage && <p className='text-danger text-sm mt-4'>{errorMessage}</p>}
      </div>
  </form>
  )
}

export default LoginForm