'use client'
import { useGlobalContext } from '@/app/Context/store'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'

const TaskModal = () => {
  const { isModalOpen, setIsModalOpen, taskDetails, setTaskDetails,userInfo } = useGlobalContext();
  
  const wrongHandler = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    if(!userInfo.id ) {
      alert('You must be logged in to create a new task');
      return;
    }
    setTaskDetails({...taskDetails, author: userInfo.id })
    if(!taskDetails.title && !taskDetails.deadline && !taskDetails.author){
      alert('Please fill in all the fields');
      return;
    }

    axios.post('http://localhost:5000/task/createtask/', taskDetails )
    .then((res) => {
       setIsModalOpen(false);
       alert('Task created successfully');
    })
    .catch((err) => {
       console.error(err);
       alert('Error creating task');
    });

  };

  console.log(taskDetails)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    const updatedValue = name === 'deadline' ? new Date(value) : value;

    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: updatedValue
    }));
  };

  return (
    <div className='bg-[white] w-[670px] h-screen p-6 flex flex-col gap-8'>
      <div className='flex flex-col gap-[27px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image className='cursor-pointer' onClick={wrongHandler} src='/images/wrong.svg' width={24} height={24} alt='wrong' />
            <Image src='/images/export.svg' width={24} height={24} alt='expand' />
          </div>
          <div className='flex items-center gap-4'>
            <button className='p-2 rounded flex gap-2 bg-[#F4F4F4] text-[#797979] text-base font-normal'>Share <Image src='/images/share.svg' width={24} height={24} alt='share' /></button>
            <button className='p-2 rounded flex gap-2 bg-[#F4F4F4] text-[#797979] text-base font-normal'>Favorite <Image src='/images/star.svg' width={24} height={24} alt='star' /></button>
            <button onClick={handleSubmit} className='p-2 rounded flex gap-2 text-white text-base font-normal bg-gradient-to-b from-[#4C38C2] to-[#2F2188]'>Create</button>
          </div>
        </div>
        <div className='flex flex-col gap-[38px]'>
          <div className='flex flex-col gap-8'>
            <div>
              <input
                className='text-[46px] font-semibold text-[#797979] outline-none placeholder:text-[#CCCCCC]'
                type='text'
                name='title'
                placeholder='Title'
                value={taskDetails.title}
                onChange={handleChange}
              />
            </div>
            <div className='flex gap-[60px]'>
              <div className='flex flex-col gap-8'>
                <div className='flex items-center gap-[60px]'>
                  <div className='flex items-center gap-6'>
                    <Image src='images/status.svg' width={24} height={24} alt='status' />
                    <h2 className='text-[#666666] text-base font-normal'>Status</h2>
                  </div>
                  <div className='flex flex-col'>
                    <select
                      name='status'
                      className='text-[#C1BDBD] text-base font-normal outline-none bg-[#F4F4F4] p-2 rounded'
                      value={taskDetails.status}
                      onChange={handleChange}
                    >
                      <option value="In progress">In progress</option>
                      <option value="Under review">Under review</option>
                      <option value="Finished">Finished</option>
                    </select>
                  </div>
                </div>
                <div className='flex items-center gap-[60px]'>
                  <div className='flex items-center gap-6'>
                    <Image src='images/priority.svg' width={24} height={24} alt='priority' />
                    <h2 className='text-[#666666] text-base font-normal'>Priority</h2>
                  </div>
                  <div className='flex flex-col'>
                    <select
                      name='priority'
                      className='text-[#C1BDBD] text-base font-normal outline-none bg-[#F4F4F4] p-2 rounded'
                      value={taskDetails.priority}
                      onChange={handleChange}
                    >
                      <option value="Urgent">Urgent</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>
                <div className='flex items-center gap-[60px]'>
                  <div className='flex items-center gap-6'>
                    <Image src='images/deadline.svg' width={24} height={24} alt='deadline' />
                    <h2 className='text-[#666666] text-base font-normal'>Deadline</h2>
                  </div>
                  <div className='flex flex-col'>
                    <input
                      type='date'
                      name='deadline'
                      className='text-[#C1BDBD] text-base font-normal outline-none bg-[#F4F4F4] p-2 rounded'
                      value={taskDetails.deadline.toISOString().split('T')[0]} // Convert Date to string
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='flex items-center gap-[60px]'>
                  <div className='flex items-center gap-6'>
                    <Image src='images/description.svg' width={24} height={24} alt='description' />
                    <h2 className='text-[#666666] text-base font-normal'>Description</h2>
                  </div>
                  <div className='flex flex-col justify-start'>
                    <input
                      name='description'
                      className='text-[#C1BDBD] text-base font-normal outline-none'
                      type='text'
                      placeholder='Not Selected'
                      value={taskDetails.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className='flex gap-[23px]'>
            <Image src='images/plus3.svg' width={24} height={24} alt='add' />
            <p className='text-base text-[#000000] font-normal'>Add custom property</p>
          </div>
        </div>
      </div>
      <hr />
      <input
        value={taskDetails.content}
        onChange={handleChange}
        name='content'
        className='w-full text-[#797979] placeholder:text-[#C0BDBD] text-base font-normal outline-none'
        type='text'
        placeholder='Start writing, or drag your own files here.'
      />
    </div>
  )
}

export default TaskModal
