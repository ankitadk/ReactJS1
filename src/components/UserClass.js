import React from "react";

class userClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + " Child Constructor");
    this.state = {
      userInfo: {
        name: "Tommy",
        location: "Mumbai",
        avatar_url: "http://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + " Child component did mount");
    //API Call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    // console.log(json);

    this.setState({ userInfo: json });
  }

  render() {
    console.log(this.props.name + " Child Render");
    // console.log(this.state.userInfo);
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="avatar-img" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }
}

export default userClass;

/**
 *
 * --- MOUNTING ---
 * Constructor (dummy)
 * Render (dummy)
 *  <HTML Dummy>
 *Component Did Mount
 * <API Call>
 * <this.setState> -> State variable is updated
 *
 * --- UPDATE ---
 *  render(API data)
 *  <HTML (new API data)>
 *  Component Did Update
 *
 *---UNMOUNTING---
 Component Did Unmounting
 *
 */
