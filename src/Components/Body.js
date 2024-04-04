import { useContext, useEffect, useState } from "react";
import { GET_ALL_RESTAURENTS } from "../Utils/Configs";
import { Rescard } from "./Rescard";
import Shimmer from "./Shimmer";
import userData from "../Utils/userData";

function getFilteredRestaurents(resList,searchText) {
  const data =  resList.filter((eachres) => {
    return eachres?.data?.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resList, setResList] = useState([]);
  const [resListCopy, setResListCopy] = useState([]);
  const {setDetails} = useContext(userData)


  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(json?.data?.cards[2]?.data?.data?.cards);
    setResListCopy(json?.data?.cards[2]?.data?.data?.cards);

  }
  useEffect(() => {
    getRestaurents();
    console.log("use effect")
  },[]);
  console.log('render')
//   if(!resListCopy.length) return null

  if (resListCopy.length > 0) {
    return (
      <div className="Body-container">
        <input
          className="search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = getFilteredRestaurents(resListCopy,searchText);
            setResList(data);
          }}
        >
          Search
        </button>
        <button
          className="search-btn"
          onClick={() => {
            setResList(resListCopy);
          }}
        >
          Clear
        </button>
        <input
          className="search"
          onChange={(e) => {
            setDetails({
              userName : e.target.value,
              userEmail : ''
          })
          }}
        />
        <div className="rescard-container">

          {resList.length === 0 ? (<h1>No Rrestaurent Found</h1>) : resList.map((eachitem) => {
            return <Rescard key = {eachitem?.data?.id} eachrestaurent={eachitem?.data} />;
          })}
          
          {/* <Rescard eachrestaurent={resList[0].data} />
            <Rescard eachrestaurent={resList[1].data} />
            <Rescard eachrestaurent={resList[2].data} />
            <Rescard eachrestaurent={resList[3].data} />
            <Rescard eachrestaurent={resList[4].data} />
            <Rescard eachrestaurent={resList[5].data} /> */}
        </div>
      </div>
    );
  } else {
    return <Shimmer />;
  }
};

export default Body;
