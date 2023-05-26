import { ADD_TO_CART, REMOVE_TO_CART } from "./contants"

export const addToCart = (data)=>{
    console.log("sojsjd",data)
    return {
        type : ADD_TO_CART,
        data
    }
}
