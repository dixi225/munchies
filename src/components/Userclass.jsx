import React from "react"

class Userclass extends React.Component{
    constructor(props)
    {
        super(props)
    }
    componentDidMount()
    {
        //to make an api call
        // console.log("component did mount");
    }
    render()
    {
        // console.log("rendering");
        const {name, location,imgUrl }=this.props;  
        // console.log(imgUrl);
        return <>
            <img src={imgUrl} alt="text" />
            <h1>Name : {name}</h1>
            <h1>Location : {location}</h1>
            <h3>This is class component</h3>
        </>
    }
}
export default Userclass