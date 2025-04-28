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
            <a  href="https://www.instagram.com/zaartech_interiors?igsh=Yzd3YXJvM2t3bGZm">
                 <FaInstagram className='cursor-pointer hover:text-gray-300 transition-colors'/>
            </a>
            <a href='https://wa.me/971555343589'>
              <FaWhatsapp className='cursor-pointer hover:text-gray-300 transition-colors'  />
            </a>
            <a href='https://www.facebook.com/share/166FVJYS9X/'>
            <FaFacebook className='cursor-pointer hover:text-gray-300 transition-colors'  />
            </a>
        </div>
    </div>
  )
}

export default Line;