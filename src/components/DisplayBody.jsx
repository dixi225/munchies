import Restrauntcard from "./RestrauntCard"
import { Link } from "react-router-dom"
const DisplayBody=({SearchList})=>
{
    return <div className='restraunt-card mt-20 justify-around mx-14 flex flex-col mb-10 md:mx-0 md:flex-row flex-wrap '> 
    {
    SearchList.map((restraunt)=><Link className=' hover:drop-shadow-2xl hover:bg-gray-300 bg-gray-200 m-2 md:w-1/4 mb-20 rounded-xl' key={restraunt.info.id} to={"restraunt/"+restraunt.info.id}><Restrauntcard  resData={restraunt}/></Link>)
    }
    </div>
}
export default DisplayBody