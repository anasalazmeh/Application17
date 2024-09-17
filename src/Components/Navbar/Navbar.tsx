import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Navbar = () => {
  const [counter,setCounter] =useState(1)

  const listNavbar=[
    {
      id:1,
      title:"Application data"
    },
    {
      id:2,
      title:"Tax residency"
    },
    {
      id:3,
      title:"Indentity card"
    },
    {
      id:4,
      title:"Investability"
    },
    {
      id:5,
      title:"Review"
    }
  ]

  return (
    <div className="container">
      {/* upper Navber */}
      <div className="flex  justify-between items-center my-5 md:my-20">
        <div className="text-primary text-sm md:text-2xl xl:text-5xl font-[700] ">Upgrade your Account</div>
        <div className="text-[5px] md:text-[13px]">
          1 of 5 Completed
          <div className="w-[150px] md:w-[200px] xl:w-[400px] h-2 md:h-5 xl:px-1 rounded-full border flex items-center ">
            <div className="w-1/3 h-2 md:h-3 rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      {/* lower Navber */}
      <div className="my-5 md:my-20">
          <ul className="flex justify-center items-center">
              {listNavbar.map(item=><li className="group mx-1 md:mx-3 flex items-center justify-center  cursor-pointer transition-all duration-500 " onClick={()=>setCounter(item.id)}>
                <div className={`w-3 h-3 md:w-6 md:h-6 xl:w-10 xl:h-10 rounded-full border  flex items-center justify-center ${counter ==item.id ? "border-secondary" :"border-gray-300"}`}>
                  <FaCheck className={` text-[6px] xl:text-[12px] text-secondary ${counter ==item.id ? "block " :"hidden"}`}/>
                </div>
                <div className={`text-[5px] sm:text-[10px] md:text-[13px]  mx-1 xl:mx-5 xl:text-[20px] font-[500] group-hover:text-black ${counter == item.id ? "text-secondary group-hover:text-secondary" :"text-gray-400"}`}>{item.title}</div>
                <div className={`text-sm xl:text-4xl flex items-center justify-start group-hover:text-black -translate-y-[6px] md:-translate-y-[4px] xl:-translate-y-3   font-bold group-last:hidden ${counter == item.id ? "text-secondary group-hover:text-secondary" :"text-gray-400"}`}>_</div>
              </li>)}
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
