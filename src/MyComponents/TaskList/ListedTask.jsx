import React from 'react'

const ListedTask = () => {
    return (
        <div id="tasklist" className=' h-[54%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap mt-10 px-10 rounded-xl py-5'>
            <div className='p-5 flex-shrink-0 h-full w-[350px] bg-gradient-to-tl from-[#aa19af] to-yellow-200 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className=' bg-red-600 px-3 py-1 rounded-full'>High</h3>
                    <h4 className='text-sm px-3 py-1 bg-[#6A1E55] rounded-full'>26 Nov 2024</h4>
                </div>
                <h2 className='mt-5 text-3xl font-bold text-[#3B1C32]'>Make Youtube Video</h2> <br/>
                 <p className=' font-semibold text-[#1A1A1D]'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nihil asperiores provident repellat quisquam, quia ab sit facere expedita numquam tenetur. Molestias exercitationem similique inventore adipisci iure minus reiciendis repellendus.
                </p>
            </div>

        </div>
    )
}

export default ListedTask
