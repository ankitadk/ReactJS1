import React from "react";
import ReactDOM from "react-dom/client";

/**
 * -Header
 *  -Logo
 *  -Nav Items
 * -Body
 *  -Search
 *  -Restaurant Container
 *   -Restaurant Cards
 *    -Img
 *    -Restaurant name, Cuisine, Star rating
 * -Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const resList = [
  {
    type: "restaurant",
    data: {
      id: "r1",
      name: "KFC",
      cuisines: ["Burgers", "Biryani", "Veg Snacks"],
      avgRating: "4.6",
      costForTwo: 40000,
      deliveryTime: 36,
      img: "https://imgmediagumlet.lbb.in/media/2018/04/5acf822418a23c0efc21496b_1523548708582.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "r2",
      name: "Meghana Foods",
      cuisines: ["Biryani", "Andhra", "South Foods"],
      avgRating: "4.4",
      costForTwo: 50000,
      deliveryTime: 29,
      img: "https://www.ruchiskitchen.com/wp-content/uploads/2016/03/Motichoor-Ladoo-Recipe-5.jpg.webp",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "r3",
      name: "Meghana Foods",
      cuisines: ["Biryani", "Andhra", "South Foods"],
      avgRating: "4.4",
      costForTwo: 50000,
      deliveryTime: 29,
      img: "https://www.ruchiskitchen.com/wp-content/uploads/2016/03/Motichoor-Ladoo-Recipe-5.jpg.webp",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "r4",
      name: "Meghana Foods",
      cuisines: ["Biryani", "Andhra", "South Foods"],
      avgRating: "4.4",
      costForTwo: 50000,
      deliveryTime: 29,
      img: "https://www.ruchiskitchen.com/wp-content/uploads/2016/03/Motichoor-Ladoo-Recipe-5.jpg.webp",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "r5",
      name: "Meghana Foods",
      cuisines: ["Biryani", "Andhra", "South Foods"],
      avgRating: "4.4",
      costForTwo: 50000,
      deliveryTime: 29,
      img: "https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2021/10/Mohanthal-recipe-1.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "r6",
      name: "Meghana Foods",
      cuisines: ["Biryani", "Andhra", "South Foods"],
      avgRating: "4.4",
      costForTwo: 50000,
      deliveryTime: 29,
      img: "https://www.ruchiskitchen.com/wp-content/uploads/2016/03/Motichoor-Ladoo-Recipe-5.jpg.webp",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "r7",
      name: "Meghana Foods",
      cuisines: ["Biryani", "Andhra", "South Foods"],
      avgRating: "4.4",
      costForTwo: 50000,
      deliveryTime: 29,
      img: "https://www.ruchiskitchen.com/wp-content/uploads/2016/03/Motichoor-Ladoo-Recipe-5.jpg.webp",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "r8",
      name: "Meghana Foods",
      cuisines: ["Biryani", "Andhra", "South Foods"],
      avgRating: "4.4",
      costForTwo: 50000,
      deliveryTime: 29,
      img: "https://www.ruchiskitchen.com/wp-content/uploads/2016/03/Motichoor-Ladoo-Recipe-5.jpg.webp",
    },
  },
];

const RestaurantComponent = (props) => {
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

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {resList.map((restaurant) => (
          <RestaurantComponent key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
