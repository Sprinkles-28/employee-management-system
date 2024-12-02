import React, { useContext, useEffect , useState} from 'react'
import Login from "./MyComponents/Auth/Login";
import EmployeeDashboard from './MyComponents/Dashboard/EmployeeDashboard';
import AdminDashboard from './MyComponents/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)


  const userLogin =(email,password)=>{
      if (email=="admin@log.in" && password == 123){
        setUser('admin')
      }else if (authData && authData.employees.find((e)=>email == e.email && password==e.password)){
        setUser('employee')
      }
      else{
        alert("Invalid Email or Password. Try Again!")
      }
  }
  
 

    // useEffect(() => {
    //   // setLocalStorage()
    //   getLocalStorage()

    // })

  return(
    <>
    {!user ? <Login userLogin ={userLogin}/>:""}
    {/* {user == 'admin'? <AdminDashboard/>:<EmployeeDashboard/> } */}
    </>
  )
}

export default App

