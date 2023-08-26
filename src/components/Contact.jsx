const contact=()=>{
 return <>
    <h1 className="p-4 m-4 text-center text-3xl font-extrabold">Contact Me</h1>
    <form className="flex justify-center">
        <input type="text" placeholder="name" className=" border-2 border-black rounded-sm m-2 p-2"/>
        <input type="text" placeholder="E-mail"className=" border-2 border-black rounded-sm m-2 p-2 "/>
        <button className="ml-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-300">Submit</button>
    </form>
 </>
}
export default contact