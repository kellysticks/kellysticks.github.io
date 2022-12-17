   // run this function when the document is loaded
//    window.onload = function() {

//     // create a couple of elements in an empty HTML page
//     const main_heading = document.createElement("h1");
//     const heading_text = document.createTextNode("Hello dynamic world!");
//     main_heading.appendChild(heading_text);
//     document.body.appendChild(main_heading);
//  }

   // run this function when the document is loaded
   window.onload = function() {
    // Target items by id via the getElementById() method
    const helloElem = document.getElementById("hello");
    // We can access that element's css styles through the style property, and then accessing the css property through its camel-cased equivalent
    helloElem.style.color = "purple";

    const campusesContainer = document.getElementById("airbnbSpots");
    // The getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name.
    const airbnbSpots = campusesContainer.getElementsByTagName("li");

    // We can iterate through the returned collection with a for loop
    for (var i = 0; i < airbnbSpots.length; i++) {
         airbnbSpots[i].style.backgroundColor = "teal";
     }

     const button = document.getElementById('my-input-button');
     // Event parameter is the default object event that would have happened on user click
     button.onclick = function(event) {
       // The preventDefault() method lets us disable the default action, allowing us to override with our on functionality.
       event.preventDefault();
       MyApp.do_something("world");
     };
   };
 
   // We can define things outside of the `window.onload` that are evaluated
   // only when called.
   MyApp = {};
 
   MyApp.do_something = function(name) {
     console.log("Hello " + name);
 }