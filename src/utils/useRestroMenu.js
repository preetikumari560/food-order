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

 },[resId],data)

        const apiCall=async()=>{
        
        const calledData= await fetch(`https://thingproxy.freeboard.io/fetch/https://www.eatsure.com/v1/api/get_all_products/brand_id/${resId}/store_id/10172/source_id/12`)

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

 return [data,vegClicker,nonVegClicker, clearClicker]

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