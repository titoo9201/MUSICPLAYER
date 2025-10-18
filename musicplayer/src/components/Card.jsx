import React, { useContext } from 'react'
import { songsData } from '../songs'
import { SlPlaylist } from "react-icons/sl";
import { BsHearts } from "react-icons/bs";
import { datacontext } from '../context/UserContext';


function Card({name,image,singer,songindex}) {
    let{audioref, playingsong, playsong, pausesong, nextsong, previoussong, index,setindex}=useContext(datacontext)
  
  return (
    <div className='w-[90%] h-[70px] md:h-[120px] bg-gray-800 rounded-lg  p-[5px] md:p-[10px] flex hover:bg-gray-900 transition-all'>

         {/* left div */}
        <div className='flex justify-start items-center gap-[20px] w-[80%] h-[100%] cursor-pointer' onClick={()=>
            {   setindex(songindex) 
                playsong()}}>
            <div>
                <img src={image} alt='' className='w-[60px] max-h-[60px] md:max-h-[100px] md:w-[100px] rounded-lg'/>
            </div>
            <div className='  text-[15px]  md:text-[20px]'>
                <div className='text-white font-bold text-[1em] '>{name}</div>
                <div className='text-gray-400 font-semibold text-[0.8em]'>{singer}</div>
            </div>
        </div>
        {/* right div */}
        <div className='flex justify-center items-center gap-[20px] w-[20%] h-[100%] text-[15px]  md:text-[20px]'>

         <div onClick={()=>{
            dispatch(Addsong({name:name,image:image,singer:singer,songindex:songindex}))
         }}> <SlPlaylist className='text-white text-[1.3em] cursor-pointer '/></div>
         <div><BsHearts className='text-white text-[1em]   cursor-pointer  '/></div>

        </div>
      
    </div>
  )
}

export default Card
