const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from react!");

    const root = ReactDOM.createRoot(document.getElementById("root"));

    console.log(heading);
    
    root.render(heading);// this will take the whole heading and put inside the root and suppose if 
                          // there is anything inside the root before this it will replace it but if we write
                          //anything outside the root it will be printed on our page bcz react is rendering  
                          // inside the root only.
    // React can be applied on small portion of page,can be applied on header only,navbar only,footer only.
    // React only works in the place whatever u make the root as
    // Render method helps us to put the object on our web page , and it will go as a react element and converted 
    // into html which our browser understands and print it on page.