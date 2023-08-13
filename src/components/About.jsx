// import User from  "./User"
// import { LOGO_URL } from "../utils/constants";
import Userclass from "./Userclass"
import { useEffect,useState } from "react";
const About=()=>
{
    const [name,setName]=useState("Default Name");
    const [location,setLocation]=useState("Default Location");
    const [imgUrl,setImgUrl]=useState("");
    useEffect(()=>
    {
        fetchgitApi();
    },[])
    async function fetchgitApi()
    {
        const data=await fetch('https://api.github.com/users/dixi225')
        const json= await data.json()
        setName(json.name);
        setLocation("Benaras");
        setImgUrl(json.avatar_url);
        // console.log();
    }
    return <>
        <h1>About us </h1>
         <Userclass name={name} location={location} imgUrl={imgUrl}/> 
    </>
}
export default About;