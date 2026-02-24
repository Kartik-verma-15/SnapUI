
import { NavLink, Routes } from "react-router-dom";
import Navbar from "./SnapUI";
import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";
import logo1 from "/home/kartik/Downloads/image__1_-removebg-preview.png";
import { div } from "motion/react-client";


export const Cardsnavbar=()=>{
  return(
    <div>
      <nav className="fixed top-5 inset-x-0 z-10 flex justify-center">
            
            <div className="w-[1225px] backdrop-blur-md bg-slate-900/75 rounded-lg px-6 py-4 flex items-center justify-between">
              
              {/* Logo */}
              <div className="text-xl font-bold text-white">
                Snap<span className="text-purple-400">UI</span>
              </div>
      
              {/* Links */}
              <div className="flex gap-10 text-white font-bold text-lg">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/components">Components</NavLink>
                <NavLink to="/templates">Templates</NavLink>
              </div>
      
            </div>
          </nav>

    </div>
  )
}

export const Plus = ()=>{

  return(
    <div className="p-1">
    <motion.svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" stroke="currentColor">
    <motion.path whileTap={{rotate:45}} d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"/>
</motion.svg>
</div>
  )
}

export const Grp = ()=>{

    return(
        
        <motion.svg fill="currentColor" stroke="1"  width="30px" height="30px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" //animate={{y:[0, -25, 0]}}
  //transformOrigin="50% 50%"
  transition={{duration:5,
    repeat:Infinity
  }}>
  
    
    <motion.path whileHover={{rotate:15}}  d="M163.93962,80.09586A71.887,71.887,0,0,1,168,103.99219v.00014a71.99986,71.99986,0,0,1-71.99986,71.99986H92.098v.003a72.0298,72.0298,0,0,0,67.9019,47.997H226a6,6,0,0,0,6-6V151.992a72.00294,72.00294,0,0,0-68.06587-71.8942Z"/>
  
  <motion.path whileHover={{rotate:15}} d="M169.56592,72.5788A79.99487,79.99487,0,0,0,16,103.99219v66a14.01573,14.01573,0,0,0,14,14H86.667a80.1557,80.1557,0,0,0,73.333,48h66a14.01573,14.01573,0,0,0,14-14v-66A79.96635,79.96635,0,0,0,169.56592,72.5788ZM32,103.99219a64,64,0,1,1,64,64H32Zm192,112H160a64.14151,64.14151,0,0,1-55.67871-32.43335,79.90546,79.90546,0,0,0,70.37451-93.859A63.99067,63.99067,0,0,1,224,151.99219Z"/>
</motion.svg>
       

    
    )
}

export const Search = ()=>{

const [isrotated,setrotated]=useState(false);
    return(
      <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width="25"
      height="25"
      onClick={()=>(setrotated(!isrotated))}
    >
      {/* Card outline */}
      <motion.path
        d="M14 4C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V13M10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13"
      />
      <motion.path d="M10 16H6" />

      {/* Search icon (magnifying glass) */}
      <motion.g
        stroke="currentColor"
        strokeWidth="1"
        //whileTap={{ rotate: -180 }}
        transition={{ duration: 5 }}
        animate={{rotate: isrotated? 180:0}}
        style={{
            originX:"17px",
            originY:"17px"
        }}
      >
        <circle cx="17" cy="17" r="3" />
        <motion.line x1="20" y1="20" x2="22" y2="22" whileTap={{rotate:360}} transition={{duration:2}}/>
      </motion.g>
    </motion.svg>
  );
    
}

export const HomeIcon = ()=>{
    
    return (
        <motion.svg
        xmlns="https://www.svgrepo.com/download/529026/home.svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="20"
      height="20"
        >

        <motion.path
        whileTap={{rotate:50}}
        d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"

        />   
        






        
        
        </motion.svg>

    )

}

export const Cards=()=> {
  return(
  <div>
    <Navbar/>
    <div>

    </div>
  </div>
  )
  
}

function Sidebar(){
   

    return (
     
        <div className='overflow-hidden lg:block flex flex-col gap-3  h-full w-fit  bg-slate-900/60 border-1 backdrop-blur-md border-gray-200 shadow-md  align-middle fixed left-2 top-1 rounded-md pb-2 p-2 bottom-2'>
         <div className="text-xl font-bold text-neutral-100">
          Snap<span className="text-purple-400">UI</span>
        </div>
        <div className='flex font-semibold  text-black flex-col gap-2 h-full w-fit pl-2'>
            <NavLink to="/" className=' flex gap-1'>  HOME  <HomeIcon/> </NavLink>
            <NavLink to="/Cards" className=' flex gap-1'  >Cards    </NavLink>
            <NavLink to="/Herosection" className=' flex gap-1'>Hero Section <Grp/></NavLink>
            <NavLink to="/Navbars" className=' flex gap-1'>Navbars <Plus/>  </NavLink>

        </div>
         <div className="text-sm text-gray-600 mt-auto p-1">
    © 2026 SnapUI
  </div>


        </div>




    );

   


};

export default Sidebar;