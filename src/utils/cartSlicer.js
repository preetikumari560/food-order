 import { createSlice } from "@reduxjs/toolkit";

 const cartSlicer= createSlice(
 {
 
        name:"cart",
        initialState:{items:[]
        
        },
        reducers:{
        
         addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (i) => i.product_id === item.product_id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    }
        ,

        deleteItem:(state,action)=>{
        
 const item = action.payload;

  const index = state.items.findIndex(
    (i) => i.product_id === item.product_id
  );

  if (index !== -1) {
    if (state.items[index].quantity > 1) {
      state.items[index].quantity -= 1;
    } else {
      state.items.splice(index, 1); // remove the item if quantity becomes 0
    }
  }
        },


        clearCart:(state, action)=>{
        
        
        state.items.length=0
        }
           
        }
 
 }
 
 )

export const{addItem,deleteItem,clearCart}= cartSlicer.actions

 export default cartSlicer.reducer

