 const Shimmer=()=>{
 
 return(
 
 <div className="shimmer">
 
  {[...Array(20)].map((_,i)=><div className="shimmerDiv" key={i}></div>)}



 
 </div>
 
 
 )
 }

  export default Shimmer