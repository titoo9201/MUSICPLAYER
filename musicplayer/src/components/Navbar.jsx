
import React from 'react'
import { TiHome } from "react-icons/ti";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { SlPlaylist } from "react-icons/sl";
import { BsHearts } from "react-icons/bs";
function Navbar() {
  return (
    <div className='w-full h-[100px] bg-black fixed top-0 text-white flex justify-center items-center gap-[50px]'>
      <TiHome className='w-[60px] h-[60px]' />
    <BsFillSearchHeartFill className='w-[60px] h-[60px]'/>
    <SlPlaylist className='w-[60px] h-[60px]'/>
    <BsHearts className='w-[60px] h-[60px]' />
    </div>
  )
}

export default Navbar
