import React from "react";
import ReactDOM from "react-dom/client";

//React Element
//React.createElement creates an object and when we render it onto the DOM, it becomes an HTML element
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);

//JSX - is not HTML in JS, it is HTML-like or XML-like syntax
//JSX (transpiled before it reaches the JS) - PARCEL - Babel
//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

//React Element
const heading = (
  <h1 id="heading" className="head" tabIndex="1">
    Namaste React using JSX 1
  </h1>
);
console.log(heading);

const elem = <span>Span Tag </span>;

const Title = () => (
  <h3 id="heading" tabIndex="1">
    Namaste React using JSX Title 3
  </h3>
);

const title = (
  <h1 id="heading" tabIndex="1">
    {elem}
    <Title />
    Namaste React using JSX 2
  </h1>
);

const number = 10000;

//React Functional Component
//Component Composition
const HeadingComponent = () => (
  <div id="container">
    {title}
    <Title />
    <Title></Title>
    {Title()}
    <h2>{number}</h2>
    <h2>{100 + 200}</h2>
    {console.log("Hello React")}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(<HeadingComponent />);
