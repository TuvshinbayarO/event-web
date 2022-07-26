import React from 'react'
import Logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <div className='w-full bg-dark'>
        <div className='flex justify-between items-center p-5'>
            <div className="bg-white p-5 rounded-full">
                <img className='w-[60px]' src={Logo} />
            </div>
            <h1 className='w-1/2 text-center text-white text-xs'>&copy; 2022 Mobicom | All rights reserved.</h1>
        </div>
    </div>
  )
}

export default Footer