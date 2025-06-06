import { createContext} from "react";

 const UserContext= createContext(
 
 {
 
 customer:{
 
 name:"dummy",
 email:"dummy@gmail.com"
 }
 
 }
 )



UserContext.displayName= "UserContext" // helpful for debugging, to trace the name of hook
 export default UserContext