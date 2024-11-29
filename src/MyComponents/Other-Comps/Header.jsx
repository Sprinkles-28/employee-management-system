import React from 'react'

const Header = () => {
  return (
     <div id="header">
    <div className='p-9 bg-[#1A1A1D] w-full h-[120px]'>
      <div className='flex font-sans font-bold text-white items-end justify-between '>
        <h2 className='font-sans text-sm font-semibold'>Hello<br /><span className='text-2xl font-bold'>Sprinkles 👋</span> </h2>
        <button className="bg-rose-600">Log Out</button>
      </div>
    </div>
    </div>
   

  )
}

export default Header
