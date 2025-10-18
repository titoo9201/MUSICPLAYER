import React, { useContext, useEffect, useState } from 'react'
import { songsData } from '../songs'
import musicimage from '../assets/musicanim.webp'
import { SiViaplay } from "react-icons/si";
import { IoPlaySkipBackCircleSharp, IoPlaySkipForwardCircleSharp } from "react-icons/io5";
import { datacontext } from '../context/UserContext';
import { TbMusicPause } from "react-icons/tb";
import { GiWideArrowDunk } from "react-icons/gi";
import Card from '../components/Card';


function Home() {
    let { audioref, playingsong, playsong, pausesong, nextsong, previoussong, index } = useContext(datacontext)
    // Renamed userange to range for clarity
    let [range, setRange] = useState(0)

    // Moved handlerange function outside of useEffect
    function handlerange(e) {
        let newrange = e.target.value
        setRange(newrange)
        let duration = audioref.current.duration
        audioref.current.currentTime = (duration * newrange) / 100
    }
    
    useEffect(() => {
        const update = () => {
            let duration = audioref.current.duration || 0
            let currentime = audioref.current.currentTime || 0
            let progress = (currentime / duration) * 100 || 0 
            setRange(progress)
        }

        // Add event listener
        audioref.current.addEventListener("timeupdate", update)
        
        // Cleanup function to remove the listener when the component unmounts or dependencies change
        return () => {
            audioref.current.removeEventListener("timeupdate", update)
        }
    }, [audioref]) // Include audioref in the dependency array
    
    return (
        <div className='w-full h-[100vh] bg-black flex relative'>
           <GiWideArrowDunk  className='text-white top-[30px] left-[10px]   absolute'/>
          {/* left */}
            <div className=' w-full md:w-[50%] h-full flex justify-start items-center pt-[20px] md:pt-[120px] flex-col gap-[30px]'>
               
               
                <h1 className='text-white font-semibold text-[20px]'>Now Playing</h1>
                <div className='w-[80%] max-w-[250px] h-[250px] object-fill rounded-md overflow-hidden relative '>
                    <img className='w-full h-full object-cover block' src={songsData[index].image} alt=''/>
                    {playingsong ?  <div className='w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center'>
                        <img src={musicimage} alt='' className='w-[50%]'/>
                    </div>:null
                    }
                  
                </div>
                <div>
                    <div className='text-white font-bold text-[30px] gap-[15px]' >{songsData[index].name}</div>
                    <div className='text-gray-400 font-semibold text-[15px] text-center'>{songsData[index].singer}</div>
                </div>

                <div className=' w-full flex justify-center items-center' >
                    {/* *** FIX APPLIED HERE: Changed onChange={handlerange()} to onChange={handlerange} *** */}
                    <input type="range" className='appearance-none w-[50%] h-[7px] rounded-md bg-gray-600' value={range} onChange={handlerange}/>
                </div>

                <div className='text-white flex justify-center items-center gap-5 '>
                    <IoPlaySkipBackCircleSharp className='w-[28px] h-[28px] hover:text-gray-600 transition-all cursor-pointer' onClick={()=>previoussong()} />

                    {!playingsong? 
                    <div className='w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer'onClick={()=>playsong()} > <SiViaplay /></div>
                    : 
                    <div className='w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer'onClick={()=>pausesong()} > <TbMusicPause />
                    </div> }
                    
                    <IoPlaySkipForwardCircleSharp className='w-[28px] h-[28px] hover:text-gray-600 transition-all cursor-pointer' onClick={()=>nextsong()} />
                </div>
            </div>
             {/* right */}
            <div className=' w-[100%] md:w-[50%] h-full hidden md:flex flex-col gap-5 overflow-auto pb-[20px] pt-[120px]' >
             {/* <Card/> */}
             {songsData.map((song)=>(
              <Card name={song.name} image={song.image} singer={song.singer} songindex={song.id-1}/>
             ))}
            </div>
        </div>
    )
}

export default Home