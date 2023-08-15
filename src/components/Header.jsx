import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import About from "./About";
const Header=()=>
{
    const [btnState,setbtnState]=useState("Log-In");
    const status=useOnlineStatus()
   return <div className='Header container mx-auto pt-5 mb-10 flex items-center flex-row justify-between'>
        <div className='img-container'>
            <img className='img w-1/4  mr-0' src= {LOGO_URL}/>
        </div>        
        <div className=" items-center space-x-4  flex flex-row">
            <div className="">
                Online Status :{status? "✅" : "🔴"}
            </div>
            <div className=" hover:bg-gray-300 hidden md:block bg-gray-100 p-2 hover:drop-shadow-md">
            <Link to="/">Home</Link>
            </div>
            <div className=" hover:bg-gray-300 hidden md:block bg-gray-100 p-2 hover:drop-shadow-md">
                <Link to="/about">About us</Link>
            </div>
            <div className=" hover:bg-gray-300 hidden md:block cursor-pointer bg-gray-100 p-2 hover:drop-shadow-md">Contact us</div>
            <div className=" hover:bg-gray-300 hidden md:block cursor-pointer bg-gray-100 p-2 hover:drop-shadow-md">Cart</div>
            <button className=" hover:bg-gray-300 hidden md:block btn1 bg-gray-100 p-2 hover:drop-shadow-md" onClick={
            ()=>
            {
               btnState==="Log-In"?setbtnState("Log-out"): setbtnState("Log-In");
            }
        }>
            {btnState}
        </button>
        </div>
    </div>
}
export default Header;