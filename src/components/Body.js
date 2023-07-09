import Restaurantcard from "./Restaurantcard";
import { useState } from "react";
import resList from "../utils/mockdata";

// not using keys(not acceptable) <<<< index as key <<<<<<<<<<< unique id (best practice)
const Body = () => {

    const [ListOfRestaurants , SetListOfRestraunt] = useState(resList);
    return(
     <div className="body">
         <div className="filter">
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
            {ListOfRestaurants.map((restaurant)=> (
             <Restaurantcard key={restaurant.data.id} resData = {restaurant}/>
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