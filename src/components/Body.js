import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  //   const listOfRestaurants = arr[0];
  //   const setListOfRestaurants = arr[1];
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  //Whenever state variable updates, react triggers a reconciliation cycle (re-renders the component)
  console.log("body rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //Optional Chaining
    setListOfRestaurants(
      json.data?.cards[5]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json.data?.cards[5]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  //   if (listOfRestaurants.length === 0) {
  //     return <Shimmer />;
  //   }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            //Filter the Restaurant Cards and update the UI
            //SearchText
            console.log(searchText);
            const filteredRestaurants = listOfRestaurants.filter((ele) =>
              ele.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (ele) => ele.info.avgRating >= 4.5
            );
            setfilteredRestaurants(filteredList);
          }}
        >
          Top Rated Rastaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
