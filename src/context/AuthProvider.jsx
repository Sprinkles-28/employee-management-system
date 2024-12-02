import React, { createContext, useEffect } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'
import { useState } from 'react'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userdata, setUserdata] = useState(null)

    useEffect(() => {
        const {employees,admin} = getLocalStorage()
        setUserdata({employees,admin})

    }, [])
    

    return (
        <div>
            <AuthContext.Provider value={userdata}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider