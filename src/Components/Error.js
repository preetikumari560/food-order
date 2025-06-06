 import { useRouteError } from "react-router";


 const Error=()=>{
 
 const error=useRouteError()
 console.log(error)
return(

<div>
{error.status}:{error.statusText}
</div>


)

 }

 export default Error