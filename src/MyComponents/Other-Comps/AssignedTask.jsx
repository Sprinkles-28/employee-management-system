import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AssignedTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

    return (
        <div className=' flex w-full justify-center'>
            <div className='bg-[#290e1f] w-4/5 p-5 rounded-md mt-5 m-5'>
                <div className="bg-red-300 mb-2 py-2 px-4 flex justify-between items-center rounded-md">
                    <h3 className='w-1/5 bg-red-500'>Employee Name</h3>
                    <h3 className='w-1/5 bg-red-500'>New Task</h3>
                    <h3 className='w-1/5 bg-red-500'>Active Task</h3>
                    <h3 className='w-1/5 bg-red-500'>Completed</h3>
                    <h3 className='w-1/5 bg-red-500'>Failed</h3>
                </div>

                <div className=''>
                    {userData.map(function (tsk,idx) {
                    return <div key={idx} className="bg-gray-900 mb-3 py-2 px-4 flex justify-between items-center rounded-md border-rose-500 border-2 shadow hover:shadow-md hover:shadow-rose-500">
                        <h3 className='w-1/5 text-white'>{tsk.firstName}</h3>
                        <h3 className='w-1/5 text-yellow-500'>{tsk.taskNumbers.newTask}</h3>
                        <h3 className='w-1/5 text-blue-600'>{tsk.taskNumbers.active}</h3>
                        <h3 className='w-1/5 text-green-400'>{tsk.taskNumbers.completed}</h3>
                        <h3 className='w-1/5 text-red-600'>{tsk.taskNumbers.failed}</h3>
                    </div>
                })}</div>

            </div>
        </div>
    )
}

export default AssignedTask
