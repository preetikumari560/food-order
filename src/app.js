import Error from "./Components/Error.js";
import Cart from "./Components/Cart.js";
 import ReactDOM from "react-dom/client"
 import Contact from "./Components/Contact.js"
//  import About from "./Components/About.js";
 import Header from "./Components/Header"
 import Body  from "./Components/Body.js";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router";
import RestroMenu from "./Components/RestroMenu.js";
import ClassComp from "./Components/ClassComp.js"
import { lazy ,Suspense, useContext, useState} from "react";

import Market from "./Components/Extra.js";

import UserContext from "../src/utils/UserContext.js";
import appStore from "./utils/appStore.js"
import { Provider } from "react-redux";


 const About= lazy(()=>import("./Components/About.js")) //Lazy loading way to import a component to create a different bundle of js file




 const App= ()=>{

 const {customer}=useContext(UserContext)

const [contextData, setContextData]=useState({

name:"trisha",
email:"trisha@outlook.com"

})

 return(
  <Provider store={appStore}>
<UserContext.Provider value={{customer:contextData, setContext: setContextData}}>
 <Header/>
 <Outlet/>
 {/* <Body/>
 <Footer/> */}

 
 </UserContext.Provider>
 </Provider>
 )}



//used <Suspense/> here to resolve issue of delay by passing fallback as a placeholder
const ele= createBrowserRouter([{path:"/",
element:<App/>, 
errorElement:<Error/>,
children:[
{path:"/",
element:<Body/>},
{path:"/about",
element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>,
children:[
{path:"/about/child-about", 
element:<ClassComp/>}]},
{path:"/contact",
element:<Contact/>},{

path:"/restaurant/:resId",element:<RestroMenu/>

},{path:"/cart",element:<Cart/>}

]},{path:"/market", element:<Market/>},

,

])

 const root= ReactDOM.createRoot(document.getElementById("root"))

 root.render(<RouterProvider  router={ele}/>)