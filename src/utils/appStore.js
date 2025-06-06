import { configureStore } from "@reduxjs/toolkit" 

import CartReducer from "./cartSlicer"

 const appStore=  configureStore({
 
 reducer:{
 
 cart:CartReducer,
 
 }
 
 
 })


 export default appStore