
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
  
  <div>
  <Filter onClick={vegClicker} name={"Veg"}/>
   <Filter onClick={nonVegClicker} name={"Non-Veg"}/>
    <Filter onClick={clearFilter} name={"Clear-filter"}/>

  <SearchBar value={searchValue}  onChange={searchBar}/>
{/* 
  <SearchBar value={customer.name} onChange={(e)=>{console.log(e.target.value)
  
  setContext({...customer,
  name:e.target.value})
  }}/> */}

  <CardContainer data={data}/>

  </div>
  )
   }

  export default Body