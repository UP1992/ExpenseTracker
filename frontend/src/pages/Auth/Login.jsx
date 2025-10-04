import React, { useState } from 'react'
import AuthLayout from '../../components/layout/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please enter a valid email address");
      return;
    }

    if(!password){
      setError("Please enter your password");
      return;
    }

    setError('');

    //Login API call
  }
  return (
    <AuthLayout>
      <div className='flex justify-center h-3/4 flex-col lg:w-[70%] md:h-full'>
        <h1 className='text-xl font-semibold text-black'>Welcome Back</h1>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to get logged in
        </p>

        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
          <Input 
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <Input 
            label="Password"
            type="password"
            placeholder="Min 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

          <button type="submit" className='btn-primary'>
            LOGIN
          </button>

          <p className='text-[13px] text-slate-800 mt-3'>
            Don't have an account? {" "}
            <Link className='font-medium text-primary underline' to="/signup">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login;