import { useRouteError } from "react-router-dom";
const Error=(e)=>
{
    const err=useRouteError();
    {console.log(err);}
    return <>
        <h1>OOPS</h1>
        <h2>Something wrong happened</h2>
        {err.status}
    </>
}
export default Error;