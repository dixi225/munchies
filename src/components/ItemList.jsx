import { ITEM_URL } from "../utils/constants"
const ItemList=({itemsarr})=>
{
    return <>
        {
        itemsarr.map(
            (items)=>(
                <div className="flex justify-around cursor-pointer w-1/2 p-3  bg-gray-200 rounded-xl  hover:bg-gray-300 hover:drop-shadow-xl">
                    <div key={items?.card?.info?.id} className="  flex flex-col  font-semibold mr-1">
                        <div className="pb-6 pt-2 flex space-x-1">
                        <div>{items?.card?.info?.name} -</div>
                        <div>{items?.card?.info?.price ? items?.card?.info?.price/100 +"rs":items?.card?.info?.defaultPrice/100 +"rs"}</div>
                        </div>
                        <div className="pb-2 px-1 font-medium text-xs">{items?.card?.info?.description}</div>
                    </div>
                 <div>
                    <img className=" w-48 h-auto p-3" src={ITEM_URL+items?.card?.info?.imageId} alt="" srcset="" />    
                </div>   
                </div>)
                
        )
        }
    </>
}
export default ItemList