import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './constant';


export const addToCart = (data) => {
    console.warn("Action called", data)
    
    return{
        type: ADD_TO_CART,
        data
    }

}


export const removeFromCart = (data) => {
    console.warn("Remove from Cart called", data)
    
    return{
        type: REMOVE_FROM_CART,
        data
    }
}


    export const emptyCart = () => {
        console.warn("Action Empty Cart called")
        
        return{
            type: EMPTY_CART,
            
        }

}