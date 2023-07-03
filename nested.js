// <div id = "parent">
//     <div id = "child">
//          <h1>I am an h1 tag</h1>
// </div>
//        </div>
                      
// 1st argument is what type of tag it is, like div,h1.
// 2nd argument is to write down the object.
// 3rd argument is what we have to write inside the div(the child of div).

//whenever we do createElement it creates object .while it is rendering on to the dom,it converts itself into the 
//  html and puts up into the dom.
//react element becomes object that html browser understands

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},React.createElement("h1",{},"I am an h1 tag!")));  

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);