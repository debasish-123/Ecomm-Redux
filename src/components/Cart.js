import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartItem } from "../redux/reducer";
function Cart() {
    const cartItem=useSelector((state)=>state.cartItem);
    let amount =cartItem.length && cartItem.map(item=>item.price).reduce((prev,next)=> prev+next)
    console.warn(amount);
  return (
    <div>
      <Link to="/">Product-List</Link>
      <h1>Cart Page</h1>
      <div className="cart-page-container">
        <table>
            <tr>
                <td>Name</td>
                <td>Color</td>
                <td>Price</td>
                <td>Brand</td>
                <td>Category</td>
            </tr>
            {
                cartItem.map((item)=>  <tr key ={item.id}>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category }</td>
            </tr>)
            }
        </table>
        <div className="price-details">
            <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
            <div className="adjust-price"> <span>Discount</span><span>{amount/10}</span></div>
            <div className="adjust-price"><span>Tax</span><span>{amount}</span></div>
            <div className="adjust-price"><span>Total</span><span>{amount-(amount/10)}</span></div>

        </div>

      </div>
    </div>
  );
}

export default Cart;