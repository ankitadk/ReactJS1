import User from "./User";
import UserClass from "./UserClass";
import { Component, useContext } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component did mount");
  }

  render() {
    // console.log("parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User:{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        {/* <User name={"Akshay Saini (function)"} /> */}
        <UserClass name={"First (class)"} location={"Dehradun (class)"} />
        {/* <UserClass name={"Second (class)"} location={"US (class)"} /> */}
      </div>
    );
  }
}

/**
 -Parent Constructor
 -Parent Render

    -First Constructor
    -First Render

    -Second Constructor
    -Second Render

    <DOM UPDATED - IN SINGLE BATCH>
    -First ComponentDidMount
    -Second ComponentDidMount

-Parent ComponentDidMount
 */

/*const About = () => {
  return (
    <div>
      <h1>About Class Component</h1>
      <h2>This is Namaste React Web Series</h2>
      <UserClass name={"Akshay Saini (class)"} location={"Dehradun (class)"} />
    </div>
  );
};*/

export default About;
