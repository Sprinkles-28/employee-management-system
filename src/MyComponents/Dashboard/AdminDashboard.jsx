import React from 'react'
import Header from '../Other-Comps/Header'
import CreateTask from '../Other-Comps/CreateTask'
import AssignedTask from '../Other-Comps/AssignedTask'

const AdminDashboard = () => {
    return (
        <div>
            <Header />
            <CreateTask/>
            <AssignedTask/>
        </div>
    )
}

export default AdminDashboard
