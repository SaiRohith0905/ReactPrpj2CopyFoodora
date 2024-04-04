import { RESTAURANT_CDN } from "../Utils/Configs"
import { Link } from "react-router-dom"
export const Rescard = (props)=>{
    const {avgRating,cloudinaryImageId,cuisines,deliveryTime,name,costForTwo,id}= props?.eachrestaurent
    return (
        <Link to ={"/resmenu/"+ id}><div className="rescard">
        <img className="res-image" src={RESTAURANT_CDN+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines?.join(', ')}</h4>
        <h4>Rs {costForTwo/100} for two</h4>
        <h5>{deliveryTime} Minutes</h5>
        <h3>AvgRating : {avgRating}/5</h3> 
    </div></Link>
    )
}