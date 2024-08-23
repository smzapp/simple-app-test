import LoginForm from '@/components/auths/LoginForm';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Login Here",
};

export default function Login() {
  return <LoginForm />
}
