
 const SearchBar=({value,onChange})=>{


 return(
<div className="flex justify-center">
<input  className="m-10 w-3/12 
               border-0 border-b-2 border-[#B87333] 
               focus:outline-none focus:ring-0 
               text-center font-semibold text-gray-400 text-xl 
               placeholder:text-[#afaead]" placeholder="Search here..." value={value} onChange={onChange}></input></div>
 )
 
 }


 export default SearchBar