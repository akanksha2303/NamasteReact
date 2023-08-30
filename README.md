#Namaste react


# Two types of export and import

1. Default export/import

 export default component;
 import component from "path";

2. Named export/import

 export const component;
 import{component} from "path";

 # React Hooks
 (Normal js utility functions)

 whenever anything starts with 'use' , it's react hook .It is a common convention used in the industry.

 -useState():- superpowerful state variables in react.
 -useEffect():- Used to make the external api call outside from our react app.

 # useState() hook
  => It gives us the access to super powerful state variable inside the react and why is this superpowerful
   bcz react keeps track on it and whenever these variable updates it will trigger its diff algorithm,it will find out the difference between virtual DOM and automatically updates the UI.it keeps the datalayer and UIlayer in sync and that is what core algorithm of react is.

   --> In useState we will have two parameters whenever we need to modify something we will use the second parameter.The second parameter will keep track of the 1st parameter.

   --> Always call useState hook inside the functional component.Always try to call useState at the top (when the function starts) so that we don't have a lot of consistency in our code bcz js is a synchronous single threaded language (the code will run line by line).

   -->Never create usestate inside if-else condition,for loop and function although it is correct but it can create inconsistency in our program .


 **whenever a state variable updates, react re-renders the component.**

 --> React uses Reconciliation algorithm(also known as react fibre) which came in React16.
    whenever something changes on UI , it is known as reconciliation.
    this reactfibre is the new way of finding the diff and updating the DOM.

 --> Diff algorithm:- It finds out the difference between updated virtual DOM and previous virtual DOM.

 --> Virtual DOM is a representation of actual DOM.
      virtual DOM:- It is basically the tag or elements that we see, it's kind of like js representation of it.
      React took that and built its core algorithm over that virtual DOM.
      React can efficiently find out the difference between vitual DOMs and update the UI , this is the 
      core of react algorithm.

 --> React Virtual DOM is nothing but a normal js object.

 - Suppose we clicked on the button, as soon as we clicked on the button a new object is formed and react 
   find out the differences between these two objects(suppose earlier we have 15 restaraunts and now we have 7 
   restaraunts) when it find out the difference  between these objects then it actually updates the DOM.
   React does not touch DOM a lot that's why react is fast.
   Whenever there is a change in state variable, react will find out the difference between virtual DOM
   and it will re-render our component,it will update the DOM.


   # Why react is fast?
   Because - It has virtual DOM.
           - It has diff algorithm which is very efficient.
           - It can do efficient DOM manipulation(It can findout the diff and update the UI).


   # In body.js

   Everytime the state variable changes,react is keeping an eye on state variable,react keeps the track on ListOfRestaurants and it is able to do that bcz of special variable usestate (we used usestate to create this ListOfRestaraunts) . Now react is constantly monitoring the ListOfRestaraunts as soon as it updates , the
   react will find out the difference and update the UI.
   It will basically flushout and render what is required. React can do this update very efficiently and   
   this is the core job of react and thats why react is popular.    

   # why setListOfRestraunt used?

   As soon as we call setListOfRestraunt , react will find out the diff and update the UI.

   # Why can't we just modify the ListOfRestaraunt directly?
   Because there is a need of trigger to start the diff algorithm and update the UI that's why we create this 2nd function named setListOfRestraunt, whenever we call this setListOfRestraunt it will automatically re-render the component and we can also do it in different way as this is array destructring.
  
  // This is another way using array--
        const arr = useState(resList);
        const [ListOfRestaurants , SetListOfRestraunt] = arr;

        // behind the scenes
        const ListOfRestaurants[0];
        const SetListOfRestraunt[1];

# optional chaining
 In code we used optional chaining here--
        SetListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);

    we used ?. bcz if the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

 # To print something when the API has not responded yet 
# shimmer UI
 if(ListOfRestaurants.length === 0){
        return <h1>Loading......</h1>;
    }
Instead of this loading we can use shimmer UI which will help us to improve user experience ,it will 
show a fake page which consists of blank boxes and all.The idea of shimmer is to show user something very quickly. we will make a shimmer component for this

# Why do we need state variables(useState) when we can use just const?

# To change login button to logout
It can't be done by javascript(ther will be no change).
If we want to make our component dynamic , want something should change in our component here is where we use local state variable and usestate comes into picture. Whenever the state variable will change using the SetBtnNameReact ,react will re-render this header component(It will refresh this header component).

Now when we click on the login button , the react will refresh the header,it triggers the reconciliation cycle.

# Search button
 
 when we click on search we need to filter the restaraunt cards and update the UI.
 we will need search text .
 Whatever is there in the input box to get that data from the input box we need to get the value of input box and we need to bind this input box to local state variable of react.
 Now, we will create one more local state variable and bind it to our input box.
 As soon as my input changes on change we need to update the searchtext so that it updates.
 We will use change handler for this.
Body component renders each time whenever we do a key press.

Now , we need to write the filter logic and update the UI.


# UseEffect :- we use 2 arguments in this hook one is callback function and another is dependency array.

If there is no dependency array => useEffect will be called on every render.
If dependency array is empty = [] => useEffect is called on initial render(just once).
If dependency array is [btnNameReact] => called everytime when btnNameReact is updated.


# Creating different routes inside the react app.

For this we will use npm js library and that library is react router dom.Just write npm install react-router-dom
in the terminal after that we can see in the package.json and package.lock.json there is a react-router-dom.

For creating route we will go to the sibling.js , this is the root level component of our app over there we will create routing configuration. whenever we have to create route we will create routing configuration.

# React is a single application.

# 2 types of routing in webapps
 1. Client side routing:- Not making network calls , all the components are already loaded in our app.
    we are using this in our app.
 2. Server side routing:- A user clicks a link that requests a new page or new data from the server (another    computer). And then new data or document is served to the user.Network call is made.


# Class based component

 Whole lifecycle 
  ----Mounting ------

 -constructor(dummy)
 -render(dummy)
 -<HTML dummy>
 -component did mount
 -<API call>
 -this.setstate --> state variable is updated 
 
 ----Updating----

 -render(api data)
 - <HTML new api data>
 - component did update

