import RestroCard from "./RestroCard"

import Shimmer from "./Shimmer"

import { Link } from "react-router"

import BackToTopButton from "./BackToTopButton"

 const CardContainer=({data})=>{

 return data.length===0? <Shimmer/>: (

<div  className="cardContainer" >

 {data?.filter(item => item?.banner_image_es).map((item) => (
  <Link to={`/restaurant/${item?.brand_id}` } key={item?.brand_id}  state={{ restroDetails: item }} >
    <RestroCard tata={item}  id={"restroCard"} style={{backgroundColor:"#D3D3D3"}} />
  </Link>
))}
  <BackToTopButton/>
 </div>
 )
 }

 export default CardContainer



// const [searchValue, setSearchValue]=useState('')
// const [data,setDummyData]= useState([])
// const [copyData,setCopyData]= useState([])



 // const apiData=async()=>{
// const data= await fetch("https://thingproxy.freeboard.io/fetch/https://www.eatsure.com/v1/api/get_restaurants?")
// const jsonData= await data.json()
// return jsonData?.data?.data
// }



// useEffect(() => {
//   const fetchData = async () => {
//     const response = await apiData();
//     setCopyData(response)
//     setDummyData(response);
//   };
// try{
//   fetchData()}catch(err){
//   console.log("The error is :", err)
//   }


// }, [])

// useEffect(() => {
//     const delay = setTimeout(() => {
//       if (searchValue.trim() !== "") {
//         const filtered = copyData.filter((i) =>
//           i.main_offering.toLowerCase().includes(searchValue.toLowerCase())
//         );
//         setDummyData(filtered);
//       } else {
//         setDummyData(copyData);
//       }
//     }, 400); // delay in ms

//     return () => clearTimeout(delay); // Cleanup timeout on each keypress
//   }, [searchValue, copyData]);


// function searchBar (e){

// setSearchValue(e.target.value)
// }



 {/* {data?.map((item,index)=>{
 return(

 (item?.banner_image_es)? <Link  to={"/restaurant/"+item?.brand_id}  key={item?.brand_id} ><RestroCard  tata={item} /></Link>:null
 
 )
 }
 
 )} */}

// const cardStyle={color:"blue"}
//  <div  className="cardContainer" style={cardStyle}></div>
 