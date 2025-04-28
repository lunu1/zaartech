import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const Line = () => {
  return (
    <div className='flex flex-row justify-between px-5 sm:px-10 text-xs sm:text-xl font-bold bg-black/40 py-3 font-serif text-white uppercase'>
        <div>
            Design
        </div>
        <div>
           Fitout
        </div>
        <div>
            Landscape
        </div>
        <div className='flex gap-3'>
            <FaInstagram className='cursor-pointer hover:text-gray-300 transition-colors'  />
            <FaWhatsapp className='cursor-pointer hover:text-gray-300 transition-colors'  />
            <FaLinkedinIn className='cursor-pointer hover:text-gray-300 transition-colors'  />
            <FaFacebook className='cursor-pointer hover:text-gray-300 transition-colors'  />
        </div>
    </div>
  )
}

export default Line;