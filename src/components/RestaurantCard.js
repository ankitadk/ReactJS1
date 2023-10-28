import { IMG_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  //   console.log(props);
  //   const { resName, cuisine } = props;
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  //   console.log(deliveryTime);
  //   console.log(IMG_URL + cloudinaryImageId);
  return (
    <div className="res-card" style={styleCard}>
      <img
        alt="res-img"
        className="res-logo"
        src={IMG_URL + cloudinaryImageId}
      />
      <h4 className="res-head">{name}</h4>
      <p className="res-font">{cuisines.join(", ")}</p>
      {/* <div className="res-info"> */}
      <p className="res-font ">{avgRating} stars</p>
      <p className="res-font ">{costForTwo}</p>
      <p className="res-font ">{sla.deliveryTime} minutes</p>
      {/* </div> */}
    </div>
  );
};

export default RestaurantCard;
