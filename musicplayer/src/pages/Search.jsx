import React, { useEffect, useState } from 'react'
import System from '../components/System';
import { BsFillSearchHeartFill } from "react-icons/bs";
import { songsData } from '../songs';
import Card from '../components/Card';


function Search() {
  let[input,setinput]=useState("")
  let[newlist,setnewlist]=useState([])
  useEffect(()=>{
let songfilter=songsData.filter((song)=>(song.name.toLowerCase().includes(input)||(song.singer.toLowerCase().includes(input))))

setnewlist(songfilter)

  },[input])
  return (
    <div className=' w-[100%] h-[100vh] bg-black flex justify-start items-center flex-col pt-[20px] md:pt-[100px] gap-[30px]'>
    <System/>
    <form className='w-[90%] md:w-[60%] h-[60px] bg-gray-800 flex justify-center items-center gap-5 rounded-lg overflow-hidden p-[15px] md:p-0' onSubmit={(e)=>{e.preventDefault()}}>
   <input type='text'  className='w-[90%] h-[100%] bg-gray-800 outline-none border-0 text-white p-[10px] text-[18px] ' placeholder='search songs... 🤔' onChange={(e)=>setinput(e.target.value)} value={input}/>
   <BsFillSearchHeartFill className='text-white rext-[18px] '/>
    </form>
     {input?<div className='w-[100%] h-[65%]  md:h-[100%] flex flex-col  justify-start p-[10px] items-center gap-5 overflow-auto' >
      {newlist.map((song)=>(
       <Card name={song.name} image={song.image} singer={song.singer} songindex={song.id-1}/>
      ))}
      </div> : <div className='text-gray-700 text-[30px]font-semibold'>Search Songs 🎶</div>}
      
    </div>
  )
}

export default Search
