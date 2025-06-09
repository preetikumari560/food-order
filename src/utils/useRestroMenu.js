import { useEffect, useState } from "react"

 import { useLocation } from "react-router"

 const useRestroMenu=(resId)=>
{
 const [data, setData]= useState()
 const [originalData, setOriginalData] = useState();
 
 //fetch api:

 useEffect(()=>{
 
        const run= async function (params) {
            
        {
                const FinalData= await apiCall()
                setData(FinalData)
                setOriginalData(FinalData)
        }}

        try{
        
        run()
        
        }catch(error){    
        console.log(error)
        }

 },[resId])

        const apiCall=async()=>{
        //api from food-order-backend , deployed on 
        const calledData= await fetch(`https://food-order-backend-0ulx.onrender.com/api/menu/${resId}`)

        const jsonData= await calledData.json()
        return jsonData?.data?.collections

        }

 function clearClicker() {
  setData(originalData);

}

  function vegClicker() {
  const filtered = originalData?.map(group => ({
    ...group,
    products: group.products.filter(product => product.is_veg > 0),
  })).filter(group => group.products.length > 0);

  setData(filtered);
}

function nonVegClicker() {
  const filtered = originalData?.map(group => ({
    ...group,
    products: group.products.filter(product => product.is_veg ===0),
  })).filter(group => group.products.length > 0)

  setData(filtered)
}

 return [data,vegClicker,nonVegClicker, clearClicker,originalData]

 }



export const useDataLocation = () => {
  const location = useLocation();
  const restroInfo = location.state?.restroDetails;
  

  if (restroInfo) {
    sessionStorage.setItem("restroInfo", JSON.stringify(restroInfo));
    return restroInfo;
  }

  const cached = sessionStorage.getItem("restroInfo");
  return cached ? JSON.parse(cached) : null;
};

 export default useRestroMenu