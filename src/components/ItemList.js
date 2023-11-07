import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";

const ItemList = ({ items, dummy }) => {
  //   console.log(items);
  //   console.log(dummy);

  const dispatch = useDispatch(); //Hook

  const handleAddItem = (item) => {
    // console.log(item);
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        // console.log(item);
        <div
          key={item.card.info.id}
          data-testid="foodItems"
          className="m-2 p-2 border-b-2 text-left flex justify-between"
        >
          <div className="pr-3 w-9/12">
            <div>
              <span>{item.card.info.name}</span>
              <span>&#8377;{item.card.info.price / 100}</span>
            </div>
            <span className="text-xs">{item.card.info.description}</span>
          </div>
          <div className="pl-2 w-3/12">
            <div className="absolute">
              <button
                className="bg-white rounded-lg shadow-lg px-2 mx-6"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
            <img src={IMG_URL + item.card.info.imageId} className="w-32" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
