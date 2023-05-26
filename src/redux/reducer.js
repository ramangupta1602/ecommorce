import { ADD_TO_CART, REMOVE_TO_CART } from "./contants";

const initialState =[];

export const cartData =(data,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return [action.data];
        default:
            return 0
    }
}