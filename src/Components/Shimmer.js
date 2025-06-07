 const Shimmer=()=>{
 
 return(
 
 
 <div className="flex flex-wrap cardContainer w-10/12  flex-row   justify-center">
 
  {[...Array(20)].map((_,i)=>(<div  className=" shimmer"  key={i}><div  className="h-[200px] w-full"></div>
  
  
  <div className="shimmerChild"></div>
  </div>))}



 
 </div>
 
 
 )
 }

  export default Shimmer