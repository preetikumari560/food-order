
import { useParams } from "react-router"
import useRestroMenu, { useDataLocation } from "../utils/useRestroMenu"
import RestroCard from "./RestroCard"
import { useDispatch,useSelector } from "react-redux"
import { addItem,deleteItem } from "../utils/cartSlicer"
 import BackToTopButton from "./BackToTopButton"
import Filter from "./Filter"
 

 const RestroMenu=()=>{

const cartItems= useSelector((store)=>store.cart.items)
console.log(`cartItems : ${ cartItems}`)
const dispatch= useDispatch()


const addHandler=(data)=>{
// console.log("I amclicked")
dispatch(addItem(data))
}

const subHandler=(data)=>{

dispatch(deleteItem(data))


}
 
 const {resId}= useParams()

 const restroInfo= useDataLocation() //for  receiving passed data by link tag

const [data, vegClicker,nonVegClicker,clearClicker]= useRestroMenu(resId) //Custom hook to receive data from API

 return (
 <div id="restroMenu">
<div className="w-[100%] bg-black text-xl"> 
<RestroCard tata={restroInfo} id="menuHead" /> 

</div>
<Filter name={"Veg"} onClick={vegClicker}/>
<Filter name={"Non-Veg"} onClick={nonVegClicker}/>
<Filter name={"Clear-All"} onClick={clearClicker}/>
<div className="menuBody flex mt-14 ">
 <div  className="flex flex-col w-4/12">
 {data?.map((item)=>{
 return(

 <a href={`#card-${item.collection_id}`}  key={item.collection_id}>
<h2  className="text-xl" >{item.collection_name}</h2></a>)})}
</div>


<div className="flex  flex-col w-8/12 flex-wrap">
 {data?.map((item)=>{
{console.log(item)}
 return(<div className="menuBodyCard  flex flex-col   " key={item.collection_id}  id={`card-${item.collection_id}`}>

 <h2 className="mb-12 text-xl">{item.collection_name}</h2>

 <div className="menuBodyCardCompOuter flex flex-row flex-wrap   ">

 {item?.products?.map((ele)=>{
   const itemInCart = cartItems.find((item) => item.product_id === ele.product_id);
        return(  <div className="menuBodyCardCompInner flex flex-col m-5 w-[250px]  " key={ele.product_id}> 
        <div className="relative">
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 z-10 flex gap-2 items-center justify-center bg-black border-2 border-amber-50 bg-opacity-60 px-5 text-xl  py-1.5 rounded text-white">
    <button  onClick={()=>addHandler(ele)}>+</button>
   <span> {itemInCart?.quantity || null}</span>
    <button onClick={()=>subHandler(ele)}>-</button></div>
        <img src={ele.product_imageUrl}  className="w-full"></img></div>
        <p>{ele.product_name}</p> </div>)})}</div>


</div>)})}</div>
</div>
<BackToTopButton/>
 </div>
 )
 }

 export default RestroMenu

//    const location = useLocation();
//   const restroInfo = location.state?.restroDetails;
//    console.log(restroInfo)
// const [data, setData]=useState()

 // useEffect(()=>{

// const run= async()=>{
//         const data = await funRestroMenu()
//         console.log(data)
//         setData(data)
// }

// try{
//     run()
// }catch(errMenu){
// console.log("The menu page error is :", errMenu)
// }

// },[resId])


// const funRestroMenu=async()=>{

// const callData= await fetch(`https://thingproxy.freeboard.io/fetch/https://www.eatsure.com/v1/api/get_all_products/brand_id/${resId}/store_id/10172/source_id/12`)

// const jsonData= await callData?.json()


// return jsonData?.data?.collections

// }