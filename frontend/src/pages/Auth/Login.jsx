import React from 'react'
import AuthLayout from '../../components/layout/AuthLayout'

const Login = () => {
  return (
    <AuthLayout>
      <div className='flex justify-center h-3/4 flex-col lg:w-[70%] md:h-full'>
        <h1 className='text-xl font-semibold text-black'>Welcome Back</h1>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to get logged in
        </p>
      </div>
    </AuthLayout>
  )
}

export default Login;