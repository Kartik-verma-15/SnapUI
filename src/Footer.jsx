import React from "react";

function Footer() {
  return (
    <div className="relative min-w-full h-96 rounded-3xl top-10 bg-black backdrop-blur-lg overflow-hidden">

            


    
      <div className="flex justify-end mr-6  items-start ml-10 mt-16">
        <h3 className=" flex gap-10 justify-items-end font-bold "> 
          <span> <h3 className="text-xl font-bold text-lime-400" >Contact Info </h3>
          <h4 className=" text-md text-gray-500 "> Gmail - Kartiklataverma15@gmail.com </h4>

          
          </span> 
           
          <span className=" flex flex-col gap-2">
            <h3 className="text-xl font-bold text-lime-400" > Templates </h3>
            <h4 className=" text-sm text-gray-500 "> Images slide </h4>
            <h4 className=" text-sm text-gray-500 "> Hero sections </h4>
            <h4 className=" text-sm text-gray-500 "> Search Bar </h4>
            <h4 className=" text-sm text-gray-500 "> Components </h4>
            <h4 className=" text-sm text-gray-500 "> Animated Icons </h4>
            

          </span>
         

         </h3>
      </div>

      <div className="relative h-0/1 mt-5 overflow-hidden">
      <h3 className="text-stone-300 font-bold flex align-middle  text-xl ">
           <span> <h3 className="text-lime-400 ml-10 mr-2  ">BUILT  &  DESIGNED </h3></span>  BY
           <span>  <h3 className="text-stone-400 font-medium text-xs mt-2 ml-5">© 2026 Kartik Verma</h3> </span>
        </h3>
        <h1 className="text-stone-500 text-9xl mb-0 font-bold leading-none">
          KARTIK VERMA
        </h1>
        

        {/* Fade overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </div>








    </div>
  );
}

export default Footer;

