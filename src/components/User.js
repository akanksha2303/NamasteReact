import { useState } from "react";
import { useEffect } from "react";

const User = ({name}) => {

    const[count]= useState(0);
    const[count2]= useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("It's me");
        },1000);
        console.log("use Effect");

        return() => {
          clearInterval(timer);
          console.log("Use effect return");
        };
       },[]);
       console.log("render");
    
    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name:{name}</h2>
            <h3>Location: Bihar</h3>
            <h4>Contact: akankshapathak9695@gmail.com</h4>
        </div>
    );
};

export default User;