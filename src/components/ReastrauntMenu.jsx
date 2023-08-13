import Shimmer from "./Shimmer";
import RestrauntProfile from "./RestrauntProfile";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu1";
const RestrauntMenu=()=>
{
    const {resId}=useParams();
    // const[temp,settemp]=useState([]);
    const ResMenu=useRestaurantMenu(resId)
    if(ResMenu.length==0) return <Shimmer/>
    // console.log(ResMenu);
    const{name,costForTwoMessage,cuisines}=ResMenu[0]?.card?.card.info;
    const temp=ResMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    return <>
    <h1>{name}</h1>
    <h2>{cuisines.join(" , ")}</h2>
    <h2>{costForTwoMessage}</h2>
    <h3>Menu</h3>
    <ul className="col">
      {temp.map(obj=> {
        return <RestrauntProfile obj={obj}/>
      }
      )}
    </ul>
    </>
}
export default RestrauntMenu;
// obj?.card?.info?.name
// 59654-- subway resID
//60243-- pizzahut resID