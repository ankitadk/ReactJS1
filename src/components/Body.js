import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local State Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  //   const listOfRestaurants = arr[0];
  //   const setListOfRestaurants = arr[1];
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  //Whenever state variable updates, react triggers a reconciliation cycle (re-renders the component)
  //   console.log("body rendered");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    //Optional Chaining
    setListOfRestaurants(
      json.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //   console.log(listOfRestaurants);
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

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter m-4 p-4">
        <input
          type="text"
          data-testid="searchInput"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-green-100 m-4 px-4 py-2 rounded-lg"
          onClick={() => {
            //Filter the Restaurant Cards and update the UI
            //SearchText
            // console.log(searchText);
            const filteredRestaurants = listOfRestaurants.filter((ele) =>
              ele.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="bg-gray-100 m-4 px-4 py-2 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (ele) => ele.info.avgRating >= 4.3
            );
            setfilteredRestaurants(filteredList);
          }}
        >
          Top Rated Rastaurants
        </button>
        <label>Username : </label>
        <input
          placeholder=""
          className="border border-black"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/*If the restaurant is promoted then add a promoted label to it*/}
            {restaurant.info.isOpen == true ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
