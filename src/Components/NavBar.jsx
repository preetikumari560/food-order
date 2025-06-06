import { useState } from "react"

import { useContext } from "react"
import { Link } from "react-router"
  import useOfline from "../utils/userOfline"
import { useSelector } from "react-redux"

  import UserContext from "../utils/UserContext"

 const NavBar=()=>{
        
        const cartItems= useSelector((store)=>store.cart.items)
        console.log(cartItems)

        const {customer}= useContext(UserContext)
        console.log("body rendered")

          const status= useOfline()
       //  const [btnStatus, setBtnStatus]=useState("login")

              // const logFunction=()=>{

              //     (btnStatus==="login")?setBtnStatus("logout"): setBtnStatus("login")
        
              // }

        return(
        <div id="navBar" className="flex justify-between">
        <img id="logo"  className="w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrgmmbEKIYo_HnMPcPPjzbBRp-U9kEgwNbQ&s"/>



      
       <ul className="flex justify-around p-4 m-4">
       <li className="px-4"> {status?"🟢":"🔴"}</li>
       {/* <li className="px-4">{customer.name} - {customer.email} </li> */}
       <li className="px-4"><Link to="/">Home</Link></li>
       <li className="px-4"><Link to="/about">About us</Link></li>
        <li className="px-4"><Link to="/contact">contact</Link></li>
       <li className="px-4"><Link to="/cart">Cart {cartItems.length>0?cartItems.length:null}</Link></li>
       </ul>
      
              {/* <button  onClick={logFunction}>{btnStatus}</button> */}
       
        </div>
        )

        }


 export default NavBar