import { useEffect, useState } from "react"
import { MENU_URL } from "./constants"
function useRestaurantMenu(resId)
{
    const[resInfo,setResInfo]=useState([]);
    useEffect(()=>
    {
        fetchData();
    },[]);
    const fetchData= async()=>
    {
        const data= await fetch(MENU_URL+resId);
        const json=await data.json();
        setResInfo(json?.data?.cards);
    }
    return resInfo; 
};
export default useRestaurantMenu