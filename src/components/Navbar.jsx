import React from 'react'
import { useNavigate } from 'react-router-dom'


function Navbar() {

    const navigate = useNavigate()

    const handleScreenOne=()=>{
        navigate('/screen1')
        window.location.reload(false)
    }

    const handleScreenTwo = () =>{
        navigate("/screen2")
        window.location.reload(false)
        
    }

  return (
    <div className='h-10 flex justify-evenly mt-5'>
       <button className='inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out' onClick={()=>handleScreenOne()}>Screen One</button>
       <button className='inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out' onClick={()=>handleScreenTwo()}>Screen Two</button>
    </div>
  )
}

export default Navbar