
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './SnapUI';
import bgimg from "/home/kartik/Downloads/ChatGPT Image Feb 14, 2026, 02_22_28 AM.png"
import React, { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";

import Raindrops from './Raindrops';
import Middle from './Middle';
import Footer from './Footer';
import Exploremore from './Madewith';

import { Route,Routes } from 'react-router-dom';
import Components from './Components';
import { path } from 'motion/react-client';
import { Cards } from './Contact';
import Cardscollection from './Cardscollection';


function InfoUnderfifty() {

  const arr = ["Blazing", "Hyper", "Warp", "Rapid","Blazing", "Hyper", "Warp", "Rapid","Warp"];

  const [currentWord, setCurrentWord] = useState(arr[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const i = Math.floor(Math.random() * arr.length);
      setCurrentWord(arr[i]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-1 text-slate-700 text-8xl font-bold align-middle justify-center items-center absolute inset-0">
      <h2>Deliver websites </h2>

      <div className="flex flex-row gap-1">
        <h2>in </h2>
        

        <motion.h2 className=" p-2 rounded-full
          text-8xl font-bold
          bg-slate-950
          bg-clip-text text-transparent
          drop-shadow-[0_0_50px_rgba(0,0,0,0.9)]
          tracking-wide select-none
        "
        key={currentWord}
        initial={{ opacity: 0, y:"-100%" }}
        animate={{ opacity: 1, y:"0%" }}
        exit={{ opacity: 0, y:"100%" }}
        transition={{duration:0.1}}

        >
         {currentWord}
        </motion.h2>
        <h2>speed </h2>
      </div>
    </div>
  );
}





function Colourfulldiv() {
  return (
    <div className="flex gap-5 items-center mt-[300px] align-bottom min-h-screen bg-transparent">
      {/* Wrapper */}
      <div className="relative p-[2px] rounded-full overflow-hidden h-12 w-32">
        
        {/* Rotating Gradient Border */}
        <motion.div

          whileHover={{duration:2}} 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute h-full w-full inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #4285f4, #9b72cb, #d96570, #4285f4)",
          }}
        />

        {/* Inner Mask */}
        <div className="relative flex items-center justify-center h-full w-full bg-slate-300 rounded-full">
          <button className="text-zinc-700 hover:text-black transition-colors text-sm font-medium">
            Components
          </button>
        </div>
      </div>
      {/* Wrapper */}
      <div className="relative p-[2px] rounded-full overflow-hidden h-12 w-32">
        
        {/* Rotating Gradient Border */}
        <motion.div

          whileHover={{duration:2}} 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute h-full w-full inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #4285f4, #9b72cb, #d96570, #4285f4)",
          }}
        />

        {/* Inner Mask */}
        <div className="relative flex items-center justify-center h-full w-full bg-slate-200 rounded-full">
          <button className="text-zinc-700 hover:text-black transition-colors text-sm font-medium">
            SnapUI Pro
          </button>
        </div>
      </div>


    </div>
  );
}

function Home(params) {
  
return(
<div className="bg-slate-200 text-white text-4xl">

      

      

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <Navbar />
        <InfoUnderfifty />
        <Colourfulldiv />
      </section>
      

      {/* NORMAL FLOW */}
      
      
      <Raindrops />
      <Middle />
      <Exploremore />
      <Footer />

    </div>
  )
      }









export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/components" element={<Components/>}/>
      <Route path="/cards" element={ <Cardscollection/> }> 
      <Route path="/cards1" element={<Cards/>}></Route>
      </Route>
    
    </Routes>
  );
}
