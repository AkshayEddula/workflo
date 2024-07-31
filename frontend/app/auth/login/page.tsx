'use client'
import { useGlobalContext } from '@/app/Context/store'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
  const [togglepassword, setTogglePassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(false);
  const { push } = useRouter();
  const { loginData, setLoginData, setUserInfo } = useGlobalContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  const handleSubmit = async () => {
    if (!loginData.email || !loginData.password) {
      alert('Please fill all fields');
      return;
    }
    if (loginData.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    setIsDisabled(true);

    try {
      const res = await axios.post('http://localhost:5000/auth/login', loginData);
      setLoginData({ email: '', password: '' });
      setUserInfo({ id: res.data._id, name: res.data.username });
      push('/');
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsDisabled(false);
    }
  }

  return (
    <div className='bg-gradient-to-b from-[#FFFFFF] to-[#AFA3FF] h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-8 p-[60px] bg-gradient-to-b from-[#F7F7F7] to-[#F0F0F0] border-2 border-[#CECECE] rounded-2xl'>
        <div>
          <h1 className='font-semibold text-center text-[#2D2D2D] text-[48px]'>
            Welcome to <span className='text-[#4534AC]'>Workflo</span>!
          </h1>
        </div>
        <div className='flex flex-col gap-[22px]'>
          <div className='flex flex-col gap-6'>
            <input
              value={loginData.email}
              onChange={handleChange}
              className='w-full bg-[#EBEBEB] px-3 py-4 rounded-lg text-[#606060] text-xl font-normal focus:outline-none border-2 border-[#EBEBEB] focus:border-[#999999]'
              name='email'
              type="email"
              placeholder='Your email'
            />
            <div className='relative flex items-center'>
              <input
                value={loginData.password}
                onChange={handleChange}
                className='w-full bg-[#EBEBEB] px-3 pr-10 py-4 rounded-lg text-[#606060] text-xl font-normal focus:outline-none border-2 border-[#EBEBEB] focus:border-[#999999]'
                type={togglepassword ? 'text' : 'password'}
                name='password'
                placeholder='Password'
              />
              <Image
                onClick={() => setTogglePassword(prev => !prev)}
                className='absolute top-5 right-4 cursor-pointer'
                src={togglepassword ? '/images/eye-off.svg' : '/images/eye.svg'}
                width={24}
                height={24}
                alt={togglepassword ? 'Hide password' : 'Show password'}
              />
            </div>
          </div>
          {error && <p className='text-red-500 text-center'>Invalid email or password</p>}
          <button
            onClick={handleSubmit}
            className={`w-full bg-gradient-to-b from-[#4C38C2] to-[#2F2188] ${isDisabled && 'to-[#4C38C2] from-[#6a6681]'} text-xl font-normal text-white p-2 rounded-lg`}
            type="submit"
            disabled={isDisabled}
          >
            {isDisabled ? <div className="loader"></div> : 'Login'}
          </button>
        </div>
        <div>
          <p className='text-center text-[#606060] text-xl font-normal'>
            Don&apos;t have an account? Create a <Link className='text-[#0054A1]' href='/auth/signup'>new account</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
