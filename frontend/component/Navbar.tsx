'use client'

import Image from 'next/image'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import { useGlobalContext } from '@/app/Context/store';


const Navbar = () => {

    const { isModalOpen, setIsModalOpen, userInfo } = useGlobalContext();

    return (
        <div className=' flex flex-col justify-between w-full max-w-[330px] bg-white px-4 py-6 border-r-2'>
            <div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-3'>
                        <Image priority={false} src='/images/profile.png' width={31} height={31} alt='Profile-Img' />
                        <h1 className='font-medium text-xl'>{userInfo.name ? userInfo.name : 'Joe Gardner'}</h1>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-5 my-2'>
                            <Image src='/images/bell.svg' width={24} height={24} alt='bellIcon' />
                            <Image src='/images/sun.svg' width={24} height={24} alt='sunIcon' />
                            <Image src='/images/arrow.svg' width={24} height={24} alt='arrowIcon' />
                        </div>
                        <div>
                            <button className='bg-[#F4F4F4] text-[#797979] px-2 py-2 rounded-sm'><Link href='/auth'>Logout</Link></button>
                        </div>
                    </div>
                </div>
                <div className='mt-4 flex flex-col gap-4'>
                    <div className='flex flex-col items-start'>
                        <Link className=' w-full flex px-2 py-2 gap-3 text-xl text-[#797979] items-center bg-[#F4F4F4] border-2 border-[#DDDDDD] rounded' href='/'><Image src='/images/home2.svg' width={24} height={24} alt='home' />Home</Link>
                        <Link className=' w-full flex px-2 py-2 gap-3 text-xl text-[#797979] items-center' href='/'><Image src='/images/board.svg' width={24} height={24} alt='home' />Boards</Link>
                        <Link className=' w-full flex px-2 py-2 gap-3 text-xl text-[#797979] items-center' href='/'><Image src='/images/setting.svg' width={24} height={24} alt='home' />Settings</Link>
                        <Link className=' w-full flex px-2 py-2 gap-3 text-xl text-[#797979] items-center' href='/'><Image src='/images/teams.svg' width={24} height={24} alt='home' />Teams</Link>
                        <Link className=' w-full flex px-2 py-2 gap-3 text-xl text-[#797979] items-center' href='/'><Image src='/images/analytics.svg' width={24} height={24} alt='home' />Analytics</Link>
                    </div>
                    <div className='w-full'>
                        <button  onClick={() => setIsModalOpen(true)} className='w-full flex items-center justify-center gap-2 bg-gradient-to-b from-[#4C38C2] to-[#2F2188] p-2 py-3 text-white rounded-lg'>Create new task <Image src='/images/plus.svg' width={24} height={24} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className='flex p-2 gap-2 bg-[#F3F3F3] rounded-lg '>
                <Image src='/images/download.svg' width={40} height={40} alt="download" />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[#666666] font-medium text-xl]'>Download the app</h1>
                    <p className='text-[#666666]  font-normal text-sm'>Get the full experience</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
