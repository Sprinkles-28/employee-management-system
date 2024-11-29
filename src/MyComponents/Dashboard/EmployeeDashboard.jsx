import React from 'react'
import Header from '../Other-Comps/Header'
import TaskNumbers from '../Other-Comps/TaskNumbers'
import ListedTask from '../TaskList/ListedTask'

const EmployeeDashboard = () => {
    return (
        <>
            <div className=' h-full w-screen'>
                <Header />
                <TaskNumbers />
                <ListedTask />
            </div>
        </>
    )
}

export default EmployeeDashboard
