import { useContext } from "react"
import cartDetails from "../Utils/cartDetails"
const MenuCategory = (props) =>{
    const {title,categories,itemCards} = props?.menuitem?.card
    return (
        <div className="cat-container">
            <h4>{title}</h4>
            {categories?.map((eachitem)=>{
                return (
                    <div className="items-container">
                       <div className="menu-item">{eachitem.title} {eachitem?.itemCards?.length}</div>
                        <div className="durga">
                            {
                                eachitem?.itemCards?.map((eachitem1)=>{
                                    return (<ShowItem itemtype={eachitem1}/>) 
                                })
                            }
                        </div>
                       {/* <ShowItem/> */}
                     </div>
                )
            }
            )
            }
            {
                <div>
                { 
                itemCards?.map((eachitem1)=>{
                    return (<ShowItem itemtype={eachitem1}/>) 
                })
            }
                </div>
            }
            
        </div>
    )
}

const ShowItem = (props) =>{
      const {cartitems,setcartitems}= useContext(cartDetails)
    const {name,price,imageId,defaultPrice,description} = props?.itemtype?.card?.info   
    return (
        <div className="showitem">
            <div className="itemdetails">
            <h3>{name}</h3>
            <h5>{description}</h5>
            <h3>price: {(price? price : defaultPrice) /100} rupees</h3>
            </div>
            <div className="item-image">
                {
                    imageId ? <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + imageId} /> 
                    : ''

                }
                <div>
                    <button  className = {'add-btn ' + (imageId ? 'hasimagid' : 'noimageid')  } onClick={()=>{
                            let data = props?.itemtype?.card?.info;
                            cartitems.push(data);
                            
                            setcartitems(cartitems)
                    }}> add {'+'} </button>
                </div>
            </div>

        </div>
    )
}
export default MenuCategory
