import React, { useContext } from "react";
import { songsData } from "../songs";
import { datacontext } from "../context/UserContext";
import { SiViaplay } from "react-icons/si";
import { TbMusicPause } from "react-icons/tb";

function System() {
  let { playingsong, pausesong, playsong ,index,setindex} = useContext(datacontext);
  return (
    <div className="w-[100%] md:w-[60%] h-[100px] bg-white fixed bottom-[60px] md:bottom-0 rounded-t-[30px] flex item-start pt-[10px] md:items-center md;p-[20px]">
      <div className="flex justify-start items-start gap-[20px] w-[80%] h-[100%] cursor-pointer pt-[10px] pl-[30px]">
        <div>
          <img
            src={songsData[index].image}
            alt=""
            className="w-[60px] max-h-[60px] md:max-h-[100px] md:w-[80px] rounded-lg object-fill"
          />
        </div>
        <div className="  text-[20px]  md:text-[25px]">
          <div className="text-black font-bold text-[1em] ">
            {songsData[index].name}
          </div>
          <div className="text-gray-800 font-semibold text-[0.6em]">
            {songsData[index].singer}
          </div>
        </div>
      </div>
      <div>
        {!playingsong ? (
          <div
            className="w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer"
            onClick={() => playsong()}
          >
            {" "}
            <SiViaplay />
          </div>
        ) : (
          <div
            className="w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer"
            onClick={() => pausesong()}
          >
            {" "}
            <TbMusicPause />
          </div>
        )}
      </div>
    </div>
  );
}

export default System;
