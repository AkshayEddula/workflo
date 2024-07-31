'use client'
import { useGlobalContext } from '@/app/Context/store'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SignUp = () => {

  const [togglepassword, setTogglePassword] = useState(false);
  const { signupData, setSignupData } = useGlobalContext();
  const [Isdisabled, setIsdisabled] = useState(false);
  const [error, setError] = useState('');
  const { push } = useRouter();

  const handleSubmit = () => {
    if(!signupData.email || !signupData.username || !signupData.password){
      alert('Please fill all fields');
      return;
    }
    if(signupData.password.length < 6){
      alert('Password should be at least 6 characters long');
      return;
    }
    setIsdisabled(true);

    axios.post('http://localhost:5000/auth/signup', signupData)
    .then((res) => {
      setSignupData({
        username: '',
        email: '',
        password: ''
      })
      setIsdisabled(false);
      push('/auth/login',)
    })
    .catch((err) => {
      {err && setError(err.response.message)}
    })
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData({...signupData, [name] : value});
  }

  console.log(signupData)

  return (
    <div className='bg-gradient-to-b from-[#FFFFFF] to-[#AFA3FF] h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-8 p-[60px] bg-gradient-to-b from-[#F7F7F7] to-[#F0F0F0] border-2 border-[#CECECE] rounded-2xl'>
        <div>
          <h1 className='font-semibold text-center text-[#2D2D2D] text-[48px]'>Welcome to <span className='text-[#4534AC]'>Workflo</span>!</h1>
        </div>
        <div className='flex flex-col gap-[22px]'>
          <div className='flex flex-col gap-6'>
          <input value={signupData.username} onChange={changeHandler} className='w-full bg-[#EBEBEB] px-3 py-4 rounded-lg text-[#606060] text-xl font-normal focus:outline-none border-2 border-[#EBEBEB] focus:border-[#999999]' type="text" name='username' placeholder='Full name' />
          <input value={signupData.email} onChange={changeHandler} className='w-full bg-[#EBEBEB] px-3 py-4 rounded-lg text-[#606060] text-xl font-normal focus:outline-none border-2 border-[#EBEBEB] focus:border-[#999999]' type="email" placeholder='Your email' name='email' />
            <div className='relative flex items-center'>
              <input value={signupData.password} onChange={changeHandler} className='w-full bg-[#EBEBEB] px-3 pr-10 py-4 rounded-lg text-[#606060] text-xl font-normal focus:outline-none border-2 border-[#EBEBEB] focus:border-[#999999]' type={togglepassword ? 'text' : 'password'} name='password'  placeholder='Password' />
              <Image onClick={() => setTogglePassword(prev => !prev)}  className='absolute top-5 right-4 cursor-pointer' src='/images/eye.svg' width={24} height={24} alt='eye' />
            </div>
          </div>
          <button onClick={handleSubmit} className={`w-full bg-gradient-to-b to-[#4C38C2] from-[#2F2188] ${Isdisabled && 'to-[#4C38C2] from-[#6a6681]'} text-xl font-normal text-white p-2 rounded-lg`} type="submit" disabled={Isdisabled} >Sign up</button>
        </div>
        <div>
          <p className='text-center text-[#606060] text-xl font-normal'>Already have an account? <Link className='text-[#0054A1]' href='/auth/login'>Log in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp