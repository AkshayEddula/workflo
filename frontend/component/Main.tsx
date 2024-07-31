import Image from 'next/image'
import React from 'react'


const Main = () => {
    return (
        <div className='w-full bg-white grid grid-cols-4 p-4 rounded-lg gap-4'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl text-[#555555] font-medium'>To do</h1>
                    <Image src='images/bar.svg' width={24} height={24} alt='bar' />
                </div>
                <div className='flex flex-col gap-2 bg-[#F9F9F9] border-[#DEDEDE] border-2 rounded-lg px-[13px] py-[14px]'>
                    <div className='flex flex-col gap-[13px]'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-medium text-base text-[#606060] text-left'>Implement User Authentication</h1>
                            <p className='font-normal text-sm text-[#797979] text-left'>Develop and integrate user authentication using email and password.</p>
                        </div>
                        <h3  className='w-[55px] text-center px-2 py-[6px] rounded-lg text-xs font-normal text-white bg-[#FF6B6B]'>Urgent</h3>
                        <div className='flex items-center gap-2'><Image src="/images/clock.svg" width={24} height={24} alt='clock' /><p className='text-[#606060] text-sm font-semibold'>2024-08-15</p></div>
                    </div>
                    <p className='text-[#797979] text-sm font-medium'>1hr ago</p>
                </div>
                <div>
                    <button className='w-full flex items-center justify-between text-[#E3E1E1] p-2 rounded-lg bg-gradient-to-b from-[#3A3A3A] to-[#202020]'>Add New <Image src='images/plus2.svg' width={24} height={24} alt="plus"/></button>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl text-[#555555] font-medium'>In progress</h1>
                    <Image src='images/bar.svg' width={24} height={24} alt='bar' />
                </div>
                <div className='flex flex-col gap-2 bg-[#F9F9F9] border-[#DEDEDE] border-2 rounded-lg px-[13px] py-[14px]'>
                    <div className='flex flex-col gap-[13px]'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-medium text-base text-[#606060] text-left'>Design Home Page UI</h1>
                            <p className='font-normal text-sm text-[#797979] text-left'>Develop and integrate user authentication using email and password.</p>
                        </div>
                        <h3  className='w-[65px] text-center px-2 py-[6px] rounded-lg text-xs font-normal text-white bg-[#FFA235]'>Medium</h3>
                        <div className='flex items-center gap-2'><Image src="/images/clock.svg" width={24} height={24} alt='clock' /><p className='text-[#606060] text-sm font-semibold'>2024-08-15</p></div>
                    </div>
                    <p className='text-[#797979] text-sm font-medium'>1hr ago</p>
                </div>
                <div className='flex flex-col gap-2 bg-[#F9F9F9] border-[#DEDEDE] border-2 rounded-lg px-[13px] py-[14px]'>
                    <div className='flex flex-col gap-[13px]'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-medium text-base text-[#606060] text-left'>Conduct User Feedback Survey</h1>
                            <p className='font-normal text-sm text-[#797979] text-left'>Collect and analyze user feedback to improve app features.</p>
                        </div>
                        <h3  className='w-[45px] text-center px-2 py-[6px] rounded-lg text-xs font-normal text-white bg-[#0ECC5A]'>Low</h3>
                        <div className='flex items-center gap-2'><Image src="/images/clock.svg" width={24} height={24} alt='clock' /><p className='text-[#606060] text-sm font-semibold'>2024-08-15</p></div>
                    </div>
                    <p className='text-[#797979] text-sm font-medium'>1hr ago</p>
                </div>
                <div>
                    <button className='w-full flex items-center justify-between text-[#E3E1E1] p-2 rounded-lg bg-gradient-to-b from-[#3A3A3A] to-[#202020]'>Add New <Image src='images/plus2.svg' width={24} height={24} alt="plus"/></button>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl text-[#555555] font-medium'>Under Review</h1>
                    <Image src='images/bar.svg' width={24} height={24} alt='bar' />
                </div>
                <div className='flex flex-col gap-2 bg-[#F9F9F9] border-[#DEDEDE] border-2 rounded-lg px-[13px] py-[14px]'>
                    <div className='flex flex-col gap-[13px]'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-medium text-base text-[#606060] text-left'>Integrate Cloud Storage</h1>
                            <p className='font-normal text-sm text-[#797979] text-left'>Enable cloud storage for note backup and synchronization.</p>
                        </div>
                        <h3  className='w-[55px] text-center px-2 py-[6px] rounded-lg text-xs font-normal text-white bg-[#FF6B6B]'>Urgent</h3>
                        <div className='flex items-center gap-2'><Image src="/images/clock.svg" width={24} height={24} alt='clock' /><p className='text-[#606060] text-sm font-semibold'>2024-08-15</p></div>
                    </div>
                    <p className='text-[#797979] text-sm font-medium'>2 days ago</p>
                </div>
                <div>
                    <button className='w-full flex items-center justify-between text-[#E3E1E1] p-2 rounded-lg bg-gradient-to-b from-[#3A3A3A] to-[#202020]'>Add New <Image src='images/plus2.svg' width={24} height={24} alt="plus"/></button>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl text-[#555555] font-medium'>Finished</h1>
                    <Image src='images/bar.svg' width={24} height={24} alt='bar' />
                </div>
                <div className='flex flex-col gap-2 bg-[#F9F9F9] border-[#DEDEDE] border-2 rounded-lg px-[13px] py-[14px]'>
                    <div className='flex flex-col gap-[13px]'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-medium text-base text-[#606060] text-left'>Test Cross-browser Compatibility</h1>
                            <p className='font-normal text-sm text-[#797979] text-left'>Ensure the app works seamlessly across different web browsers.</p>
                        </div>
                        <h3  className='w-[55px] text-center px-2 py-[6px] rounded-lg text-xs font-normal text-white bg-[#FFA235]'>Medium</h3>
                        <div className='flex items-center gap-2'><Image src="/images/clock.svg" width={24} height={24} alt='clock' /><p className='text-[#606060] text-sm font-semibold'>2024-08-15</p></div>
                    </div>
                    <p className='text-[#797979] text-sm font-medium'>2 days ago</p>
                </div>
                <div>
                    <button className='w-full flex items-center justify-between text-[#E3E1E1] p-2 rounded-lg bg-gradient-to-b from-[#3A3A3A] to-[#202020]'>Add New <Image src='images/plus2.svg' width={24} height={24} alt="plus"/></button>
                </div>
            </div>
        </div>
    )
}

export default Main