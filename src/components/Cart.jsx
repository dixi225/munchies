import { useSelector,useDispatch} from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart=()=>
{
    const dispatch=useDispatch()
    const handleClearCart=()=>
    {
        dispatch(clearCart())
    }
    const cartItems=useSelector((store)=>store.cart.items)
    return <>
         <h1 className="font-bold text-black text-center text-2xl">Cart</h1>
         <div className="mt-10 flex flex-col space-y-4 items-center">
            <button className="p-4 bg-gray-100 hover:bg-gray-300 cursor-pointer font-bold text-xl" onClick={handleClearCart}>
                        Clear Cart
            </button>
         {cartItems.length==0?"Your cart is Empty":<ItemList itemsarr={cartItems}/>} 
         </div>
    </>

}
export default Cart