import Restrauntcard from './RestrauntCard'
// import resObj from '../utils/mockData';
import {useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus';
const Body=()=>
{
    const [ListOfRestraunts,setListOfRestraunts]=useState([]);
    const [SearchText,setSearchText]=useState("");

    const [SearchList,setSearchList]=useState([]);   //DOUBT    
    useEffect(()=>
    {
         fetchData();
    },[])
    // fetchData();
    async function fetchData()
    {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8941773&lng=80.96365019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        setListOfRestraunts(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setSearchList(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }   
    //Conditional Rendering
    const status=useOnlineStatus()
    if(!status) return <h1>No Internet Connection, Plz try connecting to Internet.</h1>
    return ListOfRestraunts.length===0 ? <Shimmer/>: (
    <div className='body container mx-auto'>
        <div>
            <button className='btn ml-10 p-3 bg-gray-100 hover:drop-shadow-md rounded-xl' onClick={()=>
            {
                const filterList=ListOfRestraunts.filter(
                    (res)=> res.info.avgRating > 4
                )
                setListOfRestraunts(filterList);
            }
            }>
                Top rated resturants    
            </button>
        </div>
        <div className='ml-10 m-3 flex items-center search-cont'>
        <input 
            type='text'
            className='search-box btn rounded-md border border-solid border-black'
            value={SearchText}
            onChange={
                (e)=>{
                    setSearchText(e.target.value);
                }
            }
            >
            </input>
        <button 
        className='hover:drop-shadow-md btn2 ml-2 p-2 rounded-md bg-gray-100'
        onClick={
            ()=>
            {
                // {console.log(SearchText,typeof SearchText);}
                const filterList=ListOfRestraunts.filter(
                   (res)=>  res?.info?.name.toLowerCase().includes(SearchText.toLowerCase())
                )
                setSearchList(filterList);
                {console.log(filterList.length);}
            }
        }
        >Search</button>
        </div>
        <div className='restraunt-card mt-20 justify-around flex flex-col md:flex-row flex-wrap '> 
        {
        SearchList.map((restraunt)=><Link className=' hover:drop-shadow-xl bg-gray-100 m-2 w-1/4 mb-20 rounded-xl' key={restraunt.info.id} to={"restraunt/"+restraunt.info.id}><Restrauntcard  resData={restraunt}/></Link>)
        }
        </div>
    </div>)
}
export default Body;    