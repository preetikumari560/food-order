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
        <div id="navBar" className="flex justify-between  bg-gradient-to-r from-black via-[#7A4227] to-[#B87333]
    text-white font-semibold
    px-6 py-2 rounded-md
    shadow-lg shadow-black/70
">
        <img id="logo"  className="w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrgmmbEKIYo_HnMPcPPjzbBRp-U9kEgwNbQ&s"/>



      
       <ul className="flex justify-around p-4 m-4  font-bold  h-[75px]">
       <li className="px-4 "> {status?"🟢":"🔴"}</li>
       {/* <li className="px-4">{customer.name} - {customer.email} </li> */}
       <li className=" ml-3 bg-gradient-to-r from-black via-[#7A4227] to-[#B87333]
    text-white font-semibold
    px-6 py-2 rounded-md
    shadow-lg shadow-black/70
    hover:from-black hover:via-[#A35C28] hover:to-[#D98C53]
    focus:outline-none focus:ring-2 focus:ring-[#B87333]
    transition-all duration-300"><Link to="/">Home</Link></li>
       <li className="ml-3   bg-gradient-to-r from-black via-[#7A4227] to-[#B87333]
    text-white font-semibold
    px-6 py-2 rounded-md
    shadow-lg shadow-black/70
    hover:from-black hover:via-[#A35C28] hover:to-[#D98C53]
    focus:outline-none focus:ring-2 focus:ring-[#B87333]
    transition-all duration-300"><Link to="/about">About us</Link></li>
        <li className="ml-3   px-6 bg-gradient-to-r from-black via-[#7A4227] to-[#B87333]
    text-white font-semibold
   py-2 rounded-md
    shadow-lg shadow-black/70
    hover:from-black hover:via-[#A35C28] hover:to-[#D98C53]
    focus:outline-none focus:ring-2 focus:ring-[#B87333]
    transition-all duration-300"><Link to="/contact">Contact Us</Link></li>
       <li className=" relative w-[70px]  ml-3  px-5 py-2"><Link to="/cart"> <img className="absolute top-[1px]" width="50" src="https://img.icons8.com/comic/50/FFFFFF/shopping-cart.png" alt="shopping-cart"/> <span className="absolute  bottom-5 right-1.5 text-xl  ">{cartItems.length>0?cartItems.length:null} </span></Link></li>

    <li>
    
   
    </li>
       </ul>
      
              {/* <button  onClick={logFunction}>{btnStatus}</button> */}
       
        </div>
        )

        }


 export default NavBar