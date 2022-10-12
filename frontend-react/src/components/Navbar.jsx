import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


function Navbar() {
    const navigate=useNavigate()
  return (
    <div style={{backgroundColor:"#080c25"}} >
        <div className=' h-[70px]   container flex justify-center items-center text-white  space-x-10'>
        <p className='cursor-pointer hover:text-pink-500' onClick={()=>navigate('/')}>HOME</p>
        <p className='cursor-pointer hover:text-pink-500' onClick={()=>navigate('/about')}>ABOUT</p>
        <p className='cursor-pointer hover:text-pink-500' onClick={()=>navigate('/contact')}>CONTACT</p>
        </div>
    </div>

  )
}

export default Navbar