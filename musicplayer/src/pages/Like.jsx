import React from 'react'
import System from '../components/System';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
function Like() {
   let songs=useSelector(state=>state.liked)
 
  
  return (
    
    <div className=' w-[100%] h-[100vh] bg-black flex justify-start items-center flex-col pt-[20px] md:pt-[100px] gap-[30px]'>
      
   <System/>
   {!songs.length<1?<> <h1 className='text-white font-bold text-[20px]'>Liked Songs...🎵</h1>
    <div className='w-full h-[65%] md:h-[100%] flex flex-col justify-start items-center gap-[20px] overflow-auto '>
      {songs.map((song,index)=>(
        <Card 
    key={index}
    name={song.name}
    image={song.image}
    singer={song.singer}
    songindex={song.songindex}
  />
      ))}
   
      
    </div></>
    :
    <div className='text-gray-700 text-[30px]font-semibold'>
      No Songs Are Available In Liked...❌❌
    </div>

    }
   
    </div>
    
  )
}

export default Like
