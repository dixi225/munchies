import Shimmer from "./Shimmer";
import RestrauntProfile from "./RestrauntProfile";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu1";
import RestrauntCategory from "./RestrauntCategory";
const RestrauntMenu=()=>
{
    const {resId}=useParams();
    // const[temp,settemp]=useState([]);
    const ResMenu=useRestaurantMenu(resId)
    if(ResMenu.length==0) return <Shimmer/>
    // console.log(ResMenu);
    const{name,costForTwoMessage,cuisines}=ResMenu[0]?.card?.card.info;
    const temp=ResMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const categories=ResMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c=> c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    )
    return <>
    <h1 className="text-center font-bold text-2XL mb-5">{name}</h1>
    <h2 className="text-center font-medium text-2XL mb-5">{cuisines.join(" , ")}</h2>
    <h2  className="text-center font-medium text-2XL mb-5">{costForTwoMessage}</h2>
    <h3 className="text-center   font-bold mb-5 md:text-left md:ml-20 text-2xl">Menu</h3>
    {
    categories.map(
    (categories)=> (<RestrauntCategory data={categories?.card?.card}/>)
    )
    }
    {/* <ul className="col flex flex-col items-center md:items-start">
      {temp.map(obj=> {
        return <RestrauntProfile obj={obj}/>
      }
      )}
    </ul> */}
    </>
}
export default RestrauntMenu;
// obj?.card?.info?.name
// 59654-- subway resID
//60243-- pizzahut resID