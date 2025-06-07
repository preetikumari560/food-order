import { useSelector ,useDispatch} from "react-redux"
import {addItem, deleteItem} from "../utils/cartSlicer"
import { useState } from "react"

const Cart=()=>{


// const [count , setCount]=useState()

const cartItems= useSelector((store)=>store.cart.items)

console.log(cartItems)

const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
const totalPrice=  cartItems.reduce((acc, item)=>acc+item.quantity*item.price,0)

const dispatch= useDispatch()

const addHandler=(data)=>{
// setCount(count++)
dispatch(addItem(data))
}

const subHandler=(data)=>{

dispatch(deleteItem(data))


}
return(

<div>


<div className=" flex flex-row flex-wrap justify-center   ">

 {cartItems?.map((ele)=>{
        return(  <div className=" border-1   flex-col m-5 w-[150px] " key={ele.product_id}>
        <div className="relative  bg-gray-100 text-gray-800 rounded-lg shadow-md 
     border-4 border-transparent 
      bg-gradient-to-r from-black via-[#7A4227] to-[#B87333] 
      [background-origin:border] 
      [background-clip:padding-box,border-box]">

            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 z-10 flex gap-2 items-center justify-center bg-black border-2 border-amber-50 bg-opacity-60 px-5 text-lg  py-1.5 rounded text-white">

        <button onClick={()=>addHandler(ele)}>+</button><span>{ele.quantity}</span>
    <button onClick={()=>subHandler(ele)}>-</button>

</div>
        <img src={ele.product_imageUrl} className="w-[100%] h-[100px]"></img></div>
        <p className="text-sm px-1.5 ">{ele.product_name}</p> 
             <p className="font-bold px-1.5 "> Price: ₹{ele.price}</p>
        
        </div>)})}</div>





     {cartItems.length > 0 && (
       <div className="flex justify-center mt-8 w-full">
        <div className="flex flex-col mt-8 w-full max-w-md p-4 rounded-lg bg-gray-100 shadow-md text-gray-800">
          <h2 className="text-xl font-bold border-b pb-2 mb-3">🧾 Order Summary</h2>
          <div className="flex justify-between py-1">
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Subtotal:</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between py-1">
            <span>GST (5%):</span>
            <span>₹{(totalPrice * 0.05).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t mt-2 pt-2">
            <span>Total:</span>
            <span>₹{(totalPrice * 1.05).toFixed(2)}</span>
          </div>
        </div>
        </div>
        )}
   
</div>

)

}


export default Cart