import { createSlice } from "@reduxjs/toolkit";


const slice=createSlice({
    name: 'cart',
    initialState:{numshow:0 , productsitem:[]},
    reducers:{
        addToCart:(state , action) =>{
             state.productsitem.push({...action.payload})
             state.numshow += 1
           
         },

        increaseToCart:(state  , action) => {
            state.productsitem.map((product) =>{
                if(action.payload == product.id){
                    product.count += 1
                    product.totalprice = product.count * product.price

                }
            })
            },

        decreaseToCart:(state  , action) => {
            state.productsitem.map((product) =>{
                if(action.payload == product.id){
                    product.count -= 1
                    product.totalprice = product.totalprice - product.price

                }
            })
         },

        delFromCart:(state  , action) => {
            state.productsitem=state.productsitem.filter(del => del.id != action.payload.id )
            state.numshow -= 1
            

        }
    }
    
})
// console.log(slice)
export const {addToCart , increaseToCart , decreaseToCart , delFromCart} = slice.actions
export default slice.reducer