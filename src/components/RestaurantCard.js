const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  //   console.log(props);
  //   const { resName, cuisine } = props;
  const { resData } = props;
  const { img, name, cuisines, avgRating, costForTwo, deliveryTime } =
    resData?.data;
  //   console.log(resData);
  return (
    <div className="res-card" style={styleCard}>
      <img alt="res-img" className="res-logo" src={resData.data.img} />
      <h4 className="res-head">{name}</h4>
      <p className="res-font">{cuisines.join(", ")}</p>
      {/* <div className="res-info"> */}
      <p className="res-font ">{avgRating} stars</p>
      <p className="res-font ">Rs. {costForTwo / 100} FOR TWO</p>
      <p className="res-font ">{deliveryTime} minutes</p>
      {/* </div> */}
    </div>
  );
};

export default RestaurantCard;
