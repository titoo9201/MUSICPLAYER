
import React from 'react'
import { TiHome } from "react-icons/ti";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { SlPlaylist } from "react-icons/sl";
import { BsHearts } from "react-icons/bs";
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className='w-full h-[100px] bg-black fixed  bottom-0  md:top-0 text-white flex justify-around md:justify-center items-center gap-[50px] p-[20px]'>
    <Link to={"/"}><TiHome className='w-[28px] h-[28px]' /></Link>
    <Link to={"search"}><BsFillSearchHeartFill className='w-[28px] h-[28px]'/></Link>
    <Link to={"playlist"}><SlPlaylist className='w-[28px] h-[28px]'/></Link>
    <Link to={"like"}><BsHearts className='w-[28px] h-[28px]' /></Link>
  
    </div>
  )
}

export default Navbar
