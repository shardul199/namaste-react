import { useContext } from "react";
import { CDN_URLS } from "../utils/constants";
import UserContext from "../utils/UserContext";


const styleCard =  {
    backgroundColor: "#f0f0f0"

}
const RestaurantCard = (props) => {
    
    const { resData } = props;
    const { loggedInUser} = useContext(UserContext);
    const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo, sla  } = resData?.info;
    // console.log(resData)
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 h-full" >
            <img 
            className="rounded-lg h-[140px] w-full" 
            alt="res-logo" 
            src={CDN_URLS+cloudinaryImageId}
             />
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} </h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{loggedInUser}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }

}

export default RestaurantCard;