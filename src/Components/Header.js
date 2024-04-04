import { useContext } from "react";
import { APP_LOGO_URL } from "../Utils/Configs";
import { Link } from "react-router-dom";
import userData from "../Utils/userData";
import cartDetails from "../Utils/cartDetails";



const Header = () =>{
    const {cartitems}= useContext(cartDetails)
    console.log(cartitems)
    const {loginDetails} = useContext(userData);
    console.log(loginDetails)
    return (<div className="header-container">
                <div className="app-logo-container">
                <img className=" app-logo"src={APP_LOGO_URL}alt="app-logo"></img>
                </div>
                <div className="navbar-container">
                    <ul>
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="/aboutus">AboutUs</Link></li>
                        <li><Link to ="/cart">Cart-{cartitems.length}</Link></li>
                        <div>{loginDetails?.userName}</div>
                    </ul>
                </div>
    </div>)
}

export default Header;