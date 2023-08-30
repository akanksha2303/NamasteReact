import Restaurantcard from "./Restaurantcard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


// not using keys(not acceptable) <<<< index as key <<<<<<<<<<< unique id (best practice)
const Body = () => {

    const [ListOfRestaurants , SetListOfRestraunt] = useState([]);
    const [filteredRestaurant , SetFilteredRestaurant] = useState([]);

    const [searchText,setSearchText] = useState("");

     useEffect(() => {
        fetchData();
    } ,[]);

    const fetchData = async() => {
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1177226&lng=85.3506777&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json);
        //optional chaining
        SetListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
        SetFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return (
    <h1>Looks like you are offline!! Please check your internet connection</h1>
    );

    // conditional rendering
    // if(ListOfRestaurants.length=== 0){
    //     return <Shimmer />;
    // }

     // conditional chaining using ternary operator

    return ListOfRestaurants.length=== 0 ? <Shimmer/>:(
     <div className="body">
         <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} 
                onChange={(e) => {setSearchText(e.target.value)
                }}
                />
                <button onClick={() =>{
                    const filteredRestaurant = ListOfRestaurants.filter((res) =>
                    res.data.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                    SetFilteredRestaurant(filteredRestaurant);
                }}
                >
                    search</button>
            </div>
            <button className="filter-btn" 
            onClick={()=>{
                const filteredList = ListOfRestaurants.filter(
                    (res) => res.data.avgRating > 4
                );
                SetListOfRestraunt(filteredList);
                }}
                >
                Top Rated Restaurants</button>
         </div>
         <div className="res-container">
            {filteredRestaurant.map((restaurant)=> (
                <Link
                key = {restaurant.data.id} 
                to = {"/restaurants/"+restaurant.data.id}
                >
             <Restaurantcard resData = {restaurant}/>
             </Link>
            ))} 
 </div>
     </div>
    );
 };

 export default Body;

 /*

By Long Method

const Body = () => {
   return(
    <div className="body">
        <div className="search">search</div>
        <div className="res-container">
            <Restaurantcard resData = {resList[0]} />
            <Restaurantcard resData = {resList[1]} />
            <Restaurantcard resData = {resList[2]} />
            <Restaurantcard resData = {resList[3]} />
            <Restaurantcard resData = {resList[4]} />
            <Restaurantcard resData = {resList[5]} />
            <Restaurantcard resData = {resList[6]} />
            <Restaurantcard resData = {resList[7]} />
            <Restaurantcard resData = {resList[8]} />
            <Restaurantcard resData = {resList[9]} />
            <Restaurantcard resData = {resList[10]} />
            <Restaurantcard resData = {resList[11]} />
            <Restaurantcard resData = {resList[12]} />
            <Restaurantcard resData = {resList[13]} />
            <Restaurantcard resData = {resList[14]} />
            

            
           
        </div>
    </div>
   );
};

*/