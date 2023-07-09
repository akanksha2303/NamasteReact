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

 -useState():- superpowerful state variables in react
 -useEffect()

 # useState() hook
  => It gives us the access to super powerful state variable inside the react and why is this superpowerful
   bcz react keeps track on it and whenever these variable updates it will trigger its diff algorithm,it will find out the difference between virtual DOM and automatically updates the UI.it keeps the datalayer and UIlayer in sync and that is what core algorithm of react is.

 **whenever a state variable updates, react re-renders the component.**

 --> React uses Reconciliation algorithm(also known as react fibre) which came in React16.
    whenever something changes on UI , it is known as reconciliation.
    this reactfibre is the new way of finding the diff and updating the DOM.

 --> Diff algorithm:- It finds out the difference between updated virtual DOM and previous virtual DOM.

 --> Virtual DOM is a representation of actual DOM.
      virtual DOM:- It is basically the tag or elements that we see, it's kind of like js representation of it.
      React took that and built its core algorithm over that virtual DOM.
      React can efficiently find out the difference between vitual DOMs and update the UI , this is the 
      core of react algorithm

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


   #

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


         