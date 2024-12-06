import React from 'react'

const TaskNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 w-screen px-10'>
      <div className=' w-[45%] bg-gradient-to-t from-yellow-500 
     to-yellow-100 px-9 py-6 rounded-xl'>
        <h2>{data.taskNumbers.newTask}</h2>
        <h3>New Task</h3>
      </div>
      <div className=' w-[45%] bg-gradient-to-t from-green-500 
     to-green-100 px-9 py-6 rounded-xl'>
        <h2>{data.taskNumbers.completed}</h2>
        <h3>Completed Task</h3>
      </div>
      <div className=' w-[45%] bg-gradient-to-t from-blue-500 
     to-blue-100 px-9 py-6 rounded-xl'>
        <h2>{data.taskNumbers.active}</h2>
        <h3>Active Task</h3>
      </div>
      <div className=' w-[45%] bg-gradient-to-t from-red-500 
     to-red-300 px-9 py-6 rounded-xl'>
        <h2>{data.taskNumbers.failed}</h2>
        <h3>Failed Task</h3>
      </div>
      
    </div>
  )
}

export default TaskNumbers
