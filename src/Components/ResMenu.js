import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import MenuCategory from "./MenuCategory";


const ResMenu = ()=>{
const [resMenu,setResMenu]=useState([])
const {id} = useParams();
console.log(id)
async function getResMenu(){
 const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + id + "&submitAction=ENTER")
 const json = await data.json();
 console.log(json);
 setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
}

useEffect(()=>{
    getResMenu();
},[])
    if(resMenu.length != 0){
        return (
            <div className="menu-container">
                <MenuCategory menuitem={resMenu[2]?.card}/>
            </div>
        )
    }
   
}
export default ResMenu;
