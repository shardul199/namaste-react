import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// let listOfRestaurants = resObj;

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRes, setFiteredRes] = useState([]);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

useEffect(()=>{
    fetchData();
},[]);

const [searchText, setSearchText] = useState("")

const fetchData =  async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9377521&lng=77.6301197&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");

    const json =  await data.json();
    console.log("json",json.data.cards)

    console.log( "info",json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants

    setListOfRestaurants(restaurants);
    setFiteredRes(restaurants);

    
}
 const onlineStatus = useOnlineStatus();

 if(onlineStatus === false) return (<h1>Looks like you're offline !! Please check your internet connection.</h1>);

console.log(listOfRestaurants)

const{ loggedInUser,setUserName } = useContext(UserContext);

    return listOfRestaurants.length === 0 ? <Shimmer /> :  (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text"  className="border border-solid border-black" value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFiteredRes(filteredRes);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName:</label>
                    <input className="border border-black m-4 p-2" value={loggedInUser} 
                    onChange={(e)=> setUserName(e.target.value)}/>
                <button className="px-4 py-2 bg-gray-300 rounded-lg" onClick={()=>{const filteredList = 
                listOfRestaurants.filter((res) => res.info.avgRating>4.4)
                setListOfRestaurants(filteredList)}}>Top Rated Restaurants </button>
                </div>
            </div>
            <div className="flex flex-wrap items-stretch">
                {
                    filteredRes.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurant/" +restaurant.info.id} className="my-4">
                            {restaurant.info.avgRating>4.4 ? (<RestaurantCardPromoted resData={restaurant}/>):(<RestaurantCard  resData={restaurant}/>)}
                            
                            </Link>
                    ))
                }
                
                
            </div>
        </div>
    )
}

export default Body;