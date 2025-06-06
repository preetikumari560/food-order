import { useSelector ,useDispatch} from "react-redux"
import {addItem, deleteItem} from "../utils/cartSlicer"
import { useState } from "react"

const Cart=()=>{


// const [count , setCount]=useState()

const cartItems= useSelector((store)=>store.cart.items)

console.log(cartItems)

const dispatch= useDispatch()

const addHandler=(data)=>{
// setCount(count++)
dispatch(addItem(data))
}

const subHandler=(data)=>{

dispatch(deleteItem(data))


}
return(




<div className="menuBodyCardCompOuter">

 {cartItems?.map((ele)=>{
        return(  <div className="menuBodyCardCompInner" key={ele.product_id}>
        <button onClick={()=>addHandler(ele)}>add</button>
    <button onClick={()=>subHandler(ele)}>sub</button>
<span>{ele.quantity}</span>

        <img src={ele.product_imageUrl}></img>
        <p>{ele.product_name}</p> </div>)})}</div>



)

}


export default Cart