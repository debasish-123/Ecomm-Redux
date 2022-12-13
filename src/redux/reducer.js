import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './constant';


export const cartItem = (data=[], action) => {

    // if(action.type===ADD_TO_CART){

    // console.warn("Reducer called", action)
    // return action.type
    // }
    // else{
    // return "no action called"

    // }





    switch (action.type) {
        case ADD_TO_CART:
            console.log("ADD_TO_CART condition", action)
            return [action.data, ...data];

            case REMOVE_FROM_CART:
                console.log("REMOVE_FROM_CART condition", action)
                data.length=data.length ? data.length-1 :[]
                const remainingItem =data.filter((item)=>item.id!==action.data);
                console.warn("remainingitem",remainingItem)
               return [...remainingItem];


                case EMPTY_CART:
                    console.log("EMPTY_CART condition", action)
                    data=[]
                    return [...data];
                
                
        default:
            return data

    }
    

}