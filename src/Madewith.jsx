import React from "react";
function Exploremore() {

    return(
        <div>

        <h2 className="flex justify-start bg-slate-900  bg-clip-text text-slate-700 drop-shadow-[0_0_60px_rgba(0,0,0,0.9)] text-4xl font-bold  "> Made with </h2> 


        <div className="flex flex-wrap gap-5">
            
            <div className=" bg-gradient-to-r from-black from-10% to-gray-900 to-90%  w-44 rounded-full flex gap-2 ">
                <img className="h-14 p-2 w-14  rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPznwv7OeqDgGjrlZfT28XyX4J9oJyZ9TYwg&s" alt="" />
                <h4 className=" flex align-middle mt-3 text-xl "> Motion   </h4>
            </div>

             <div className=" bg-gradient-to-r from-black from-10% to-gray-900 to-90%  w-44 rounded-full flex gap-2 ">
                <img className="h-14 p-2 w-14  rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubsfvX1GCHF8amyfEQxTz7AECFDY-oGMVTg&s" alt="" />
                <h4 className=" flex align-middle mt-3 text-xl "> CSS   </h4>
            </div>

             <div className=" bg-gradient-to-r from-black from-10% to-gray-900 to-90%  w-52 rounded-full flex gap-2 ">
                <img className="h-14 p-2 w-14  rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" alt="" />
                <h4 className=" flex align-middle mt-3 text-xl "> Tailwind CSS   </h4>
            </div>

             <div className=" bg-gradient-to-r from-black from-10% to-gray-900 to-90%  w-36 rounded-full flex gap-2 ">
                <img className="h-14 p-2 w-14  rounded-full " src="https://www.solarsystemvisualizer.com/assets/React_Logo-DbavuWM8.png" alt="" />
                <h4 className=" flex align-middle mt-3 text-xl "> React    </h4>
            </div>

             <div className=" bg-gradient-to-r from-black from-10% to-gray-900 to-90%  w-36 rounded-full flex gap-2 ">
                <img className="h-14 p-2 w-14  rounded-full " src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="" />
                <h4 className=" flex align-middle mt-3 text-xl "> Redux   </h4>
            </div>

             <div className=" bg-gradient-to-r from-black from-10% to-gray-900 to-90%  w-44 rounded-full flex gap-2 ">
                <img className="h-14 p-2 w-14  rounded-full " src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/960px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                <h4 className=" flex align-middle mt-3 text-xl "> Javascript   </h4>
            </div>

             <div className=" bg-gradient-to-r from-black from-10% to-gray-900 to-90%  w-44 rounded-full flex gap-2 ">
                <img className="h-14 p-2 w-14  rounded-full " src="https://cdn.pixabay.com/photo/2018/05/08/21/28/html5-3384014_1280.png" alt="" />
                <h4 className=" flex align-middle mt-3 text-xl "> HTML   </h4>
            </div>




        </div>
        </div>
    )
    
    
}

export default Exploremore;