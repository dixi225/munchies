import { CDN_URL } from '../utils/constants';
const Restrauntcard=(props)=>
{
    const { resData } = props
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info
    const{deliveryTime}=resData?.info?.sla
    return <div className='restraunt-card flex flex-col text-center p-5 '>
        <div className='restraunt-card-img-cont flex justify-center'>
        <img className='restraunt-card-img w-1/2 mb-4' src={CDN_URL+cloudinaryImageId}/>           
        </div>
        <div>
        <h3 className='mb-4 font-bold text-1xl'>{name}</h3>
        <h5 className='mb-4'>{cuisines.join(' , ')}</h5>
        <h5 className='mb-4'>{avgRating} stars</h5>
        <h5 className='mb-4'>{costForTwo}</h5>
        <h5 className='mb-4'>{deliveryTime} mins</h5>
        </div>
    </div>
}
export default Restrauntcard;