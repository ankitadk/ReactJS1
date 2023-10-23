/***
 * <div>
 *      <div>
 *          <h1> I'm h1 tag </h1>
 *          <h2> I'm h2 tag </h2>
 *      </div>
 *      <div>
 *          <h1> I'm h1 tag </h1>
 *          <h2> I'm h2 tag </h2>
 *      </div>
 * </div>
 */

// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm h1 tag"), 
        React.createElement("h2", {}, "I'm h2 tag")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm h1 tag"), 
        React.createElement("h2", {}, "I'm h2 tag")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

