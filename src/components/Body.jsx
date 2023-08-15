import Restrauntcard from './RestrauntCard'
// import resObj from '../utils/mockData';
import {useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import DisplayBody from './DisplayBody';
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
        setListOfRestraunts(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setSearchList(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        console.log(ListOfRestraunts);
    }   
    //Conditional Rendering
    const status=useOnlineStatus()
    if(!status) return <h1>No Internet Connection, Plz try connecting to Internet.</h1>
    return ListOfRestraunts.length===0 ? <Shimmer/>: (
    <div className='body container mx-auto'>
        <div className='flex justify-center'>
            <button className='btn ml-10 p-3 hover:bg-gray-300 bg-gray-100 hover:drop-shadow-md rounded-xl' onClick={()=>
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
        <div className='ml-10 m-3 flex justify-center items-center search-cont'>
        <input 
            type='text'
            className='search-box btn rounded-md border border-solid border-slate w-1/2 hover:bg-slate-300 bg-slate-100'
            value={SearchText}
            onChange={
                (e)=>{
                    setSearchText(e.target.value);
                }
            }
            >
            </input>
        <button 
        className='hover:drop-shadow-md hover:bg-gray-300 btn2 ml-2 p-2 rounded-md bg-gray-100'
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
        <DisplayBody SearchList={SearchList}/>
    </div>)
}
export default Body;    