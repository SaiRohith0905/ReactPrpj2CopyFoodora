import { useContext } from "react";
import userData from "../Utils/userData";

const Footer = () =>{
  const {loginDetails} = useContext(userData)
  return (<div className="footer-container">
  This website is developed by {loginDetails.userName}
</div>) 
}

export default Footer;