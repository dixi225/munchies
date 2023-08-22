import { useState,useRef } from 'react'
import down from '../../down.png'
import ItemList from './ItemList'
const RestrauntCategory=({data,showItem,changeIndex})=>
{
    const [click,changeClick]=useState(true);
    const handleClick=()=>
    {
        changeClick(!click);
        changeIndex()
    }
    return <div className='flex flex-col'>
                <div onClick={handleClick} className="flex justify-between rounded-lg p-3 text-center cursor-pointer md:text-left bg-gray-200 font-semibold m-3 md:font-bold md:text-lg px-10 mx-8 hover:bg-gray-300 hover:drop-shadow-xl">
                    <div >{data.title}</div>
                    <div><img src={down}/></div>
                </div>
                {click && showItem && <div className='flex flex-col justify-center items-center space-y-3'>
                    <ItemList itemsarr={data.itemCards}/>
                </div>}
        </div>


}
export default RestrauntCategory