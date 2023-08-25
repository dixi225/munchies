import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
// import About from "./About";
const Header=()=>
{
    const cartItems=useSelector((store)=>store.cart.items)//subscribing to the redux stote slice
    const [btnState,setbtnState]=useState("Log-In");
    const status=useOnlineStatus()
    const data=useContext(UserContext)
   return <div className='Header pt-5 mb-10 flex items-center flex-row justify-around'>
        <div className='img-container'>
            <img className='img w-1/4  mr-0' src= {LOGO_URL}/>
        </div>        
        <div className=" items-center flex space-x-6 ">
            <div>
                Online Status :{status? "✅" : "🔴"}
            </div>
            <div className=" hover:bg-gray-300 hidden md:block bg-gray-100 p-4 hover:drop-shadow-md">
            <Link to="/">Home</Link>
            </div>
            <div className=" hover:bg-gray-300 hidden md:block bg-gray-100 p-4 hover:drop-shadow-md">
                <Link to="/about">About us</Link>
            </div>
            <div className=" hover:bg-gray-300 hidden md:block cursor-pointer bg-gray-100 p-4 hover:drop-shadow-md">Contact us</div>
            <div className=" hover:bg-gray-300 hidden md:block cursor-pointer bg-gray-100 p-4 hover:drop-shadow-md"><Link to='/cart'>Cart-{cartItems.length}</Link></div>
            <button className=" hover:bg-gray-300 hidden md:block btn1 bg-gray-100 p-4 hover:drop-shadow-md" onClick={
            ()=>
            {
               btnState==="Log-In"?setbtnState("Log-out"): setbtnState("Log-In");
            }
        }>
            {btnState}
        </button>
        <div className="hidden md:block font-semibold p-4">{data?.loggedInUser}</div>
        </div>
    </div>
}
export default Header;