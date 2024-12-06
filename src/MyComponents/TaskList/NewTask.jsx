import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className='p-5 flex-shrink-0 h-full w-[350px] bg-gradient-to-tl from-[#aa19af] to-yellow-200 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className=' bg-red-600 px-3 py-1 rounded-full'>{data.category}</h3>
        <h4 className='text-sm px-3 py-1 bg-[#6A1E55] rounded-full'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-3xl font-bold text-[#3B1C32]'>{data.taskTitle}</h2> <br />
      <p className=' font-semibold text-[#1A1A1D]'>
        {data.description}
      </p>
      <div className='mt-4'>
        <button className='bg-blue-600 rounded-full py-2 px-3' type="submit" >Accept Task</button>
      </div>
    </div>
  )
}

export default NewTask