import React ,{createContext,useEffect,useRef, useState}from 'react';
import { songsData } from '../songs';

export const datacontext=createContext()
function UserContext({children}) {
    let audioref=useRef(new Audio())
    let [index,setindex]=useState(0)    
    let[playingsong,setplayingsong]=useState(false)
 
    useEffect(()=>{
           audioref.current.src=songsData[index].song
           audioref.current.load()
           if(playingsong)
           {
            playsong()
           }

    },[index])
   

    function playsong()
    {
        audioref.current.play()
        setplayingsong(true)
    }

        function pausesong()
    {
        audioref.current.pause()
        setplayingsong(false)
    }
       function nextsong()
    {
       setindex((prev)=>(prev+1)%songsData.length)
    }

       function previoussong()
    {
        audioref.current.pause()
        setindex((prev)=>{
            if(prev===0)
            {
                return songsData.length-1
            }
            else 
            {
                return prev-1;
            }
        })
    }
     let value={
audioref, playsong,pausesong,playingsong,setplayingsong,nextsong,previoussong,index,setindex
    }
  return (
    <div>
        <datacontext.Provider value={value}>
  {children}
  </datacontext.Provider>
    </div>
  )
}

export default UserContext
