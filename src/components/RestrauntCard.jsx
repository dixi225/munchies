import { CDN_URL } from '../utils/constants';
const Restrauntcard=(props)=>
{
    const { resData } = props
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info
    const{deliveryTime}=resData?.info?.sla
    return <div className='restraunt-card'>
        <div className='restraunt-card-img-cont'>
        <img className='restraunt-card-img' src={CDN_URL+cloudinaryImageId}/>           
        </div>
        <div>
        <h3>{name}</h3>
        <h5>{cuisines.join(' , ')}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{costForTwo}</h5>
        <h5>{deliveryTime} mins</h5>
        </div>
    </div>
}
export default Restrauntcard;