
 import CardContainer from "./CardContainer"
 import useRestroCard from "../utils/useRestroCard"
 import Filter from "./Filter"
 import SearchBar from "./SearchBar"

//  import UserContext from "../utils/UserContext"
// import { useContext } from "react"

  const Body = () => {
  const [
    data,
    searchValue,
    searchBar,
    vegClicker,
    nonVegClicker,
    clearFilter,
  ] = useRestroCard();

  return (
    <div className="px-4 py-4">
      {/* SearchBar */}
      <div className="flex justify-center mb-4">
        <SearchBar
          value={searchValue}
          onChange={searchBar}
       
        />
      </div>

      {/* Filter + CardContainer Layout */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Filter Section */}
        <div className="flex flex-row lg:flex-col lg:justify-start  md:justify-center gap-4 lg:w-2/12 w-full">
          <Filter onClick={vegClicker} name={"Veg"} />
          <Filter onClick={nonVegClicker} name={"Non-Veg"} />
          <Filter onClick={clearFilter} name={"Clear-filter"} />
        </div>        
          <CardContainer data={data} />
       
      </div>
    </div>
  );
};

export default Body;

