import { useContext } from "react";
import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  //   console.log(props);
  //   const { resName, cuisine } = props;
  const { resData } = props;
  //   console.log(resData);

  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  //   console.log(deliveryTime);
  //   console.log(IMG_URL + cloudinaryImageId);
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-48 bg-gray-100 rounded-lg hover:bg-gray-200"
    >
      <img
        alt="res-img"
        className="rounded-lg h-30"
        src={IMG_URL + cloudinaryImageId}
      />
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <p className="res-font">{cuisines.join(", ")}</p>
      {/* <div className="res-info"> */}
      <p className="res-font ">{avgRating} stars</p>
      <p className="res-font ">{costForTwo}</p>
      <p className="res-font ">{sla.deliveryTime} minutes</p>
      <p className="res-font ">User: {loggedInUser}</p>
      {/* </div> */}
    </div>
  );
};

//Higher Order Component

//Input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg px-2 m-2">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
