import { useState } from "react"

 
//custom hook to check internet connection:
 const useOfline=()=>{
 
const [result, setResult]= useState(true)


window.addEventListener("offline",()=>{

setResult(false)
})

window.addEventListener("online",()=>{

setResult(true)
})

return result
 
 }

 export default useOfline