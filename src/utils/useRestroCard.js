import { useState, useEffect } from "react"

 const useRestroCard=()=>{


 const [searchValue, setSearchValue]=useState('')
 const [data,setDummyData]= useState([])
 const [copyData,setCopyData]= useState([])



 const apiData=async()=>{
 const data= await fetch("https://thingproxy.freeboard.io/fetch/https://www.eatsure.com/v1/api/get_restaurants?")
 const jsonData= await data.json()
 return jsonData?.data?.data
 }
 
 
 
 useEffect(() => {
   const fetchData = async () => {
     const response = await apiData();
     setCopyData(response)
     setDummyData(response);
   };
 try{
   fetchData()}catch(err){
   console.log("The error is :", err)
   }
 
 
 }, [])



useEffect(() => {
    const delay = setTimeout(() => {
      if (searchValue.trim() !== "") {
        const filtered = copyData.filter((i) =>
          i.main_offering.toLowerCase().includes(searchValue.toLowerCase())
        );
        setDummyData(filtered);
        // console.log(filtered)
      } else {
        setDummyData(copyData);
        //   console.log(copyData)
      }

      console.log("it's  working")
    }, 400); // delay in ms

    return () => clearTimeout(delay); // Cleanup timeout on each keypress
  }, [searchValue, copyData]);




 function searchBar (e){
console.log(e.target.value)
setSearchValue(e.target.value)

}




function vegClicker(){

const data1= data.filter((item)=>item.slug.includes("veg"))
setDummyData(data1)
console.log(data1)
}

function nonVegClicker(){

const data1= data.filter((item)=>item.slug.includes("icken"))
setDummyData(data1)
console.log(data1)
}

function clearFilter(){

// const data1= data.filter((item)=>item.slug.includes("veg"))
setDummyData(copyData)

}


        return [data,searchValue, searchBar,vegClicker,nonVegClicker,clearFilter]
 
 }

 export default useRestroCard