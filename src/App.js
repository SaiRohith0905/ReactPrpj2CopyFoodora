import "./App.css";
import React,{useState,useEffect} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import userData from "./Utils/userData";
import cartDetails from "./Utils/cartDetails";
{/* <RouterProvider router={routerconfig}/> */}
function App() {
  const [signinDetails,setSigninDetails] = useState({
    userName : '',
    userEmail : ''
  });
  const [cartItems,setCartItems]= useState([]);
  useEffect(()=>{
    // apicall
    setSigninDetails( {
      userName : 'saiRohith',
      userEmail : 'sairohith@gmail.com'
    })
  },[])
  return (
    <cartDetails.Provider value ={{
      cartitems : cartItems,
      setcartitems : setCartItems}}>
    <userData.Provider value={{
      loginDetails : signinDetails,
      setDetails : setSigninDetails
  }}>
      <Header />
      <Outlet/>
      <Footer />
      </userData.Provider>
      </cartDetails.Provider>
  );
}

export default App;
