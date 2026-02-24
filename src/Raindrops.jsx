import { motion } from "motion/react";
import { useMemo } from "react";

function Raindrops() {
  const randomX = useMemo(
    () => Math.random() * window.innerWidth,
    []
  );
  const randomY = useMemo(
    () => Math.random() * window.innerWidth,
    []
  );
  
  const randomP = useMemo(
    () => Math.random() * window.innerWidth,
    []
  );
  const randomQ = useMemo(
    () => Math.random() * window.innerWidth,
    []
  );
  const randomR = useMemo(
    () => Math.random() * window.innerWidth,
    []
  );
  const randomS = useMemo(
    () => Math.random() * window.innerWidth,
    []
  );
  const randomZ = useMemo(
    () => Math.random() * window.innerWidth,
    []
  );
  const randomT = useMemo(
    () => Math.random() * window.innerWidth,
    []
  );
  const randomU = useMemo(
    () => Math.random() * window.innerWidth,
    []
  );
  const randomV = useMemo(
    () => Math.random() * window.innerWidth,
    []
  );

  return (
    <div>
    <motion.div
      className="absolute top-0 h-10 w-0.5 bg-gradient-to-b from-transparent to-yellow-400 rounded-full"
      style={{ left: randomX }}
      animate={{ y: [0, 500] }}
      transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        ease: "linear",
      }}
    >
    </motion.div>
    <motion.div
      onm={{x:[20]}}
      className="absolute top-0 h-10 w-0.5 bg-gradient-to-b from-transparent to-teal-400 rounded-full"
      style={{ left: randomY }}
      animate={{ y: [0, 500] }}
      transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        ease: "linear",
      }}
    >
    </motion.div>

    <motion.div
      className="absolute top-0 h-14 w-0.5 bg-gradient-to-b from-transparent to-lime-400 rounded-full"
      style={{ left: randomP }}
      animate={{ y: [0, 500] }}
      transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        ease: "linear",
      }}
    >
    </motion.div>

     <motion.div
      className="absolute top-0 h-6 w-0.5 bg-gradient-to-b from-transparent to-pink-600 rounded-full"
      style={{ left: randomQ }}
      animate={{ y: [0, 500] }}
      transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        ease: "linear",
      }}
    >
    </motion.div>

    <motion.div
      className="absolute top-0 h-14 w-0.5 bg-gradient-to-b from-transparent text-violet-600 rounded-full"
      style={{ left: randomR }}
      animate={{ y: [0, 500] }}
      transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        ease: "linear",
      }}
    >
    </motion.div>

    <motion.div
      className="absolute top-0 h-10 w-0.5 bg-gradient-to-b from-transparent to-teal-400 rounded-full"
      style={{ left: randomS }}
      animate={{ y: [0, 500] }}
      transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        ease: "linear",
      }}
    >
    </motion.div>

    <motion.div
      className="absolute top-0 h-8 w-0.5 bg-gradient-to-b from-transparent to-red-400 rounded-full"
      style={{ left: randomZ }}
      animate={{ y: [0, 500] }}
      transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        ease: "linear",
      }}
    >
    </motion.div>
    <motion.div
      className="absolute top-0 h-8 w-0.5 bg-gradient-to-b from-transparent to-red-400 rounded-full"
      style={{ left: randomT }}
      animate={{ y: [0, 500] }}
      transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        ease: "linear",
      }}
    >
    </motion.div>
    <motion.div
      className="absolute top-0 h-8 w-0.5 bg-gradient-to-b from-transparent to-red-400 rounded-full"
      style={{ left: randomU }}
      animate={{ y: [0, 500] }}
      transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        ease: "linear",
      }}
    >
    </motion.div>
    <motion.div
      className="absolute top-0 h-8 w-0.5 bg-gradient-to-b from-transparent to-red-400 rounded-full"
      style={{ left: randomV }}
      animate={{ y: [0, 500] }}
      transition={{
        duration: 2 + Math.random(),
        repeat: Infinity,
        ease: "linear",
      }}
    >
    </motion.div>
    
    <motion.div
      className="absolute top-0 h-8 w-0.5 bg-gradient-to-b from-transparent text-rose-500 rounded-full"
      
      animate={{ y: [0,500]}}
      transition={{
        duration:2,
        repeat:Infinity ,
        ease: "linear",
      }}
    >
    </motion.div>
    








   </div>
  );
}

export default Raindrops;
