import React from 'react'
import { useState } from 'react'

const Header = (props) => {

 const logOut =  ()=>{
   localStorage.setItem('loggedInUser','')
  props.changeUser('')
 }

  return (
     <div id="header">
    <div className='p-9 bg-[#1A1A1D] w-full h-[120px]'>
      <div className='flex font-sans font-bold text-white items-end justify-between '>
        <h2 id='firstname'className='font-sans text-sm font-semibold'>Hello<br /><span className='text-2xl font-bold'>User 👋</span> </h2>
        <button type='submit' onClick={logOut} className="bg-rose-600 px-5 py-2 text-base rounded-full">Log Out</button>
      </div>
    </div>
    </div>
   

  )
}

export default Header
