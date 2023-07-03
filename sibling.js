// <div id = "parent">
//     <div id = "child">
//          <h1>I am an h1 tag</h1>
//           <h2>I am an h2 tag</h2>
// </div>
//<div id = "child2">
//          <h1>I am an h1 tag</h1>
//           <h2>I am an h2 tag</h2>
// </div>
//        </div>

// If we have to give two elements as siblings then we need to create an array of children using square bracket.

//For two child we will just pass array of child with using square bracket.

//This is the last time we are using create element which is core react from now on we will use JSX.
const parent = React.createElement("div",{id: "parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am an h1 tag"),
React.createElement("h2",{},"I am an h2 tag"),
]),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am an h1 tag"),
React.createElement("h2",{},"I am an h2 tag"),
]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);