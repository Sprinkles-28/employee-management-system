import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)


    const [taskTitle, setTaskTitle] = useState('')
    const [description, setDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitTask = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, description, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData
    

        userData.forEach(function (tsk) {
            if (assignTo == tsk.firstName) {
                tsk.tasks.push(newTask)
                tsk.taskNumbers.newTask=tsk.taskNumbers.newTask+1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setDescription('')
        setTaskDate('')
        setCategory('')
        setAssignTo('')

    }
    return (
        <div className='flex h-screen w-full items-center justify-center '>
            <div className='border-2 border-[#A64D79] rounded-xl w-4/5  shadow-gray-500 shadow-2xl'>
                <form onSubmit={(e) => {
                    submitTask(e)
                }} className='flex flex-col items-start justify-center rounded-xl size-full font-sans font-semibold p-5 gap-5'>
                    <h2 className='mb-4'>Create Task</h2>
                    <div>
                        <h3>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-black' type="text" id="admin-input" placeholder='Ex:Make an Admin Page' />
                    </div>
                    <div>
                        <h3>Task Description</h3>
                        <textarea
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }} className='text-black' id="admin-input" cols="30" rows="10" placeholder='Enter Task Description Here'></textarea>
                    </div>
                    <div>
                        <h3>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }} className='text-black' type="date" id="admin-input" />
                    </div>
                    <div>
                        <h3>Assigned To</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }} className='text-black' type="text" id="admin-input" placeholder='Name of Employee' />
                    </div>
                    <div>
                        <h3>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }} className='text-black' type="text" id="admin-input" placeholder='Ex :UI/UX Design,Dev, Marketing,etc' />
                    </div>
                    <button type="submit" className='bg-emerald-600'>Create Task</button>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
