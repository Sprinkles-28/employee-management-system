import React from 'react'
import Header from '../Other-Comps/Header'
import TaskNumbers from '../Other-Comps/TaskNumbers'
import ListedTask from '../TaskList/ListedTask'

const EmployeeDashboard = (props) => {
    
    return (
        <>
            <div className=' h-full w-screen'>
                <Header changeUser={props.changeUser} data={props.data} />
                <TaskNumbers data={props.data} />
                <ListedTask data={props.data}/>
            </div>
        </>
    )
}

export default EmployeeDashboard
