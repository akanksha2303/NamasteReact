import React from "react";

class Userclass extends React.Component {
    constructor(props){
    super(props);
    
    this.state = {
        userInfo:{
            name :"Dummy",
            Location : "Default",
        },
        // count:0,
    }; 
     console.log(this.props.name + "child constructor");
    }

    async componentDidMount(){
        //console.log(this.props.name + "child component did mount");

        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo: json,

        });

        console.log(json);
    }

    componentDidUpdate(){
        console.log("component did update");
    }
    
    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render(){
        const{name,location,avatar_url} = this.state.userInfo;
        // const {count}= this.state;

    console.log(this.props.name + "child render");

        return(
            <div className="user-card">
            {/* <h1>Count= {count}</h1>
            <button onClick={()=>{
                this.setState ({
                   count: this.state.count +1,
                });
            }}
            >
                Count Increase</button> */}
            <img src={avatar_url} />
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact: akankshapathak9695@gmail.com</h4>
        </div>

        );
    };
};

export default Userclass;