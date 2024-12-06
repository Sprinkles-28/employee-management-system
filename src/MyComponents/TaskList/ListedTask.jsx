import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const ListedTask = ({data}) => {
    
    return (
        <div id="tasklist" className=' h-[54%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap mt-10 px-10 rounded-xl py-5'>
            {data.tasks.map((tsk,idx)=>{
                if(tsk.active){
                    return <AcceptTask key={idx} data={tsk}/>
                }
                if(tsk.newTask){
                    return <NewTask key={idx} data={tsk}/>
                }
                if(tsk.completed){
                    return <CompletedTask key={idx} data={tsk}/>
                }
                if(tsk.failed){
                    return <FailedTask key={idx} data={tsk}/>
                }
                
            })}
        </div>
    )
}

export default ListedTask
