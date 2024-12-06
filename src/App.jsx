import React, { useContext, useEffect, useState } from 'react'
import Login from "./MyComponents/Auth/Login";
import EmployeeDashboard from './MyComponents/Dashboard/EmployeeDashboard';
import AdminDashboard from './MyComponents/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])


  const userLogin = (email, password) => {
      if (email=='admin@example.com' && password=='123') {
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      }

      else if (userData) {
        const employee = userData.find((e) => email == e.email && password == e.password)
        if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    }
    else {
      alert("Invalid Email or Password. Try Again!")
    }
  }



  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()

  // })

  return (
    <>
      {!user ? <Login userLogin={userLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}

export default App

