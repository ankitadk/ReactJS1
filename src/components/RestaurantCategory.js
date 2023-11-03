import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  //   console.log(data);
  const { title, itemCards } = data;

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-gray-50 p-4 mx-auto my-4 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-sm">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>{showItems && <ItemList items={itemCards} dummy={dummy} />}</div>
      </div>

      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
