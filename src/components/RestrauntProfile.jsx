const RestrauntProfile= (obj)=>
{      
    console.log(obj);
    return  <li>{obj?.obj?.card?.info?.name}</li>
}
export default RestrauntProfile;