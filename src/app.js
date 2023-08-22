import React,{lazy,Suspense, useState} from 'react'
import reactDom from 'react-dom'
import Header from './components/Header'
import Body from './components/Body'
import Error from './components/Error'
import RestrauntMenu from './components/ReastrauntMenu'
import { createRoutesFromElements,RouterProvider,createBrowserRouter,Routes,Outlet,Route, Router } from 'react-router-dom';
import Shimmer from './components/Shimmer'
import UserContext from './utils/userContext'
import appStore from './utils/appStore'
import { Provider } from 'react-redux'
const About=lazy(()=>import("./components/About"))
const Applayout=()=>
{
  const[userName,setUserName]=useState("Harsh Dixit")
return  <Provider store={appStore}>
 <div className='app-layout'>
  <UserContext.Provider value={{loggedInUser:userName}}>
    <Header/>
    <Outlet/>
  </UserContext.Provider>
</div>
</Provider>
}
// const appRouter=createBrowserRouter([
//   {
//     path:"/",
//     element:<Applayout/>,
//     children:[
//       {
//         path:"",
//         element:<Body/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       }, 
//       {
//         path:"restraunt/:resId",
//         element:<RestrauntMenu/>
//       } 
//     ],
//     errorElement:<Error/>
//   },
// ])
const appRouter=createBrowserRouter(
  
  createRoutesFromElements(
    <Route path ="/" element={<Applayout/>}>
      <Route index element={<Body/>}/>
      <Route path='about' element={<Suspense fallback={<Shimmer/>}><About/></Suspense>}/>
      <Route  path='restraunt/:resId' element={<RestrauntMenu/>} />
      <Route path="*" errorElement={<Error/>}/>
    </Route>
  )
  )
// const root = reactDom.createRoot(document.getElementById("root"));
const root = reactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
// root.render(<BrowserRouter>
//   <Header/>
//   <Routes>
//     <Route path='/' element={<Body/>}/>
//     <Route path='/about' element={<About/>}/>
//     <Route path='/restraunt/resId:' element={<RestrauntMenu/>}/>
//     <Route path='*' element={<Error/>}/>
//   </Routes>
// </BrowserRouter>)
