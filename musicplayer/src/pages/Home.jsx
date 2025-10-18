import React from 'react'
import { songsData } from '../songs'
import musicimage from '../assets/musicanim.webp'
import { SiViaplay } from "react-icons/si";
import { IoPlaySkipBackCircleSharp } from "react-icons/io5";
import { IoPlaySkipForwardCircleSharp } from "react-icons/io5";


function Home() {
  return (
    <div className='w-full h-[100vh] bg-black flex '>
     <div className=' w-full  md:w-[50%] h-full flex justify-start items-center pt-[20px] md:pt-[120px] flex-col gap-[30px]'>
        
     <h1 className='text-white font-semibold text-[20px]'>Now Playing</h1>
     <div className='w-[80%] md:w-[300px] h-[300px] object-fill rounded-md overflow-hidden relative '>
        <img className='w-full h-full object-cover block' src={songsData[0].image} alt=''/>
        <div className='w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center'>
         <img src={musicimage} alt='' className='w-[50%]'/>
        </div>
     </div>
        <div>
          <div className='text-white font-bold text-[30px] gap-[15px]' >{songsData[0].name}</div>
          <div className='text-gray-400 font-semibold text-[15px] text-center'>{songsData[0].singer}</div>
        </div>

        <div className=' w-full flex justify-center items-center' >
       <input type="range" className='appearance-none w-[50%] h-[7px]  rounded-md bg-gray-600'/>
        </div>

        <div className='text-white flex justify-center items-center gap-5 '>
          <IoPlaySkipBackCircleSharp className='w-[28px] h-[28px]  hover:text-gray-600 transition-all cursor-pointer' />
          <div className='w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer'>  <SiViaplay /></div>
          <IoPlaySkipForwardCircleSharp className='w-[28px] h-[28px]  hover:text-gray-600 transition-all cursor-pointer' /></div>
     </div>



     <div  className='w-[50%] h-full bg-slate-500 hidden md:flex' ></div>
    </div>
  )
}

export default Home
