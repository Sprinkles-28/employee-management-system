import React from 'react'

const CreateTask = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center '>
                <div className='border-2 border-[#A64D79] rounded-xl w-4/5  shadow-gray-500 shadow-2xl'>
                    <form className='flex flex-col items-start justify-center rounded-xl size-full font-sans font-semibold p-5 gap-5'>
                        <h2 mb-4>Create Task</h2>
                        <div>
                            <h3>Task Title</h3>
                            <input type="text" id="admin-input" placeholder='Ex:Make an Admin Page' />
                        </div>
                        <div>
                            <h3>Task Description</h3>
                            <textarea id="admin-input" cols="30" rows="10" placeholder='Enter Task Description Here'></textarea>
                        </div>
                        <div>
                            <h3>Date</h3>
                            <input type="date" id="admin-input" />
                        </div>
                        <div>
                            <h3>Assigned To</h3>
                            <input type="text" id="admin-input" placeholder='Name of Employee' />
                        </div>
                        <div>
                            <h3>Category</h3>
                            <input type="text" id="admin-input" placeholder='Ex :UI/UX Design,Dev, Marketing,etc' />
                        </div>
                        <button type="submit" className='bg-emerald-600'>Create Task</button>
                    </form>
                </div>
            </div>
  )
}

export default CreateTask
