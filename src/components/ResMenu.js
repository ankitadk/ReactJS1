import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card.info;

  const { itemCards } =
    resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((ele) => (
          <li key={ele?.card?.info?.id}>
            {ele?.card?.info?.name} - Rs.{" "}
            {ele?.card?.info?.defaultPrice / 100 ||
              ele?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
