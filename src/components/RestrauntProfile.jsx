const RestrauntProfile= (obj)=>
{      
    return  <li className="rounded-lg p-3  w-fit cursor-pointer bg-gray-200 font-semibold m-3 hover:bg-gray-300 hover:drop-shadow-xl">{obj?.obj?.card?.info?.name}</li>
}
export default RestrauntProfile;