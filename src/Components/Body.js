
 import CardContainer from "./CardContainer"
 import useRestroCard from "../utils/useRestroCard"
 import Filter from "./Filter"
 import SearchBar from "./SearchBar"

//  import UserContext from "../utils/UserContext"
// import { useContext } from "react"

   const Body= ()=>{

  //  const {customer, setContext}=useContext(UserContext)

   const [data,  searchValue, searchBar,vegClicker, nonVegClicker,clearFilter] =useRestroCard()

   return (
  
  <div className="">
 <SearchBar value={searchValue}  onChange={searchBar}/>
  <div className="flex flex-row">
  <div className="w-2/12 flex flex-col items-center">
  <Filter onClick={vegClicker} name={"Veg"}/>
   <Filter onClick={nonVegClicker} name={"Non-Veg"}/>
    <Filter onClick={clearFilter} name={"Clear-filter"}/>
    </div>

 
{/* 
  <SearchBar value={customer.name} onChange={(e)=>{console.log(e.target.value)
  
  setContext({...customer,
  name:e.target.value})
  }}/> */}

  <CardContainer data={data} className =" "/>
</div>
  </div>
  )
   }

  export default Body