import React, { useState } from "react";


import { motion } from "motion/react";
import Navbar from "./SnapUI";

function Cards() {

  const[isclicked,setisclicked]=useState(0);

    return (
        <div  class="group relative  h-60 w-44 overflow-hidden rounded-xl bg-gray-900 shadow-lg cursor-pointer ">

  
  <img
    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    alt=""
    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  
  <div
    class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
  ></div>

 
  <div
    class="absolute h-14 bottom-0 w-full p-3


           translate-y-full opacity-0

           transition-all duration-500 ease-out
           group-hover:translate-y-0 group-hover:opacity-100
           bg-slate-300/25 backdrop-blur-md"
  >
    <h3 class="text-white text-sm font-semibold">
      Card Title
    </h3>
    <p class="text-gray-300 text-xs mt-1">
      Small description goes here
    </p>
  </div>
  
  



</div>



    )
    
}

function Cards2() {
    

    return(
        <div className=" group relative  h-60 w-44 ">
            <div className=" z-0 rounded-lg absolute h-10 w-44 p-3
            font-bold text-amber-500


           translate-y-full opacity-0

           transition-all duration-500 ease-out
           group-hover:-translate-y-12 group-hover:opacity-100 group-hover:scale-100
           bg-slate-300/25 backdrop-blur-md " 
           
          
           
           
           >

                <h3 className="text-amber-500 ">Title Here -</h3>
                </div>


            
            <div className="h-60 w-44 ">
                <img className=" rounded-lg z-20 " src="https://images.unsplash.com/photo-1569183091671-696402586b9c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            </div>

            <div className=" z-10  rounded-lg absolute h-16 w-44 p-3
            text-s text-amber-500


           -translate-y-2 opacity-0

           transition-all duration-500 ease-out
           group-hover:translate-y-9 group-hover:opacity-100 group-hover:scale-100
           bg-slate-300/25 backdrop-blur-md " 
           
          
           
           
           >

                <h3 className="text-yellow-50 ">Discription here !!!!</h3>
                </div>

        </div>

    )
    
}

function Cards3() {
    const [show, setShow] = useState(false);

    return(
        <div className=" mt-8 h-60 w-44 rounded-xl overflow-hidden">
         <div className="relative ">
           <motion.svg 
           onHoverStart={()=>setShow(true)}
           onHoverEnd={()=>setShow(false)}
           whileHover={{rotate:180}}   className="z-20  absolute mr-1 mt-1 flex justify-self-end align-middle items-center" stroke="white" xmlns="http://www.w3.org/2000/svg" fill="white" width="30px" height="30" viewBox="0 0 32 32" version="1.1">
    <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"/>
</motion.svg> 
        
        <img className="inset-0 z-10 rounded-lg" src="https://plus.unsplash.com/premium_photo-1681284938413-ea2c090c6d14?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
           <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: show ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute overflow-hidden inset-y-0 left-0 z-20 w-28 bg-black/70 p-3 text-white"
      >
        <h3 className="text-sm font-semibold">Card Title</h3>
        <p className="text-xs mt-1 opacity-80">
          This description slides in from the left when you hover the icon.
        </p>
      </motion.div>



         </div>
            
        </div>
    )
    
}


function Cards4() {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative h-60 w-44 overflow-hidden rounded-xl cursor-pointer"
    >
      {/* Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1681284938413-ea2c090c6d14?q=80&w=387&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* TOP SHADOW + TITLE */}
      <motion.div
        variants={{
          rest: { opacity: 0, y: -10 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-0 z-20 w-full bg-gradient-to-b from-black/50 via-black/10 to-transparent  p-3"
      >
        <h3 className="text-sm font-semibold text-white">
          Card Title
        </h3>
      </motion.div>

      {/* BOTTOM SHADOW + DESCRIPTION */}
      <motion.div
        variants={{
          rest: { opacity: 0, y: 10 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-black/70 to-transparent p-3"
      >
        <p className="text-xs text-white opacity-90">
          One line description here
        </p>
      </motion.div>

      {/* INNER SHADOW OVERLAY */}
      
    </motion.div>
  );
}


function Cardscollection() {
  return(
    <div className="flex justify-center align-middle items-center mt-20 ">
      <div className="flex  gap-[170px] flex-wrap">
        <Navbar/>
        <Cards/>
        <Cards2/>
        <Cards3/>
        <Cards4/>

      </div>
    </div>
  )
}

export default Cardscollection;