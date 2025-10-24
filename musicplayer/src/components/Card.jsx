import React, { useContext } from 'react'
import { songsData } from '../songs'
import { SlPlaylist } from "react-icons/sl";
import { BsHearts } from "react-icons/bs";
import { datacontext } from '../context/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { AddSong, RemoveSong } from '../redux/PlaylistSlice';
import { CgPlayListRemove } from "react-icons/cg";
import { AddLike,RemoveLike } from '../redux/Likedslice';
import { PiCalendarHeartFill } from "react-icons/pi";


function Card({name,image,singer,songindex}) {
    let{audioref, playingsong, playsong, pausesong, nextsong, previoussong, index,setindex}=useContext(datacontext)
    let dispatch=useDispatch();
    let ganna = useSelector(state=>state.playlist)
 
    const songExistInPlaylist=ganna.some((song)=>(song.songindex==songindex))
       let likedSong =useSelector(state=>state.liked)
        const songExistInliked=likedSong.some((song)=>(song.songindex==songindex))
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
          {!songExistInPlaylist&& (<div onClick={()=>{
            dispatch(AddSong({name:name,image:image,singer:singer,songindex:songindex}))}}>
            
             <SlPlaylist className='text-white text-[1.3em] cursor-pointer '/></div>
             )
             }

               {songExistInPlaylist&& (<div onClick={()=>{
            dispatch(RemoveSong({songindex}))
         }}>
            
             <CgPlayListRemove className='text-white text-[1.3em] cursor-pointer '/></div>)
             }
         

             {/* liked song work */}

        {!songExistInliked && ( <div onClick={()=>{
          dispatch(AddLike({name:name,image:image,singer:singer,songindex:songindex}))
         }}  ><BsHearts className='text-white text-[1em]   cursor-pointer  '/></div>)
         }
         {songExistInliked&& (<div onClick={()=>{
            dispatch(RemoveLike({songindex}))
         }}>
            
             <PiCalendarHeartFill  className='text-white text-[1.3em] cursor-pointer '/></div>)
             }
            
        </div>
      
    </div>
  )
}

export default Card
