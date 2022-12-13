import { PRODUCT_LIST } from './constant';
import { SEARCH_PRODUCT } from './constant';
//import { SET_PRODUCT_LIST } from './constant';


export const productList = () => {
  //  let data = "hello, how are you";
  // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // data = await data.json()

  //   console.warn("Product Action called", data)
    
    return{
        type: PRODUCT_LIST,
       // data: "apple"
    }

}

// export const setProductList = (data) => {
    
//     return{
//         type: SET_PRODUCT_LIST,
//         data
//     }

// }

export 
const productSearch = (query)=>
{
return {
    type :SEARCH_PRODUCT,
    query,
}
}