'use client'
import { useGlobalContext } from '@/app/Context/store'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Hero = () => {

    const { userInfo } = useGlobalContext();

    useEffect(() => {
        axios.get(`http://localhost:5000/task/alltasks/${userInfo.id}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        })
    },[userInfo.id])

    

  return (
    <div className='w-full'>
        <div className='w-full flex items-center justify-between'>
            <h1 className='text-[48px] font-semibold text-[#080808]'>Good morning, {userInfo.name}!</h1>
            <Link href="/" className='flex items-center gap-2 text-base font-medium text-[#080808]'>Help & feedback<Image src='/images/question.svg' width={24} height={24} alt='questionMark' /></Link>
        </div>
        <div className='flex items-center gap-2 my-4'>
            <div className='w-fill flex gap-2.5 bg-white p-4 rounded-lg'>
                <Image src='images/img1.svg' width={77} height={61} alt='feature1'/>
                <div className='flex flex-col'>
                    <h1 className='text-base font-semibold text-[#757575]'>Introducing tags</h1>
                    <p className='text-sm font-medium text-[#868686]'>Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.</p>
                </div>
            </div>
            <div className='w-fill flex gap-2.5 bg-white p-4 rounded-lg'>
                <Image src='images/img1.svg' width={77} height={61} alt='feature1'/>
                <div className='flex flex-col'>
                    <h1 className='text-base font-semibold text-[#757575]'>Introducing tags</h1>
                    <p className='text-sm font-medium text-[#868686]'>Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.</p>
                </div>
            </div>
            <div className='w-fill flex gap-2.5 bg-white p-4 rounded-lg'>
                <Image src='images/img1.svg' width={77} height={61} alt='feature1'/>
                <div className='flex flex-col'>
                    <h1 className='text-base font-semibold text-[#757575]'>Introducing tags</h1>
                    <p className='text-sm font-medium text-[#868686]'>Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero