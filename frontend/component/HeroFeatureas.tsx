import Image from 'next/image'
import React from 'react'

const HeroFeatureas = () => {
    return (
        <div className='w-full flex items-center justify-between'>
            <div className='relative flex items-center'>
                <input className='p-3 font-medium text-[#797979] rounded-lg border-2 border-[#E9E9E9] focus:border-[#797979] focus:outline-none  text-base' type="Search" placeholder='Search' />
                <Image className='absolute right-3' src='images/search.svg' alt="SearchButton" width={24} height={24} />
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-4'>
                    <button className='flex items-center gap-3.5 font-medium rounded text-[#797979] p-2 bg-[#F4F4F4] border-2 border-[#E9E9E9]'>Calender view <Image src='images/calender.svg' width={24} height={24} alt='calender' /></button>
                    <button className='flex items-center gap-3.5 font-medium rounded text-[#797979] p-2 bg-[#F4F4F4] border-2 border-[#E9E9E9]'>Automation <Image src='images/automation.svg' width={24} height={24} alt='automation' /></button>
                    <button className='flex items-center gap-3.5 font-medium rounded text-[#797979] p-2 bg-[#F4F4F4] border-2 border-[#E9E9E9]'>Filter <Image src='images/filter.svg' width={24} height={24} alt='filter' /></button>
                    <button className='flex items-center gap-3.5 font-medium rounded text-[#797979] p-2 bg-[#F4F4F4] border-2 border-[#E9E9E9]'>Share <Image src='images/share.svg' width={24} height={24} alt='share' /></button>
                </div>
                <div className='w-fill'>
                    <button className='w-full flex items-center justify-center gap-2 bg-gradient-to-b from-[#4C38C2] to-[#2F2188] p-2 py-2.5 text-white rounded-lg'>Create new <Image src='/images/plus.svg' width={24} height={24} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default HeroFeatureas