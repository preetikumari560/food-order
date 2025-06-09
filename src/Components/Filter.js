 import Dummy_Data from "../utils/constant"
 
 const Filter=({onClick,name})=>{
 
 return (
 
<button className=" lg:w-[200px] mt-8 mx-2.5   md:w-[150px]  bg-gradient-to-r from-black via-[#7A4227] to-[#B87333]
    text-white font-semibold
    px-6 py-2 rounded-md
    shadow-lg shadow-black/70
    hover:from-black hover:via-[#A35C28] hover:to-[#D98C53]
    focus:outline-none focus:ring-2 focus:ring-[#B87333]
    transition-all duration-300" onClick={onClick}>{name}</button>
 
 
 )}

 export default Filter