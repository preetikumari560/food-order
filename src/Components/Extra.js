import { useContext, useState } from "react"

import UserContext from "../utils/UserContext"



 const Extra=({name, decription,isVisible,setIsvisible,id})=>{

    const {customer}= useContext(UserContext)

 return(
<>
<div>{customer.name}</div>
<div  className=" border-2 m-4">
 
<button  onClick={()=>{
       
  console.log(id, isVisible)
   setIsvisible(id)
}}>show</button>
 

{
 isVisible===id?<>
  <button  onClick={()=>{

        setIsvisible()

}}>hide</button>
  <h3 >name:{name}</h3>

 <h4>desc:{decription}</h4></>:null}


 
</div>
 </>
 )
 
 
 }



const Market=()=>{

  const [isVisible, setIsvisible]= useState("")

return(



<>
<Extra  name={"jiya"} decription={"girl"} isVisible={isVisible} setIsvisible={ setIsvisible} id="jiya"/>

<Extra  name={"ram"} decription={"boy"} isVisible={isVisible}  setIsvisible={setIsvisible} id="ram"/>

<Extra  name={"rajni"} decription={"girl"} isVisible={isVisible} setIsvisible={ setIsvisible} id="rajni"/>

<Extra  name={"lucky"} decription={"boy"} isVisible={isVisible} setIsvisible={setIsvisible} id="lucky"/>
</>
)

}


export default Market




