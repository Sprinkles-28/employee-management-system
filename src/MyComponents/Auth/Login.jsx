import React from 'react'
import { useState } from 'react'

const Login = ({userLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitInfo = (e) => {
        e.preventDefault()
        userLogin(email,password)

        setEmail("")
        setPassword("")

    }


    return (
        <div className='flex h-screen w-screen items-center justify-center '>
            <div className='border-2 border-[#A64D79] rounded-xl h-4/5 aspect-[3/4] shadow-gray-500 shadow-2xl'>
                <form
                    onSubmit={(e) => {
                        submitInfo(e)
                    }}
                    className="flex  flex-col items-center justify-center rounded-xl size-full font-sans font-semibold ">
                    <h1 className='text-white text-3xl font-bold mb-8  '>LOGIN</h1>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required type="email" className="text-black bg-white my-4 border-2 border-rose-500 py-3 px-8 rounded-full w-125 text-xl shadow-lg shadow-[#3B1C32]" placeholder='Enter Email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required type="password" className="text-black bg-white my-5 border-2 border-rose-500 py-3 px-8 rounded-full w-125 text-xl shadow-lg shadow-[#3B1C32]" placeholder='Enter Password' />
                    <label htmlFor='mail-remember' ><input type='checkbox' id='mail-remember' />Remember Me</label>
                    <button type="submit" className='text-white bg-purple-500 rounded-full px-14 p-2 m-5 text-center text-xl hover:bg-purple-400 hover:text-[#3B1C32]'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
