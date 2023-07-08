const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from react!");

    const root = ReactDOM.createRoot(document.getElementById("root"));

    console.log(heading);
    
    root.render(heading);