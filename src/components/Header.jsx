import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import About from "./About";
const Header=()=>
{
    const [btnState,setbtnState]=useState("Log-In");
    const status=useOnlineStatus()
   return <div className='Header'>
        <div className='img-container'>
            <img className='img' src= {LOGO_URL}/>
        </div>
        <div className='nav-items'>
        
        <ul>
            <li>
                Online Status :{status? "✅" : "🔴"}
            </li>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About us</Link>
            </li>
            <li>Contact us</li>
            <li>Cart</li>
            <button className="btn1" onClick={
            ()=>
            {
               btnState==="Log-In"?setbtnState("Log-out"): setbtnState("Log-In");
            }
        }>
            {btnState}
        </button>
        </ul>
        </div>

    </div>
}
export default Header;