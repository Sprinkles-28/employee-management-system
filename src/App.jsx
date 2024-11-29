import React, { useEffect } from 'react'
import Login from "./MyComponents/Auth/Login";
import EmployeeDashboard from './MyComponents/Dashboard/EmployeeDashboard';
import AdminDashboard from './MyComponents/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';

const App = () => {
  
    useEffect(() => {
      // setLocalStorage()
      getLocalStorage()

    })

  return(
    <>
    <Login/>
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App

