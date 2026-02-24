import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Components = () => {
  return (
    <div className="backdrop-blur-md bg-slate-900/75 h-fit w-80 rounded-xl shadow-2xl p-4">
      <div className="bg-slate-900/65 rounded-xl p-2 backdrop-blur-md ">Components Panel </div>
      
      <div className="flex mt-2 flex-col gap-3">
        <NavLink className={({isActive})=> isActive ? "bg-slate-900/65 rounded-xl p-2" : "bg-slate-900/75 backdrop-blur-md rounded-xl p-2  " }  to="/Cards">Cards</NavLink>
        <NavLink className={({isActive})=> isActive ? "bg-slate-900/65 rounded-xl p-2" : "bg-slate-900/75 backdrop-blur-md rounded-xl p-2  " } to="/HeroSections">Hero sections</NavLink>
        <NavLink className={({isActive})=> isActive ? "bg-slate-900/65 rounded-xl p-2" : "bg-slate-900/75 backdrop-blur-md rounded-xl p-2  " } to="/Navbars">Navbars</NavLink>
        <NavLink className={({isActive})=> isActive ? "bg-slate-900/65 rounded-xl p-2" : "bg-slate-900/75 backdrop-blur-md rounded-xl p-2  " } to="/AnimatedIcons">Animated icons <span className="text-amber-300 border-spacing-1 border-amber-500"> 100+ </span> </NavLink>
        <NavLink className={({isActive})=> isActive ? "bg-slate-900/65 rounded-xl p-2" : "bg-slate-900/75 backdrop-blur-md rounded-xl p-2  " } to="/Cards">Cards</NavLink>
        <NavLink className={({isActive})=> isActive ? "bg-slate-900/65 rounded-xl p-2" : "bg-slate-900/75 backdrop-blur-md rounded-xl p-2  " } to="/Cards">Cards</NavLink>
        <NavLink className={({isActive})=> isActive ? "bg-slate-900/65 rounded-xl p-2" : "bg-slate-900/75 backdrop-blur-md rounded-xl p-2  " } to="/Cards">Cards</NavLink>
        <NavLink className={({isActive})=> isActive ? "bg-slate-900/65 rounded-xl p-2" : "bg-slate-900/75 backdrop-blur-md rounded-xl p-2  " } to="/Cards">Cards</NavLink>
        <NavLink className={({isActive})=> isActive ? "bg-slate-900/65 rounded-xl p-2" : "bg-slate-900/75 backdrop-blur-md rounded-xl p-2  " } to="/Cards">Cards</NavLink>

      </div>
    </div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 inset-x-0 z-10 flex justify-center">
      <div className="w-[1225px] backdrop-blur-md bg-slate-900/75 rounded-lg px-6 py-4 flex items-center justify-between relative">
        
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          Snap<span className="text-purple-400">UI</span>
        </div>

        {/* Links */}
        <div className="flex gap-10 text-white font-bold text-lg">
          <NavLink to="/">Home</NavLink>

          {/* 🔥 Components Hover */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <motion.div className="cursor-pointer">
              Components
            </motion.div>

            {/* Floating Panel */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full mt-4 left-1/2 -translate-x-1/2"
                >
                  <Components />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/templates">Templates</NavLink>
        </div>
      </div>
    </nav>
  );
}