import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <div className='flex justify-center mt-5'>
    <span style={{fontSize:"20px", fontWeight:"700"}}>
        SEARCH: {" "}
        <input value={filter || ""} className=" h-6" style={{border:"solid 2px red"}}
        onChange={e => setFilter(e.target.value)}
         />
    </span>
    
    </div>
  )
}





