import User from "./User/";
import Userclass from "./Userclass";
import React from "react";

// const About = () =>{
//     return (
//         <div className="about">
//             <h1>About Us </h1>
//             <h2>HELLO!</h2>
//             {/* <User name={"Akanksha(function)"} /> */}
//             <Userclass  name={"Akanksha(class)"}location={"Bihar(class)"}/>
//         </div>
//     );
// };

class About extends React.Component{
    constructor(props){
        super(props);

        //console.log("Parent constructor");
    }

    componentDidMount(){
        //console.log("parent component did mount");
    }

    render(){
        //console.log("Parent render");
        return (
            <div className="about">
                <h1>About Us </h1>
                <h2>HELLO!</h2>
                 <User name={"Akanksha(function)"} /> 
                <Userclass  name={"First"}location={"Bihar(class)"}/>
                {/* <Userclass  name={"Second"}location={"Dehradun"}/> */}
            </div>
        );
    }
}

export default About ;