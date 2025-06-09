import { useState } from "react"

import { useContext } from "react"
import { Link } from "react-router"
  import useOfline from "../utils/userOfline"
import { useSelector } from "react-redux"

  import UserContext from "../utils/UserContext"

 const NavBar=()=>{
         const [menuOpen, setMenuOpen] = useState(false);
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


  <button
          className="lg:hidden text-white focus:outline-
          
          none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
     <div
  className={`${
    menuOpen ? "flex" : "hidden"
  } lg:flex lg:items-center lg:space-x-4 absolute lg:static top-[70px] left-0 w-full lg:w-auto z-50 px-6 lg:px-0 py-4 lg:py-0 bg-gradient-to-r from-black via-[#7A4227] to-[#B87333] lg:bg-none flex-col lg:flex-row`}
>
  <ul className="flex flex-col lg:flex-row lg:space-x-4 w-full lg:w-auto lg:h-[42px]">


       {/* <ul className="flex justify-around p-4 m-4  font-bold  "> */}
       <li className="px-4  "> {status?"🟢":"🔴"}</li>
       {/* <li className="px-4">{customer.name} - {customer.email} </li> */}
       <li className="navBtn "><Link to="/">Home</Link></li>
       <li className="navBtn"><Link to="/about">About us</Link></li>
        <li className="navBtn "><Link to="/contact">Contact Us</Link></li>
      <li className="flex items-center justify-center ml-3 px-5 py-2 relative">
  <Link to="/cart" className="relative">
    <img
      width="40"
      className="block"
      src="https://img.icons8.com/comic/50/FFFFFF/shopping-cart.png"
      alt="shopping-cart"
    />
    {cartItems.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xl font-bold rounded-full px-1.5">
        {cartItems.length}
      </span>
    )}
  </Link>
</li>



       </ul>
      </div>
              {/* <button  onClick={logFunction}>{btnStatus}</button> */}
       

               <style>{`
         .navBtn {
    
    margin-top: 10px;
    text-align: center;
    background-image: linear-gradient(to right, black, #7A4227, #B87333);
    color: white;
    font-weight: 600;
    border-radius: 6px;
    padding: 0;
    width: 100%;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7);
  }


  .navBtn:hover {
    background-image: linear-gradient(to right, black, #A35C28, #D98C53);
  }

  @media (min-width: 1024px) {
    .navBtn {
      margin-top: 0;
      width: 160px; /* Fixed width for large screens */
      padding: 10px 0; /* Fixed height */
    }
  }
      `}</style>


        </div>
        )

        }


 export default NavBar