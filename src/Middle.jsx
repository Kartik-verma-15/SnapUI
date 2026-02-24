import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

function Middle() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // 🔥 VERY IMPORTANT
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll Y Progress:", latest);
  });

  const rotate = useTransform(scrollYProgress, [0, 0.3], [ 90,180]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.5,1]);
  const setaside = useTransform(scrollYProgress,[0,0.1],[30,-10]);
  const setasideB = useTransform(scrollYProgress,[0,0.1],[-10,30]);
  const setasideC = useTransform(scrollYProgress,[0,0.1],[30,-10]);

  return (
    
    <div
      ref={containerRef}
      className="h-[200vh] z-0 bg-transparent flex  flex-col items-center gap-10 justify-center"
      style={{ perspective: "1000px" }} // ✅ REQUIRED

    >
      <div className="flex text-slate-400">
        <div>
     <motion.h2 className="text-7xl font-semibold bg-slate-950
          bg-clip-text text-slate-700
          drop-shadow-[0_0_60px_rgba(0,0,0,0.9)] " style={{translateX:setaside}}  >What we make ? </motion.h2>

          <motion.h3 className="mt-16"> Animated Components </motion.h3>
          </div>

          <div>

          <motion.img style={{rotateY:rotate,

          }}
      className=" w-72 h-[410px]   bg-neutral-300 backdrop-blur-sm rounded-3xl p-[6px]"
      src="https://images.unsplash.com/photo-1768745294197-00275e02c4f8"/>
    
          </div>
          </div>

          <div className="flex text-slate-400">
        

          <div>

          <motion.img style={{rotateY:rotate,

          }}
         className=" w-72 h-[410px]   bg-neutral-300 backdrop-blur-sm rounded-3xl p-[6px]"
         src="https://images.unsplash.com/photo-1768745294197-00275e02c4f8"/>
    
          </div>
          <div className="">
           <motion.h2 className="text-7xl font-semibold bg-slate-950
          bg-clip-text text-slate-700
          drop-shadow-[0_0_60px_rgba(0,0,0,0.9)] " style={{translateX:setasideB}}  >Cards </motion.h2>

          <motion.h3 className=" flex justify-center items-center"> Hover on it  </motion.h3>
          </div>


          </div>

          <div className="flex text-slate-400">
        <div>
     <motion.h2 className="text-7xl font-semibold bg-slate-950
          bg-clip-text text-slate-700
          drop-shadow-[0_0_60px_rgba(0,0,0,0.9)] " style={{translateX:setasideC}}  > Animated icons </motion.h2>

          <motion.h3 className="mt-16"> Click on it  </motion.h3>
          </div>

          <div>

          <motion.img style={{rotateY:rotate,

          }}
      className=" w-72 h-[410px]   bg-neutral-300 backdrop-blur-sm rounded-3xl p-[6px]"
      src="https://images.unsplash.com/photo-1768745294197-00275e02c4f8"/>
    
          </div>
          </div>

          <div className=" h-20 w-full bg-gradient-to-b flex justify-center  rounded-lg ">
            <div className="rounded-full w-52 font-medium text-lg p-2 bg-neutral-300 text-gray-700 shadow-inner shadow-gray-600 ">
                Explore more Components

            </div>
        </div>



      
    </div>
  );
}



export default Middle;